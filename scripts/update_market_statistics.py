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
}


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
            assets[symbol] = {
                "symbol": symbol,
                "name": name,
                "type": kind,
                "market": market,
                "currency": "CAD" if symbol.endswith(".TO") or symbol == "^GSPTSE" else "USD",
                "observations": observations,
            }
        except Exception as exc:
            print(f"history {symbol}: {exc}")
            if symbol in previous.get("assets", {}):
                assets[symbol] = previous["assets"][symbol]

    payload = {
        "updated_at": datetime.now(timezone.utc).isoformat(),
        "years": 5,
        "assets": assets,
    }
    OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"Wrote {OUTPUT} with {len(assets)} instruments")


if __name__ == "__main__":
    main()
