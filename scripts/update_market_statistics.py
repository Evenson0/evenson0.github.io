#!/usr/bin/env python3
"""Build the historical dataset used by the Market Statistics browser tool."""
from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

import yfinance as yf

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "data" / "market-statistics.json"

UNIVERSE = {
    "^GSPC": ("S&P 500", "Index", "United States"),
    "^IXIC": ("Nasdaq Composite", "Index", "United States"),
    "^DJI": ("Dow Jones Industrial Average", "Index", "United States"),
    "^GSPTSE": ("S&P/TSX Composite", "Index", "Canada"),
    "^RUT": ("Russell 2000", "Index", "United States"),
    "^VIX": ("CBOE Volatility Index", "Index", "United States"),
    "^FTSE": ("FTSE 100", "Index", "United Kingdom"),
    "^GDAXI": ("DAX", "Index", "Germany"),
    "^FCHI": ("CAC 40", "Index", "France"),
    "^N225": ("Nikkei 225", "Index", "Japan"),
    "^HSI": ("Hang Seng Index", "Index", "Hong Kong"),
    "^NDX": ("Nasdaq-100", "Index", "United States"),
    "^AXJO": ("S&P/ASX 200", "Index", "Australia"),
    "^BSESN": ("BSE Sensex", "Index", "India"),
    "^NSEI": ("Nifty 50", "Index", "India"),
    "^KS11": ("KOSPI Composite", "Index", "South Korea"),
    "^TWII": ("Taiwan Weighted Index", "Index", "Taiwan"),
    "^STI": ("Straits Times Index", "Index", "Singapore"),
    "^BVSP": ("Bovespa", "Index", "Brazil"),
    "^MXX": ("S&P/BMV IPC", "Index", "Mexico"),
    "^SSMI": ("Swiss Market Index", "Index", "Switzerland"),
    "^IBEX": ("IBEX 35", "Index", "Spain"),
    "^AEX": ("AEX", "Index", "Netherlands"),
    "^OMX": ("OMX Stockholm 30", "Index", "Sweden"),
    "SPY": ("SPDR S&P 500 ETF", "ETF", "United States"),
    "QQQ": ("Invesco QQQ", "ETF", "United States"),
    "DIA": ("SPDR Dow Jones ETF", "ETF", "United States"),
    "IWM": ("iShares Russell 2000 ETF", "ETF", "United States"),
    "VTI": ("Vanguard Total Stock Market ETF", "ETF", "United States"),
    "VT": ("Vanguard Total World Stock ETF", "ETF", "Global"),
    "EFA": ("iShares MSCI EAFE ETF", "ETF", "Developed markets"),
    "EEM": ("iShares MSCI Emerging Markets ETF", "ETF", "Emerging markets"),
    "XIU.TO": ("iShares S&P/TSX 60 ETF", "ETF", "Canada"),
    "XIC.TO": ("iShares Core S&P/TSX Capped Composite ETF", "ETF", "Canada"),
    "AAPL": ("Apple", "Equity", "United States"),
    "MSFT": ("Microsoft", "Equity", "United States"),
    "NVDA": ("NVIDIA", "Equity", "United States"),
    "AMZN": ("Amazon", "Equity", "United States"),
    "GOOGL": ("Alphabet", "Equity", "United States"),
    "META": ("Meta Platforms", "Equity", "United States"),
    "TSLA": ("Tesla", "Equity", "United States"),
    "JPM": ("JPMorgan Chase", "Equity", "United States"),
    "RY.TO": ("Royal Bank of Canada", "Equity", "Canada"),
    "TD.TO": ("Toronto-Dominion Bank", "Equity", "Canada"),
    "SHOP.TO": ("Shopify", "Equity", "Canada"),
    "CNR.TO": ("Canadian National Railway", "Equity", "Canada"),
    "^TNX": ("US 10-Year Treasury Yield", "Macro", "United States"),
    "DX-Y.NYB": ("US Dollar Index", "Macro", "Global"),
    "CL=F": ("WTI Crude Oil", "Macro", "Global"),
    "GC=F": ("Gold", "Macro", "Global"),
}

