(() => {
  "use strict";
  const products = [
    ["equity-options", "Equity & ETF options", "AAPL · SPY · QQQ · IWM", "Directional exposure, income, volatility and hedging", "Premium loss, assignment and early exercise"],
    ["index-options", "Index options", "SPX · NDX · RUT · VIX", "Cash-settled broad-market and volatility exposure", "Settlement rules, leverage and volatility"],
    ["futures", "Futures", "ES · NQ · CL · GC · ZN · BTC", "Indices, commodities, rates and crypto with margin", "Daily variation margin and leveraged losses"],
    ["futures-options", "Options on futures", "ES · CL · GC · ZN options", "Defined-risk views on futures markets", "Exercise into futures and contract specifications"],
    ["forex", "FX derivatives", "Currency futures · options · spot FX", "Currency exposure and international hedging", "Leverage, rollover and central-bank gaps"],
    ["rates", "Rates derivatives", "Treasury futures · SOFR · bond options", "Duration, curve and policy-rate scenarios", "Basis, convexity and delivery mechanics"],
    ["warrants", "Warrants & structured products", "Listed warrants · rights · convertibles", "Issuer-specific leveraged or convertible exposure", "Issuer credit, dilution and limited liquidity"],
    ["single-stock-futures", "Single-stock futures", "European and Asian single-name futures", "Synthetic equity exposure through an exchange-listed future", "Margin, dividends, expiry and liquidity"],
    ["cfd", "Contracts for difference", "Equity · index · FX · commodity CFDs", "Jurisdiction-dependent leveraged price exposure", "Financing, counterparty and leverage risk"],
    ["crypto-derivatives", "Crypto derivatives", "BTC · ETH futures and options", "Regulated futures or options on digital assets", "Extreme volatility, gaps and margin"]
  ];
  const select = document.getElementById("dxProduct"), output = document.getElementById("dxProducts");
  function render() {
    output.innerHTML = products.map(p => `<article class="dx-product ${p[0] === select.value ? "active" : ""}"><span>${p[0] === select.value ? "Selected product" : "Market product"}</span><h3>${p[1]}</h3><b>${p[2]}</b><p>${p[3]}</p><small>${p[4]}</small></article>`).join("");
  }
  select.addEventListener("change", render);
  render();
})();
