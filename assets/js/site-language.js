/*
 * Site-wide language layer.
 * One persistent control in the Jekyll masthead; tools with their own FR/EN controls
 * continue to own their interactive content. This translates authored interface
 * strings, never machine-translates financial/mathematical proofs or user data.
 */
(function () {
  "use strict";

  const STORAGE = "evenson.site.language";
  const localButtons = '#pa-lang-fr,#pa-lang-en,[data-cl-lang],[data-lang].pl-lang button,.pl-lang button[data-lang]';
  const skipSelector = "script,style,noscript,code,pre,textarea,svg,math,mjx-container,.MathJax,.p-atlas,.cl-shell,.pl-shell,[contenteditable],.site-language-switch";
  const strings = {
    "Follow":"Suivre",
    "Follow:":"Suivre :",
    "Feed":"Flux RSS",
    "Site last updated":"Site mis à jour",
    "Powered by":"Propulsé par",
    "Published:":"Publié :",
    "Recent Posts":"Articles récents",
    "You May Also Enjoy":"À lire également",
    "On This Page":"Sur cette page",
    "Page":"Page",
    "Read More":"Lire la suite",
    "Read more":"Lire la suite",
    "More":"En savoir plus",
    "Share on":"Partager sur",
    "Tags:":"Mots-clés :",
    "Categories:":"Catégories :",
    "Previous":"Précédent",
    "Next":"Suivant",
    "Home":"Accueil",
    "Website":"Site web",
    "Leave a Comment":"Laisser un commentaire",
    "Mathematical Workshop":"Atelier mathématique",
    "Tools":"Outils",
    "Memories":"Souvenirs",
    "List 100":"Liste 100",
    "Quantitative Laboratory":"Laboratoire quantitatif",
    "Mathematics":"Mathématiques",
    "Actuarial Science":"Science actuarielle",
    "P&C Actuarial Science":"Science actuarielle IARD",
    "Quantitative Finance":"Finance quantitative",
    "Financial Mathematics":"Mathématiques financières",
    "Selected Work":"Projets sélectionnés",
    "Selected Projects":"Projets sélectionnés",
    "Professional Experience":"Expérience professionnelle",
    "Experience":"Expérience",
    "Education":"Formation",
    "Skills":"Compétences",
    "Languages":"Langues",
    "Activities":"Activités",
    "Publications":"Publications",
    "Research":"Recherche",
    "Writing":"Écriture",
    "Work":"Travaux",
    "Achievements":"Réalisations",
    "About":"À propos",
    "Contact":"Contact",
    "Connect":"Me contacter",
    "Focus":"Domaines d’intérêt",
    "Actuarial science":"Science actuarielle",
    "Quantitative finance":"Finance quantitative",
    "Probability models":"Modèles probabilistes",
    "Mathematical writing":"Rédaction mathématique",
    "Open page":"Ouvrir la page",
    "Explore notes atlas":"Explorer l’atlas des notes",
    "Open PDF":"Ouvrir le PDF",
    "Practice":"Exercices",
    "Available Notes":"Notes disponibles",
    "Browse notes":"Parcourir les notes",
    "SOA FM Exam Notes":"Notes pour l’examen SOA FM",
    "SOA P Exam Notes":"Notes pour l’examen SOA P",
    "P&C Actuarial Essentials Notes":"Notions fondamentales d’actuariat IARD",
    "SOA Exam P Notes":"Notes pour l’examen SOA P",
    "SOA Exam FM Notes":"Notes pour l’examen SOA FM",
    "Financial Mathematics Calculator":"Calculatrice de mathématiques financières",
    "SOA FM Practice":"Exercices SOA FM",
    "SOA P Practice":"Exercices SOA P",
    "Chain Ladder Lab":"Laboratoire Chain Ladder",
    "Portfolio Lab":"Laboratoire de portefeuille",
    "Market Statistics":"Statistiques de marché",
    "Market Lab":"Laboratoire des marchés",
    "Random Walk Simulator":"Simulation de marche aléatoire",
    "Monty Hall Simulation":"Simulation de Monty Hall",
    "Prime Number":"Nombres premiers",
    "Goldbach Conjecture":"Conjecture de Goldbach",
    "Olympiad Practice":"Exercices olympiques",
    "Derivatives Explorer":"Exploration des produits dérivés",
    "Binomial Option Tree":"Arbre binomial d’options",
    "Wealth Lab":"Laboratoire patrimonial",
    "DCF Lab":"Laboratoire DCF",
    "Bonds":"Obligations",
    "Bond Intelligence":"Analyse des obligations",
    "Things I want to do before I die":"Ce que je veux accomplir au cours de ma vie",
    "Places and Trails":"Lieux et sentiers",
    "Visited":"Visités",
    "Planned":"Prévus",
    "Completed":"Terminés",
    "To Do":"À faire",
    "All":"Tout",
    "Trails":"Sentiers",
    "Places":"Lieux",
    "Projects":"Projets",
    "Articles":"Articles",
    "Models":"Modèles",
    "Model":"Modèle",
    "Tool":"Outil",
    "Simulation":"Simulation",
    "All tools":"Tous les outils",
    "Open tool":"Ouvrir l’outil",
    "Tools and models":"Outils et modèles",
    "Try the tool":"Essayer l’outil",
    "Main themes":"Thèmes principaux",
    "About these notes":"À propos de ces notes",
    "Planned contents":"Contenu prévu",
    "Insurance fundamentals":"Fondements de l’assurance",
    "Pricing and ratemaking":"Tarification",
    "Reserving":"Provisionnement",
    "Actuarial judgment":"Jugement actuariel",
    "P&C Insurance":"Assurance de dommages",
    "Pricing":"Tarification",
    "Insurance Data":"Données d’assurance",
    "PDF version":"Version PDF",
    "Practice questions":"Questions d’entraînement",
    "Formula Boxes":"Fiches de formules",
    "Research project":"Projet de recherche",
    "Worked examples":"Exemples résolus",
    "Methodology":"Méthodologie",
    "Method":"Méthode",
    "Introduction":"Introduction",
    "Conclusion":"Conclusion",
    "Problem":"Problème",
    "Solution":"Solution",
    "Proof":"Démonstration",
    "Show solution":"Afficher la solution",
    "Hide solution":"Masquer la solution",
    "Show derivation":"Afficher la démonstration",
    "Theory":"Théorie",
    "How it works":"Comment ça fonctionne",
    "Show more":"Afficher plus",
    "Show less":"Afficher moins",
    "Selected positions":"Positions sélectionnées",
    "Professional activities":"Activités professionnelles",
    "Current":"Actuel",
    "Download":"Télécharger",
    "Back":"Retour",
    "Loading...":"Chargement…",
    "Recheck":"Revérifier",
    "Notebook":"Carnet de notes",
    "Open book":"Ouvrir le livre",
    "Search":"Rechercher",
    "Close":"Fermer",
    "Search this site":"Rechercher sur le site",
    "List of 100":"Liste de 100",
    "A recurring series in which I solve olympiad-style mathematical problems and share elegant solutions.":"Une série régulière où je résous des problèmes de type olympiades et présente des solutions élégantes.",
    "This page gathers my technical notes, study guides, and learning resources in mathematics, actuarial science, and quantitative finance. Some notes are concise references, while others are longer study documents that I update over time.":"Cette page réunit mes notes techniques, mes guides de révision et mes ressources d’apprentissage en mathématiques, en actuariat et en finance quantitative. Certaines notes sont des références concises, d’autres sont des documents plus détaillés que je mets régulièrement à jour.",
    "A working index of actuarial tools, mathematical notes, research experiments, and interactive models.":"Un répertoire de mes outils actuariels, notes mathématiques, travaux de recherche et modèles interactifs.",
    "The emphasis is on projects that make a model inspectable: calculations, assumptions, simulations, and written explanations live close to each other.":"Je privilégie les projets où l’on peut examiner les modèles : calculs, hypothèses, simulations et explications écrites sont présentés ensemble.",
    "Exam-style financial mathematics practice with structured problem data.":"Entraînement à l’examen FM avec une banque de problèmes structurée.",
    "A visual model for option pricing, node evolution, and risk-neutral valuation.":"Un modèle visuel de valorisation d’options, d’évolution des nœuds et d’évaluation neutre au risque.",
    "Simulation-first exploration of stochastic movement and path behavior.":"Exploration des processus aléatoires et de leurs trajectoires par simulation.",
    "Explore the interactive Exam FM Knowledge Atlas: a concept graph, 24 formula notes with full derivations, and searchable chapters covering interest theory, annuities, loans, bonds, duration, and immunization.":"Explore l’atlas interactif de l’examen FM : graphe de concepts, 24 fiches avec démonstrations et chapitres consultables sur les taux, les annuités, les prêts, les obligations, la duration et l’immunisation.",
    "Explore an interactive probability knowledge graph with connected chapters, searchable formula notes, detailed explanations, worked examples and a practice tool.":"Explore un graphe interactif de probabilités : chapitres reliés, fiches consultables, explications, exemples résolus et outil d’entraînement.",
    "A growing set of notes exploring property and casualty insurance and the work of P&C actuaries, including risk, pricing, reserving, insurance data, reinsurance, profitability metrics, and actuarial judgment.":"Une collection de notes sur l’assurance de dommages et le métier d’actuaire IARD : risques, tarification, provisions, données d’assurance, réassurance, rentabilité et jugement actuariel.",
    "Estimate unpaid claim liabilities with the chain-ladder method: edit a loss triangle, select development factors, and project ultimates and reserves.":"Estime les provisions de sinistres avec la méthode Chain Ladder : modifie un triangle, sélectionne les facteurs et projette les coûts ultimes et les provisions.",
    "Track public investment theses, review levels, catalysts, risks and decision discipline without exposing private account balances.":"Suis des thèses d’investissement publiques, des seuils de révision, des catalyseurs et des risques, sans exposer les soldes privés de ton compte.",
    "Choose what you want to calculate, provide the known inputs, and obtain the corresponding financial mathematics solution.":"Choisis le calcul à effectuer, indique les paramètres connus et obtiens la solution en mathématiques financières.",
    "Read the global trading day through market sessions, cross-asset prices, macro signals, earnings, news, and quantitative tools.":"Analyse les séances de marché, les prix de plusieurs classes d’actifs, les indicateurs macroéconomiques, les résultats, les nouvelles et les outils quantitatifs.",
    "Explore annuities, monthly contributions, compound growth, and long-term scenarios.":"Explore les annuités, les cotisations périodiques, la croissance composée et les scénarios à long terme.",
    "Evenson's mathematical portfolio":"Portfolio mathématique d’Evenson"
  };

  // Preserve originals so switching from FR back to EN restores the actual text.
  const originals = new Map();
  let language = "en";

  function readStored() {
    try {
      return localStorage.getItem(STORAGE) ||
        localStorage.getItem("soa-atlas-lang") ||
        localStorage.getItem("chain-ladder-lang") ||
        localStorage.getItem("portfolioLab.language");
    } catch (_) {return null;}
  }
  const param = new URLSearchParams(location.search).get("lang");
  language = param === "fr" || param === "en" ? param : (readStored() === "fr" ? "fr" : "en");

  function normalize(value) { return value.replace(/\s+/g," ").trim(); }
  function hasSkippedAncestor(node) {
    const parent = node.parentElement;
    return !parent || !!parent.closest(skipSelector);
  }
  function traverse() {
    const candidates = document.querySelectorAll(
      ".page__content,.archive,.page__inner-wrap > header,.author__content,.author__urls-wrapper,.page__footer"
    );
    const visited = new Set();
    candidates.forEach(area => {
      const walker = document.createTreeWalker(area,NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (visited.has(node)) continue;
        visited.add(node);
        if (hasSkippedAncestor(node)) continue;
        if (!originals.has(node)) {
          const raw = node.nodeValue;
          if (!raw || !normalize(raw) || raw.length > 1700) continue;
          if (!Object.prototype.hasOwnProperty.call(strings,normalize(raw))) continue;
          originals.set(node,raw);
        }
      }
    });
  }
  function translateText() {
    traverse();
    originals.forEach((original,node) => {
      if (!node.isConnected || hasSkippedAncestor(node))return;
      const en = normalize(original);
      const localized = language==="fr" ? strings[en] : en;
      if (!localized) return;
      // Keep leading/trailing whitespace to avoid collapsing inline content.
      const prefix=(original.match(/^\s*/)||[""])[0];
      const suffix=(original.match(/\s*$/)||[""])[0];
      const desired = language==="fr" ? prefix+localized+suffix : original;
      if (node.nodeValue!==desired)node.nodeValue=desired;
    });
  }
  function translateExplicit() {
    document.querySelectorAll("[data-site-fr]").forEach(el=>{
      if (!el.dataset.siteEn)el.dataset.siteEn=el.textContent;
      el.textContent=language==="fr"?el.dataset.siteFr:el.dataset.siteEn;
    });
    const toggle=document.getElementById("site-language-item");
    if (toggle)toggle.querySelectorAll("[data-site-lang-choice]").forEach(btn=>{
      btn.setAttribute("aria-pressed",String(btn.dataset.siteLangChoice===language));
    });
  }
  function apply() {
    document.documentElement.lang=language;
    document.documentElement.dataset.siteLang=language;
    translateExplicit();
    translateText();
  }
  function save(next) {
    language=next;
    try {
      localStorage.setItem(STORAGE,next);
      localStorage.setItem("soa-atlas-lang",next);
      localStorage.setItem("portfolioLab.language",next);
      localStorage.setItem("chain-ladder-lang",next);
    } catch (_) {}
  }
  function isHtmlInternalLink(link) {
    const raw=link.getAttribute("href")||"";
    if (!raw || raw.startsWith("#") || /^(mailto:|tel:|javascript:|data:)/i.test(raw))return false;
    const url=new URL(link.href,location.href);
    if(url.origin!==location.origin)return false;
    return !/\.(?:pdf|xlsx?|docx?|csv|json|png|jpe?g|gif|webp|zip|xml|svg|ics|txt)$/i.test(url.pathname);
  }
  document.addEventListener("click",event=>{
    const button=event.target instanceof Element ? event.target.closest("[data-site-lang-choice]") : null;
    if (button) {
      const next=button.dataset.siteLangChoice;
      if(next!=="fr"&&next!=="en")return;
      save(next);
      const url=new URL(location.href);
      url.searchParams.set("lang",next);
      // Reload preserves tool deep-links (?id=) and selected note hashes (#note=).
      location.assign(url.pathname+url.search+url.hash);
      return;
    }
    const native=event.target instanceof Element ? event.target.closest(localButtons) : null;
    if(native){
      const next=native.id?.endsWith("-fr")||native.dataset.lang==="fr"||native.dataset.clLang==="fr"?"fr":"en";
      save(next);
      apply(); // Native app stays responsible for translating its own content.
      return;
    }
    const link=event.target instanceof Element ? event.target.closest("a[href]") : null;
    if(link && isHtmlInternalLink(link)){
      const dest=new URL(link.href,location.href);
      if(dest.searchParams.get("lang")!==language){
        dest.searchParams.set("lang",language);
        // Change the existing anchor destination instead of intercepting navigation.
        // This also works for cmd/ctrl-click and opening a new tab.
        link.href=dest.pathname+dest.search+dest.hash;
      }
    }
  },true);

  document.addEventListener("DOMContentLoaded",apply,{once:true});
  if(document.readyState!=="loading")apply();
})();
