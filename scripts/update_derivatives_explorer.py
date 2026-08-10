#!/usr/bin/env python3
"""Cache liquid equity and ETF option chains for the Derivatives Explorer."""
import json
from datetime import datetime, timezone
from pathlib import Path
import yfinance as yf

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets/data/derivatives-explorer.json"
UNDERLYINGS = {"AAPL":"Apple","MSFT":"Microsoft","NVDA":"NVIDIA","AMZN":"Amazon","GOOGL":"Alphabet","META":"Meta Platforms","SPY":"SPDR S&P 500 ETF","QQQ":"Invesco QQQ"}

def number(v):
    try:
        x=float(v); return round(x,6) if x==x else None
    except (TypeError,ValueError): return None

def whole(v):
    value=number(v)
    return int(value) if value is not None else 0

def contracts(frame, spot):
    rows=[]
    for _,r in frame.iterrows():
        strike=number(r.get("strike"))
        if strike is None or not spot*.65 <= strike <= spot*1.35: continue
        rows.append({k:(whole(r.get(k)) if k in ("volume","openInterest") else number(r.get(k))) for k in ("strike","lastPrice","bid","ask","volume","openInterest","impliedVolatility")})
    return rows

def main():
    previous=json.loads(OUTPUT.read_text()) if OUTPUT.exists() else {"underlyings":{}}
    out={}
    for symbol,name in UNDERLYINGS.items():
        try:
            ticker=yf.Ticker(symbol); hist=ticker.history(period="5d",auto_adjust=True)
            spot=number(hist["Close"].dropna().iloc[-1]); chains={}
            for expiry in list(ticker.options)[:6]:
                try:
                    chain=ticker.option_chain(expiry)
                    chains[expiry]={"calls":contracts(chain.calls,spot),"puts":contracts(chain.puts,spot)}
                except Exception as exc: print(f"chain {symbol} {expiry}: {exc}")
            out[symbol]={"symbol":symbol,"name":name,"spot":spot,"currency":"USD","expirations":list(chains),"chains":chains}
        except Exception as exc:
            print(f"underlying {symbol}: {exc}")
            if symbol in previous.get("underlyings",{}): out[symbol]=previous["underlyings"][symbol]
    OUTPUT.write_text(json.dumps({"updated_at":datetime.now(timezone.utc).isoformat(),"source":"Yahoo Finance delayed market data","underlyings":out},separators=(",",":"))+"\n")
    print(f"Wrote {OUTPUT} with {len(out)} underlyings")

if __name__=="__main__": main()
