#!/usr/bin/env python3
"""Build the cached DCF Lab dataset from Yahoo Finance.

For every symbol in assets/data/dcf/watchlist.txt, fetch the fundamentals
needed by the DCF engine and pre-compute the *default* assumptions (the same
defaults as the public dcf.py framework). Valuation itself happens in the
browser so assumptions stay editable; this file only ships inputs + defaults.

Output: assets/data/dcf-lab.json
"""
from __future__ import annotations

import json
import math
import re
from datetime import datetime, timezone
from pathlib import Path

import yfinance as yf

ROOT = Path(__file__).resolve().parents[1]
DCF_DIR = ROOT / "assets" / "data" / "dcf"
WATCHLIST_FILE = DCF_DIR / "watchlist.txt"
GROUPS_FILE = DCF_DIR / "watchlists.yml"
OUTPUT = ROOT / "assets" / "data" / "dcf-lab.json"

# Framework defaults (kept in sync with the public dcf.py).
RF = 0.04
ERP = 0.05
G_TERM = 0.025
TAX = 0.21
YEARS = 5
G_MIN, G_MAX = -0.05, 0.15
SCENARIO_SPREAD = 0.05


def safe_float(value, default=None):
    try:
        result = float(value)
        return result if result == result else default
    except (TypeError, ValueError):
        return default


def last_nnz(series, n):
    """Last n non-null values of a pandas Series, oldest first."""
    try:
        vals = [float(v) for v in series.dropna().values[:n]][::-1]
        return [v for v in vals if v == v]
    except Exception:
        return []


def cagr(values):
    if len(values) < 2 or any(v <= 0 for v in values):
        return None
    return (values[-1] / values[0]) ** (1 / (len(values) - 1)) - 1


def line(df, name, n=3):
    if df is None or name not in df.index:
        return []
    return last_nnz(df.loc[name], n)


def parse_watchlists():
    """Minimal parser for our fixed watchlists.yml shape."""
    groups = []
    if not GROUPS_FILE.exists():
        return groups
    name, syms = None, None
    for raw in GROUPS_FILE.read_text().splitlines():
        m = re.match(r'\s*-\s*name:\s*"?(.*?)"?\s*$', raw)
        if m:
            if name is not None:
                groups.append({"name": name, "symbols": syms or []})
            name, syms = m.group(1), []
            continue
        m = re.match(r'\s*symbols:\s*\[(.*)\]\s*$', raw)
        if m and name is not None:
            syms = [s.strip() for s in m.group(1).split(",") if s.strip()]
    if name is not None:
        groups.append({"name": name, "symbols": syms or []})
    return groups


def fetch_symbol(symbol):
    """Returns (data_dict, error_message)."""
    t = yf.Ticker(symbol)
    try:
        info = t.info or {}
    except Exception as exc:
        return None, f"info unavailable: {exc}"
    price = info.get("currentPrice") or info.get("regularMarketPrice") or info.get("previousClose")
    if price is None:
        return None, "no price available"
    try:
        cf, fi, bs = t.cashflow, t.financials, t.balance_sheet
    except Exception as exc:
        return None, f"statements unavailable: {exc}"

    fcf_hist = line(cf, "Free Cash Flow")
    if not fcf_hist:
        ocf, capex = line(cf, "Operating Cash Flow"), line(cf, "Capital Expenditure")
        if ocf and capex and len(ocf) == len(capex):
            fcf_hist = [o - abs(c) for o, c in zip(ocf, capex)]
    ca_hist = line(fi, "Total Revenue")

    interest = None
    if cf is not None and "Interest Paid Supplemental Data" in cf.index:
        vals = last_nnz(cf.loc["Interest Paid Supplemental Data"], 1)
        interest = vals[-1] if vals else None
    cash, debt = None, None
    if bs is not None:
        if "Cash And Cash Equivalents" in bs.index:
            vals = last_nnz(bs.loc["Cash And Cash Equivalents"], 1)
            cash = vals[-1] if vals else None
        if "Total Debt" in bs.index:
            vals = last_nnz(bs.loc["Total Debt"], 1)
            debt = vals[-1] if vals else None

    data = {
        "name": info.get("longName") or info.get("shortName") or symbol,
        "price": safe_float(price),
        "currency": info.get("currency") or "USD",
        "market_cap": safe_float(info.get("marketCap")),
        "shares": safe_float(info.get("sharesOutstanding")),
        "beta": safe_float(info.get("beta")),
        "fcf_hist": fcf_hist,
        "ca_hist": ca_hist,
        "interest_paid": interest,
        "cash": cash,
        "total_debt": debt,
    }

    # --- default assumptions (mirror dcf.py) ---
    positives = [v for v in fcf_hist if v > 0]
    if fcf_hist and fcf_hist[-1] > 0:
        fcf_base = fcf_hist[-1]
    elif positives:
        fcf_base = sum(positives) / len(positives)
    else:
        return None, "no usable free-cash-flow history"
    g = cagr(fcf_hist)
    if g is None:
        g = cagr(ca_hist)
    g_base = min(max(g if g is not None else 0.05, G_MIN), G_MAX)
    margin = fcf_base / ca_hist[-1] if ca_hist and ca_hist[-1] > 0 else None
    beta = data["beta"] or 1.0
    ke = RF + beta * ERP
    cap, d = data["market_cap"], data["total_debt"]
    if d and d > 0 and cap and cap > 0:
        wd = d / (d + cap)
        kd = interest / d if interest and interest / d >= 0.02 else RF + 0.025
        wacc = (1 - wd) * ke + wd * kd * (1 - TAX)
    else:
        wacc = ke
    data["dflt"] = {
        "fcf_base": fcf_base,
        "g_base": g_base,
        "g_high": min(g_base + SCENARIO_SPREAD, 0.30),
        "g_low": max(g_base - SCENARIO_SPREAD, -0.10),
        "margin": margin,
        "beta": beta,
        "ke": ke,
        "wacc": wacc,
        "g_term": G_TERM,
        "years": YEARS,
        "net_debt": (d or 0.0) - (cash or 0.0),
    }
    return data, None


def main():
    symbols = [s.strip() for s in WATCHLIST_FILE.read_text().splitlines() if s.strip()]
    out, errors = {}, 0
    for symbol in symbols:
        try:
            data, err = fetch_symbol(symbol)
        except Exception as exc:  # never let one ticker kill the batch
            data, err = None, str(exc)
        if err:
            out[symbol] = {"error": err}
            errors += 1
            print(f"skip {symbol}: {err}")
        else:
            out[symbol] = data
    snapshot = {
        "updated_at": datetime.now(timezone.utc).isoformat(),
        "framework_defaults": {"rf": RF, "erp": ERP, "g_term": G_TERM, "tax": TAX, "years": YEARS},
        "watchlists": parse_watchlists(),
        "symbols": out,
        "errors": errors,
    }
    OUTPUT.write_text(json.dumps(snapshot, ensure_ascii=False, indent=1) + "\n")
    print(f"Wrote {OUTPUT} ({len(symbols) - errors}/{len(symbols)} ok)")


if __name__ == "__main__":
    main()