MEMBERSHIPS = {
    "AAPL": ["S&P 500", "Nasdaq-100", "Dow Jones"], "MSFT": ["S&P 500", "Nasdaq-100", "Dow Jones"],
    "NVDA": ["S&P 500", "Nasdaq-100", "Dow Jones"], "AMZN": ["S&P 500", "Nasdaq-100", "Dow Jones"],
    "GOOGL": ["S&P 500", "Nasdaq-100"], "META": ["S&P 500", "Nasdaq-100"],
    "TSLA": ["S&P 500", "Nasdaq-100"], "JPM": ["S&P 500", "Dow Jones"],
    "RY.TO": ["S&P/TSX Composite", "S&P/TSX 60"], "TD.TO": ["S&P/TSX Composite", "S&P/TSX 60"],
    "SHOP.TO": ["S&P/TSX Composite", "S&P/TSX 60"], "CNR.TO": ["S&P/TSX Composite", "S&P/TSX 60"],
}

ALIASES = {"SPX": "^GSPC", "S&P 500": "^GSPC", "TSX": "^GSPTSE", "COMP": "^IXIC", "NDX": "^NDX", "DJIA": "^DJI", "DOW": "^DJI", "VIX": "^VIX", "CAC 40": "^FCHI", "DAX": "^GDAXI", "NIKKEI": "^N225", "FTSE": "^FTSE"}


def clean_number(value):
    try:
        number = float(value)
        return round(number, 6) if number == number else None
    except (TypeError, ValueError):
        return None


def main() -> None:
    previous = json.loads(OUTPUT.read_text()) if OUTPUT.exists() else {"assets": {}}
    assets = {}

    for symbol, (name, kind, market) in UNIVERSE.items():
        try:
            frame = yf.Ticker(symbol).history(period="5y", interval="1d", auto_adjust=True)
            frame = frame.dropna(subset=["Close"])
            if frame.empty:
                raise ValueError("empty history")
            observations = []
            for date, row in frame.iterrows():
                observations.append([
                    date.strftime("%Y-%m-%d"),
                    clean_number(row.get("Close")),
                    int(row.get("Volume", 0) or 0),
                ])
            ticker = yf.Ticker(symbol)
            profile = {}
            financials = []
            news = []
            if kind == "Equity":
                try:
                    info = ticker.info or {}
                    profile = {key: info.get(key) for key in ["exchange", "fullExchangeName", "sector", "industry", "country", "website", "marketCap", "trailingPE", "forwardPE", "priceToBook", "dividendYield", "enterpriseToEbitda", "beta"]}
                    profile["memberships"] = MEMBERSHIPS.get(symbol, [])
                    profile["quoteType"] = info.get("quoteType")
                    q = ticker.quarterly_income_stmt
                    if q is not None and not q.empty:
                        for column in list(q.columns)[:4]:
                            def row_value(label):
                                return clean_number(q.loc[label, column]) if label in q.index else None
                            financials.append({"period": column.strftime("%Y-%m-%d"), "revenue": row_value("Total Revenue"), "gross_profit": row_value("Gross Profit"), "operating_income": row_value("Operating Income"), "net_income": row_value("Net Income"), "diluted_eps": row_value("Diluted EPS")})
                    for item in ticker.news[:6]:
                        content = item.get("content", item)
                        title = content.get("title")
                        link = content.get("canonicalUrl", {}).get("url") or content.get("clickThroughUrl", {}).get("url") or item.get("link")
                        if title and link:
                            news.append({"title": title, "link": link, "publisher": content.get("provider", {}).get("displayName", "Market source"), "published": content.get("pubDate", "Latest")})
                except Exception as detail_exc:
                    print(f"details {symbol}: {detail_exc}")
            assets[symbol] = {
                "symbol": symbol,
                "name": name,
                "type": kind,
                "market": market,
                "currency": "CAD" if symbol.endswith(".TO") or symbol == "^GSPTSE" else "USD",
                "observations": observations,
                "profile": profile,
                "financials": financials,
                "news": news,
            }
        except Exception as exc:
            print(f"history {symbol}: {exc}")
            if symbol in previous.get("assets", {}):
                assets[symbol] = previous["assets"][symbol]

    payload = {
        "updated_at": datetime.now(timezone.utc).isoformat(),
        "years": 5,
        "aliases": ALIASES,
        "assets": assets,
    }
    OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"Wrote {OUTPUT} with {len(assets)} instruments")


if __name__ == "__main__":
    main()
