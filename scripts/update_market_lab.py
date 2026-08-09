#!/usr/bin/env python3
"""Build the cached Market Lab snapshot from Yahoo Finance."""
from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

import yfinance as yf

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "data" / "market-lab.json"

GROUPS = {
    "Indices": {
        "^GSPC": "S&P 500", "^IXIC": "Nasdaq Composite", "^DJI": "Dow Jones",
        "^GSPTSE": "S&P/TSX Composite", "XIU.TO": "S&P/TSX 60 ETF", "^RUT": "Russell 2000",
        "^FTSE": "FTSE 100", "^N225": "Nikkei 225",
    },
    "Equities": {
        "AAPL": "Apple", "MSFT": "Microsoft", "NVDA": "NVIDIA", "AMZN": "Amazon",
        "RY.TO": "Royal Bank", "SHOP.TO": "Shopify", "CNR.TO": "Canadian National",
    },
    "Rates": {"^IRX": "US 13-week yield", "^FVX": "US 5-year yield", "^TNX": "US 10-year yield", "^TYX": "US 30-year yield"},
    "FX": {"CAD=X": "USD / CAD", "EURUSD=X": "EUR / USD", "GBPUSD=X": "GBP / USD", "JPY=X": "USD / JPY"},
    "Commodities": {"GC=F": "Gold", "CL=F": "WTI Crude", "NG=F": "Natural Gas", "HG=F": "Copper"},
}

NEWS_TICKERS = ["^GSPC", "^GSPTSE", "^TNX", "GC=F"]
EARNINGS_TICKERS = ["AAPL", "MSFT", "NVDA", "AMZN", "RY.TO", "SHOP.TO"]


def safe_float(value, default=0.0):
    try:
        result = float(value)
        return result if result == result else default
    except (TypeError, ValueError):
        return default


def asset_snapshot(symbol: str, name: str) -> dict:
    ticker = yf.Ticker(symbol)
    history = ticker.history(period="1y", interval="1d", auto_adjust=False)
    if history.empty:
        return {"symbol": symbol, "name": name, "price": 0, "change_pct": 0, "low_52w": 0, "high_52w": 0}
    closes = history["Close"].dropna()
    price = safe_float(closes.iloc[-1])
    previous = safe_float(closes.iloc[-2], price) if len(closes) > 1 else price
    change = (price / previous - 1) * 100 if previous else 0
    return {
        "symbol": symbol, "name": name, "price": round(price, 4),
        "change_pct": round(change, 3), "low_52w": round(safe_float(closes.min()), 4),
        "high_52w": round(safe_float(closes.max()), 4),
    }


def collect_news() -> list[dict]:
    stories, seen = [], set()
    for symbol in NEWS_TICKERS:
        try:
            for item in yf.Ticker(symbol).news[:6]:
                content = item.get("content", item)
                title = content.get("title")
                link = content.get("canonicalUrl", {}).get("url") or content.get("clickThroughUrl", {}).get("url") or item.get("link")
                if not title or not link or title in seen:
                    continue
                seen.add(title)
                stories.append({"title": title, "link": link, "publisher": content.get("provider", {}).get("displayName", "Yahoo Finance"), "related": symbol, "time": "Latest"})
        except Exception as exc:
            print(f"news {symbol}: {exc}")
    return stories[:12]


def collect_earnings() -> list[dict]:
    rows = []
    for symbol in EARNINGS_TICKERS:
        try:
            ticker = yf.Ticker(symbol)
            info = ticker.fast_info
            calendar = ticker.calendar or {}
            dates = calendar.get("Earnings Date", []) if isinstance(calendar, dict) else []
            when = dates[0].strftime("%b %d") if dates else "Watch"
            rows.append({"symbol": symbol, "name": GROUPS["Equities"].get(symbol, symbol), "when": when, "note": "Upcoming earnings and investor materials", "link": f"https://finance.yahoo.com/quote/{symbol}/"})
        except Exception as exc:
            print(f"earnings {symbol}: {exc}")
    return rows


def main() -> None:
    previous = json.loads(OUTPUT.read_text()) if OUTPUT.exists() else {}
    assets = {}
    for group, symbols in GROUPS.items():
        assets[group] = []
        for symbol, name in symbols.items():
            try:
                assets[group].append(asset_snapshot(symbol, name))
            except Exception as exc:
                print(f"quote {symbol}: {exc}")
    curve_map = {"3M": "^IRX", "5Y": "^FVX", "10Y": "^TNX", "30Y": "^TYX"}
    rate_lookup = {row["symbol"]: row["price"] for row in assets.get("Rates", [])}
    snapshot = {
        "updated_at": datetime.now(timezone.utc).isoformat(), "assets": assets,
        "yield_curve": [{"term": term, "value": rate_lookup.get(symbol, 0)} for term, symbol in curve_map.items()],
        "news": collect_news() or previous.get("news", []),
        "earnings": collect_earnings() or previous.get("earnings", []),
        "macro_events": previous.get("macro_events", []),
    }
    OUTPUT.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n")
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
