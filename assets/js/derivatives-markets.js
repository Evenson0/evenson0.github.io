(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const labels = {
    "equity-options":"Equity & ETF options", "index-options":"Index options", futures:"Futures",
    "futures-options":"Options on futures", forex:"FX & currency derivatives",
    rates:"Rates derivatives", warrants:"Warrants & structured products", "single-stock-futures":"Single-stock futures",
    cfd:"Contracts for difference", "crypto-derivatives":"Crypto derivatives"
  };
  async function start() {
    const catalog = await fetch("/assets/data/derivatives-markets.json?v=1", {cache:"no-store"}).then(r => r.json());
    let attempts = 0;
    const timer = setInterval(() => {
      if (typeof $("dxSymbol").onchange !== "function" && attempts++ < 80) return;
      clearInterval(timer);
      configure(catalog.instruments);
    }, 50);
  }
  function configure(items) {
    const market = $("dxMarket"), product = $("dxProduct"), symbol = $("dxSymbol"), expiry = $("dxExpiry"), run = $("dxRun");
    const originalSymbolChange = symbol.onchange, originalRun = run.onclick;
    const markets = [...new Set(items.map(x => x.market))];
    market.innerHTML = markets.map(x => `<option>${x}</option>`).join("");
    function filterProducts() {
      const available = [...new Set(items.filter(x => x.market === market.value).map(x => x.product))];
      product.innerHTML = available.map(x => `<option value="${x}">${labels[x] || x}</option>`).join("");
      filterSymbols();
    }
    function filterSymbols() {
      const available = items.filter(x => x.market === market.value && x.product === product.value);
      symbol.innerHTML = available.map(x => `<option value="${x.symbol}">${x.symbol} · ${x.name} · ${x.venue}</option>`).join("");
      showSelection();
    }
    function showSelection() {
      const item = items.find(x => x.market === market.value && x.product === product.value && x.symbol === symbol.value);
      if (!item) return;
      $("dxWorkspace").hidden = false;
      if (item.chain) {
        expiry.disabled = false;
        run.onclick = originalRun;
        originalSymbolChange({target:symbol});
        return;
      }
      expiry.innerHTML = '<option>Reference data required</option>';
      expiry.disabled = true;
      $("dxName").textContent = `${item.symbol} · ${item.name}`;
      $("dxSpot").textContent = item.venue;
      $("dxDate").textContent = "No cached chain";
      $("dxDte").textContent = "—";
      const note = `<tr><td colspan="7"><div class="dx-market-note"><b>${item.market} · ${labels[item.product]}</b><br>${item.name} is available in the market catalogue, but this static site does not currently hold a licensed contract chain for ${item.venue}. Verify listings, quotes and permissions with the broker.</div></td></tr>`;
      $("dxCalls").innerHTML = note; $("dxPuts").innerHTML = note;
      $("dxStrategies").innerHTML = `<div class="dx-market-note"><b>Contract data needed</b><br>A strategy can be calculated after strikes, expirations, premiums and contract multipliers are available.</div>`;
      run.onclick = () => document.querySelector('[data-view="universe"]').click();
    }
    market.addEventListener("change", filterProducts);
    product.addEventListener("change", filterSymbols);
    symbol.onchange = showSelection;
    filterProducts();
  }
  start().catch(error => { console.error(error); $("dxStatus").textContent = "Market catalogue unavailable."; });
})();
