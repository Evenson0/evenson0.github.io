(() => {
  "use strict";

  const app = document.getElementById("plApp");
  if (!app) return;

  const source = app.dataset.source;
  const $ = (id) => document.getElementById(id);

  const copy = {
    en: {
      eyebrow: "PUBLIC RESEARCH LEDGER",
      intro: "A public research view of positions I am actively studying. Account balances, quantities, cash and deposits remain private.",
      principleLabel: "PRINCIPLE",
      principle: "Track the thesis, not the ego.",
      principleCopy: "A +10% level is a review trigger, not a promise, forecast, or reason to hold a broken thesis.",
      asOf: "Snapshot",
      fx: "USD/CAD",
      tracked: "Tracked positions",
      privacy: "Privacy",
      privacyValue: "Balances hidden",
      monitoring: "MONITORING",
      positionsTitle: "Positions under review",
      positionsCopy: "Prices are a dated snapshot. Select a position to inspect the thesis, catalyst, risks and exit discipline.",
      selectPosition: "Select a position above to open the research note.",
      ledger: "LEDGER",
      tableTitle: "Public tracking table",
      tableCopy: "The review level is derived from a personal +10% rule. It is not a target price or investment recommendation.",
      ticker: "Ticker",
      priceUsd: "Price USD",
      priceCad: "CAD equivalent",
      reviewLevel: "+10% review",
      distance: "Distance",
      risk: "Risk",
      method: "METHOD",
      methodTitle: "What this page is measuring",
      m1Title: "Thesis",
      m1Copy: "Why the security is worth following and what must be true for the idea to work.",
      m2Title: "Evidence",
      m2Copy: "Operating metrics, earnings, catalysts and risks that can strengthen or weaken the thesis.",
      m3Title: "Discipline",
      m3Copy: "A review rule prevents a price objective from replacing fundamental judgment.",
      footer: "Personal research project. Not investment advice. Market data shown here may be delayed or stale.",
      current: "Current",
      cadEquivalent: "CAD equivalent",
      review: "Review level",
      toReview: "to review",
      thesis: "Thesis",
      focus: "Evidence to watch",
      catalyst: "Catalyst",
      riskDiscipline: "Risk & discipline",
      riskRule: "If the operating thesis materially deteriorates, re-underwrite before waiting for the review level.",
      riskHigh: "High",
      riskModerateHigh: "Moderate-high",
      riskModerate: "Moderate",
      reached: "Reached",
      near: "Near review",
      monitoringStatus: "Monitoring"
    },
    fr: {
      eyebrow: "REGISTRE PUBLIC DE RECHERCHE",
      intro: "Une vue publique des positions que j’étudie activement. La valeur du compte, les quantités, les liquidités et les dépôts restent privés.",
      principleLabel: "PRINCIPE",
      principle: "Suivre la thèse, pas l’ego.",
      principleCopy: "Le niveau de +10 % déclenche une révision. Ce n’est ni une promesse, ni une prévision, ni une raison de conserver une thèse brisée.",
      asOf: "Instantané",
      fx: "USD/CAD",
      tracked: "Positions suivies",
      privacy: "Confidentialité",
      privacyValue: "Soldes masqués",
      monitoring: "SUIVI",
      positionsTitle: "Positions sous surveillance",
      positionsCopy: "Les prix correspondent à un instantané daté. Sélectionner une position ouvre la thèse, le catalyseur, les risques et la discipline de sortie.",
      selectPosition: "Sélectionne une position pour ouvrir la note de recherche.",
      ledger: "REGISTRE",
      tableTitle: "Tableau public de suivi",
      tableCopy: "Le niveau de révision découle d’une règle personnelle de +10 %. Ce n’est pas un cours cible ni une recommandation d’investissement.",
      ticker: "Titre",
      priceUsd: "Prix USD",
      priceCad: "Équivalent CAD",
      reviewLevel: "Révision +10 %",
      distance: "Écart",
      risk: "Risque",
      method: "MÉTHODE",
      methodTitle: "Ce que cette page mesure",
      m1Title: "Thèse",
      m1Copy: "Pourquoi le titre mérite d’être suivi et ce qui doit rester vrai pour que l’idée fonctionne.",
      m2Title: "Preuves",
      m2Copy: "Indicateurs opérationnels, résultats, catalyseurs et risques qui peuvent renforcer ou affaiblir la thèse.",
      m3Title: "Discipline",
      m3Copy: "Une règle de révision empêche un objectif de prix de remplacer le jugement fondamental.",
      footer: "Projet personnel de recherche. Ceci ne constitue pas un conseil en investissement. Les données de marché peuvent être retardées ou périmées.",
      current: "Actuel",
      cadEquivalent: "Équivalent CAD",
      review: "Niveau de révision",
      toReview: "jusqu’à la révision",
      thesis: "Thèse",
      focus: "Éléments à surveiller",
      catalyst: "Catalyseur",
      riskDiscipline: "Risque et discipline",
      riskRule: "Si la thèse opérationnelle se détériore sensiblement, la position doit être réévaluée avant d’attendre le niveau de révision.",
      riskHigh: "Élevé",
      riskModerateHigh: "Modéré-élevé",
      riskModerate: "Modéré",
      reached: "Atteint",
      near: "Proche",
      monitoringStatus: "Suivi"
    }
  };

  const state = {
    data: null,
    lang: localStorage.getItem("portfolioLab.language") || "en",
    selected: null
  };

  const t = (key) => copy[state.lang][key] || key;
  const moneyUsd = (n) => new Intl.NumberFormat(state.lang === "fr" ? "fr-CA" : "en-CA", {
    style: "currency", currency: "USD", minimumFractionDigits: 2
  }).format(n);
  const moneyCad = (n) => new Intl.NumberFormat(state.lang === "fr" ? "fr-CA" : "en-CA", {
    style: "currency", currency: "CAD", minimumFractionDigits: 2
  }).format(n);
  const pct = (n) => new Intl.NumberFormat(state.lang === "fr" ? "fr-CA" : "en-CA", {
    style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1
  }).format(n);

  function riskLabel(value) {
    const key = value === "High" ? "riskHigh" : value === "Moderate-high" ? "riskModerateHigh" : "riskModerate";
    return t(key);
  }

  function riskClass(value) {
    return String(value).toLowerCase().replace(/[^a-z]+/g, "-");
  }

  function translated(position, field) {
    return state.lang === "fr" ? (position[`${field}_fr`] || position[field]) : position[field];
  }

  function distance(position) {
    return position.reviewUsd / position.currentUsd - 1;
  }

  function status(position) {
    const d = distance(position);
    if (d <= 0) return t("reached");
    if (d <= 0.07) return t("near");
    return t("monitoringStatus");
  }

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (copy[state.lang][key]) node.textContent = copy[state.lang][key];
    });
    document.querySelectorAll(".pl-lang button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === state.lang);
    });
  }

  function renderCards() {
    $("plCards").innerHTML = state.data.positions.map((p) => {
      const d = distance(p);
      const progress = Math.max(0, Math.min(100, (p.currentUsd / p.reviewUsd) * 100));
      return `
        <button class="pl-card ${state.selected === p.ticker ? "is-active" : ""}" type="button" data-ticker="${p.ticker}">
          <div class="pl-card__top">
            <span class="pl-card__ticker">${p.ticker}</span>
            <span class="pl-risk pl-risk--${riskClass(p.risk)}">${riskLabel(p.risk)}</span>
          </div>
          <div class="pl-card__company">${p.company}</div>
          <div class="pl-card__price">${moneyUsd(p.currentUsd)}</div>
          <div class="pl-card__meta">
            <div><span>${t("review")}</span><strong>${moneyUsd(p.reviewUsd)}</strong></div>
            <div><span>${t("distance")}</span><strong>${pct(d)}</strong></div>
          </div>
          <div class="pl-progress" aria-hidden="true"><i style="width:${progress}%"></i></div>
        </button>`;
    }).join("");

    document.querySelectorAll(".pl-card").forEach((button) => {
      button.addEventListener("click", () => {
        state.selected = button.dataset.ticker;
        renderCards();
        renderDetail();
      });
    });
  }

  function renderTable() {
    $("plTable").innerHTML = state.data.positions.map((p) => `
      <tr>
        <td><strong>${p.ticker}</strong><br><span>${p.company}</span></td>
        <td>${moneyUsd(p.currentUsd)}</td>
        <td>${moneyCad(p.currentUsd * state.data.fx.rate)}</td>
        <td>${moneyUsd(p.reviewUsd)}</td>
        <td>${pct(distance(p))}</td>
        <td><span class="pl-risk pl-risk--${riskClass(p.risk)}">${riskLabel(p.risk)}</span></td>
      </tr>`).join("");
  }

  function renderDetail() {
    const p = state.data.positions.find((item) => item.ticker === state.selected);
    if (!p) {
      $("plDetail").innerHTML = `<div class="pl-empty">${t("selectPosition")}</div>`;
      return;
    }

    $("plDetail").innerHTML = `
      <div class="pl-detail__head">
        <div>
          <span class="pl-kicker">${p.ticker} · ${status(p)}</span>
          <h3>${p.company}</h3>
        </div>
        <div class="pl-detail__numbers">
          <div><span class="pl-detail__label">${t("current")}</span><strong>${moneyUsd(p.currentUsd)}</strong></div>
          <div><span class="pl-detail__label">${t("cadEquivalent")}</span><strong>${moneyCad(p.currentUsd * state.data.fx.rate)}</strong></div>
          <div><span class="pl-detail__label">${t("toReview")}</span><strong>${pct(distance(p))}</strong></div>
        </div>
      </div>
      <div class="pl-detail__grid">
        <article><span class="pl-detail__label">${t("thesis")}</span><h4>${p.ticker}</h4><p>${translated(p, "thesis")}</p></article>
        <article><span class="pl-detail__label">${t("focus")}</span><h4>${t("m2Title")}</h4><p>${translated(p, "focus")}</p></article>
        <article><span class="pl-detail__label">${t("catalyst")}</span><h4>${status(p)}</h4><p>${translated(p, "catalyst")}</p></article>
        <article><span class="pl-detail__label">${t("riskDiscipline")}</span><h4>${riskLabel(p.risk)}</h4><p>${translated(p, "riskNote")} ${t("riskRule")}</p></article>
      </div>`;
  }

  function renderMeta() {
    $("plAsOf").textContent = new Date(`${state.data.asOf}T12:00:00`).toLocaleDateString(
      state.lang === "fr" ? "fr-CA" : "en-CA",
      { year: "numeric", month: "short", day: "numeric" }
    );
    $("plFx").textContent = state.data.fx.rate.toFixed(4);
    $("plTracked").textContent = String(state.data.positions.length);
  }

  function render() {
    applyStaticTranslations();
    renderMeta();
    renderCards();
    renderTable();
    renderDetail();
  }

  document.querySelectorAll(".pl-lang button").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("portfolioLab.language", state.lang);
      render();
    });
  });

  fetch(source, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((data) => {
      state.data = data;
      state.selected = data.positions[0]?.ticker || null;
      render();
    })
    .catch((error) => {
      console.error("Portfolio Lab data error:", error);
      $("plCards").innerHTML = '<div class="pl-empty">Portfolio data could not be loaded.</div>';
    });
})();
