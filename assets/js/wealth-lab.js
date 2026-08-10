(() => {
  "use strict";
  const $ = id => document.getElementById(id);
  const money = n => Number(n).toLocaleString("en-CA", { style: "currency", currency: "CAD", minimumFractionDigits: 2 });
  const compact = n => new Intl.NumberFormat("en-CA", { notation: "compact", style: "currency", currency: "CAD", maximumFractionDigits: 1 }).format(n);
  const value = id => Number($(id).value) || 0;

  function simulate(months, initial, contribution, monthlyRate) {
    let balance = initial, paid = initial;
    const rows = [{ month: 0, contribution: initial, interest: 0, paid, balance }];
    for (let month = 1; month <= months; month++) {
      const interest = balance * monthlyRate;
      balance += interest + contribution;
      paid += contribution;
      rows.push({ month, contribution, interest, paid, balance });
    }
    return rows;
  }

  function requiredMonthly(target, months, initial, rate) {
    if (!months) return 0;
    if (!rate) return Math.max(0, (target - initial) / months);
    return Math.max(0, (target - initial * Math.pow(1 + rate, months)) * rate / (Math.pow(1 + rate, months) - 1));
  }

  function monthsTo(target, initial, contribution, rate) {
    let balance = initial;
    for (let month = 0; month <= 1200; month++) {
      if (balance >= target) return month;
      balance = balance * (1 + rate) + contribution;
    }
    return null;
  }

  function drawChart(rows) {
    const W = 920, H = 360, L = 76, R = 20, T = 24, B = 48;
    const max = Math.max(...rows.map(r => r.balance), 1);
    const x = i => L + i / (rows.length - 1) * (W - L - R);
    const y = n => T + (1 - n / max) * (H - T - B);
    const path = key => rows.map((r, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(r[key]).toFixed(1)}`).join(" ");
    const yTicks = Array.from({ length: 6 }, (_, i) => max * i / 5);
    const xTicks = [0, 60, 120, 180, 240, 300].filter(m => m <= rows.length - 1);
    $("wlChart").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Account balance and total contributions over 25 years">
      ${yTicks.map(v => `<line class="wl-grid" x1="${L}" y1="${y(v)}" x2="${W-R}" y2="${y(v)}"/><text x="${L-10}" y="${y(v)+4}" text-anchor="end">${compact(v)}</text>`).join("")}
      ${xTicks.map(m => `<line class="wl-grid" x1="${x(m)}" y1="${T}" x2="${x(m)}" y2="${H-B}"/><text x="${x(m)}" y="${H-18}" text-anchor="middle">${m/12}y</text>`).join("")}
      <line class="wl-axis" x1="${L}" y1="${T}" x2="${L}" y2="${H-B}"/><line class="wl-axis" x1="${L}" y1="${H-B}" x2="${W-R}" y2="${H-B}"/>
      <path class="wl-paid" d="${path("paid")}"/><path class="wl-line" d="${path("balance")}"/>
      <text class="wl-y-title" transform="translate(17 ${H/2}) rotate(-90)" text-anchor="middle">ACCOUNT VALUE (CAD)</text><text class="wl-x-title" x="${(L+W-R)/2}" y="${H-2}" text-anchor="middle">YEARS</text>
    </svg><div class="wl-legend"><span><i class="balance"></i>Account balance</span><span><i class="paid"></i>Total contributed</span></div>`;
  }

  function render() {
    const initial = value("wlInitial"), contribution = value("wlMonthly"), rate = value("wlRate") / 100;
    const target = value("wlTarget"), annual = Math.pow(1 + rate, 12) - 1;
    const horizons = [5, 10, 15, 25];
    const sets = horizons.map(years => ({ years, rows: simulate(years * 12, initial, contribution, rate) }));
    $("wlKpis").innerHTML = sets.map(({ years, rows }) => {
      const last = rows.at(-1), growth = last.balance - last.paid;
      return `<article class="wl-kpi"><span>${years} years</span><strong>${money(last.balance)}</strong><small>${money(last.paid)} invested · ${money(growth)} growth</small></article>`;
    }).join("");
    const full = sets.at(-1).rows;
    drawChart(full);
    const needed = requiredMonthly(1000000, 60, initial, rate);
    const targetMonths = monthsTo(target, initial, contribution, rate);
    const atTwo = simulate(300, initial, contribution, .02).at(-1);
    $("wlGoals").innerHTML = `<article><span>Effective annual return</span><strong>${(annual * 100).toFixed(2)}%</strong><small>Equivalent of ${(rate * 100).toFixed(2)}% compounded monthly</small></article><article><span>$1M in 5 years</span><strong>${money(needed)}/mo</strong><small>At the selected monthly return</small></article><article><span>${money(target)} target</span><strong>${targetMonths === null ? "100+ years" : `${Math.floor(targetMonths/12)}y ${targetMonths%12}m`}</strong><small>With current contributions</small></article><article><span>25 years at 2% monthly</span><strong>${money(atTwo.balance)}</strong><small>${money(atTwo.paid)} invested · ${money(atTwo.balance-atTwo.paid)} growth</small></article>`;
    const start = new Date(`${$("wlStart").value || "2026-08"}-01T12:00:00`);
    $("wlLedger").innerHTML = full.slice(1).map(r => { const d = new Date(start); d.setMonth(d.getMonth() + r.month - 1); return `<tr><td>${d.toLocaleDateString("en-CA", { month: "short", year: "numeric" })}</td><td>${money(r.contribution)}</td><td>${money(r.interest)}</td><td>${money(r.paid)}</td><td>${money(r.balance)}</td></tr>`; }).join("");
    $("wlFormula").innerHTML = `Monthly annuity: <b>FV = P(1+r)<sup>n</sup> + PMT × [((1+r)<sup>n</sup> − 1) / r]</b>, where r = ${(rate*100).toFixed(2)}% per month. The effective annual return is <b>(1+r)<sup>12</sup> − 1 = ${(annual*100).toFixed(2)}%</b>. Contributions are made at month-end.`;
  }

  async function unlock() {
    const bytes = new TextEncoder().encode($("wlCode").value);
    const hash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes))).map(b => b.toString(16).padStart(2, "0")).join("");
    if (hash !== "b0d30a544ea3f7290f69c1ace620174c865da3dc241fc70293297486fc98c89f") { $("wlGateError").textContent = "Incorrect access code."; return; }
    $("wlGate").hidden = true; $("wlShell").hidden = false; render();
  }
  $("wlUnlock").onclick = unlock;
  $("wlCode").onkeydown = event => { if (event.key === "Enter") unlock(); };
  $("wlRun").onclick = render;
})();
