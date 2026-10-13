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
    "Hikes":"Randonnées",
    "Awaiting":"À découvrir",
    "Visited place":"Lieu visité",
    "Awaiting place":"Lieu à découvrir",
    "Completed hike":"Randonnée effectuée",
    "Some places remain in memory longer than they remain in time. This page is where I keep the traces of journeys, landscapes, monuments, cities, and hikes that felt large enough to deserve remembrance.":"Certains lieux restent plus longtemps dans la mémoire que dans le temps. Je conserve ici les traces des voyages, des paysages, des monuments, des villes et des randonnées qui méritent de ne pas être oubliés.",
    "A map of what I have visited, what I am still pursuing, and what still waits for me somewhere in the world.":"Une carte des lieux que j’ai visités, de ceux que je veux encore découvrir et de ce qui m’attend quelque part dans le monde.",
    "From Theory to Practice":"De la théorie à la pratique",
    "Series":"Séries",
    "Open exercises":"Ouvrir les exercices",
    "Published":"Publié",
    "Reference":"Référence",
    "Resources":"Ressources",
    "Study":"Étude",
    "Sections":"Sections",
    "Chapter":"Chapitre",
    "Topics":"Notions",
    "Part":"Partie",
    "Gödel’s Incompleteness Theorems":"Les théorèmes d’incomplétude de Gödel",
    "The Monty Hall Problem and Christopher Boone":"Le problème de Monty Hall et Christopher Boone",
    "Richard Hamming, You and Your Research":"Richard Hamming : vous et votre recherche",
    "Gradient Descent Writes Code Better Than Us":"La descente de gradient écrit du code mieux que nous",
    "Mathematical Workshop #1":"Atelier mathématique nº 1",
    "Mathematical Workshop #2":"Atelier mathématique nº 2",
    "Mathematical Workshop #3":"Atelier mathématique nº 3",
    "Mathematical Workshop #4":"Atelier mathématique nº 4",
    "Mathematical Workshop #5":"Atelier mathématique nº 5",
    "Mathematical Workshop #6":"Atelier mathématique nº 6",
    "Mathematical Workshop #7":"Atelier mathématique nº 7",
    "An article in English":"Un article en anglais",
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
    "Evenson's mathematical portfolio":"Portfolio mathématique d’Evenson",
    "A curated collection of mathematical and actuarial tools for exploration, practice, and computation.":"Une collection d’outils mathématiques et actuariels pour explorer, s’exercer et calculer.",
    "This space brings together interactive pages in number theory, actuarial science, and quantitative finance.":"Cet espace rassemble des pages interactives en théorie des nombres, en actuariat et en finance quantitative.",
    "Explore primality, test integers, and interact with one of the most classical objects in number theory.":"Teste la primalité des entiers et explore l’un des objets classiques de la théorie des nombres.",
    "Experiment with even integers and their decomposition into sums of two prime numbers.":"Expérimente la décomposition des entiers pairs en sommes de deux nombres premiers.",
    "Explore randomized olympiad-style problems together with complete written solutions.":"Découvre des problèmes de type olympiades, tirés au hasard, accompagnés de solutions détaillées.",
    "Interact with the famous probability puzzle, reveal doors visually, and compare the outcomes of staying versus switching.":"Explore la célèbre énigme des trois portes et compare visuellement les résultats selon que tu conserves ou changes ton choix.",
    "Choose a starting point, generate a two-dimensional random walk, and visualize how randomness creates a path over time.":"Choisis un point de départ, simule une marche aléatoire en deux dimensions et visualise sa trajectoire.",
    "Train with randomized financial mathematics problems inspired by SOA Exam FM, complete with multiple-choice answers.":"Prépare l’examen FM avec des problèmes de mathématiques financières aléatoires et des choix de réponses.",
    "Practice probability with multiple-choice questions, worked solutions, and independent progress tracking.":"Révise les probabilités avec des questions à choix multiples, des solutions et un suivi de progression.",
    "Search an index, ETF, or equity and examine its performance, volatility, drawdown, moving averages, momentum, and benchmark correlation.":"Recherche un indice, un FNB ou une action pour étudier son rendement, sa volatilité, ses replis, ses moyennes mobiles, son momentum et sa corrélation.",
    "Inspect option chains, expirations, liquidity, implied volatility, Greeks, strategies, and payoff scenarios.":"Examine les chaînes d’options, les échéances, la liquidité, la volatilité implicite, les grecques, les stratégies et les profils de gain.",
    "Analyze coupon income, yield to maturity, yield to call, duration, convexity, and interest-rate scenarios.":"Analyse les coupons, les rendements à l’échéance et au rachat, la duration, la convexité et les scénarios de taux.",
    "Explore annuities, monthly contributions, compound returns, financial targets, and month-by-month account growth.":"Explore les annuités, les versements mensuels, les rendements composés, les objectifs financiers et l’évolution mensuelle d’un compte.",
    "Build an animated binomial tree, compare European and American options, and price calls or puts by backward induction.":"Construis un arbre binomial animé, compare les options européennes et américaines et calcule le prix des options par récurrence inverse.",
    "Value any stock in your watchlists with a discounted cash flow model: automatic fundamentals, editable assumptions, scenarios, and sensitivity tables.":"Estime la valeur d’une action par actualisation des flux : données financières, hypothèses modifiables, scénarios et analyses de sensibilité.",
    "Quantitative finance work centered on mean reversion and statistical relationships.":"Travaux de finance quantitative sur le retour à la moyenne et les relations statistiques.",
    "Problem-solving notes written as rigorous walkthroughs rather than short answers.":"Notes de résolution présentant des raisonnements rigoureux plutôt que des réponses succinctes.",
    "Mathematical Workshops":"Ateliers mathématiques",
    "Pairs Trading Research":"Recherche sur le pairs trading",
    "Progress":"Progression",
    "“It is not that we have a short time to live, but that we waste a lot of it.”":"« Ce n’est pas que nous disposions de peu de temps, mais que nous en gaspillons beaucoup. »",
    "— Seneca":"— Sénèque",
    "After my mother’s death, I understood more deeply how short, fragile, and brutal life can be. This list is my way of refusing to drift through it, and of pursuing, deliberately, the things that feel rare, beautiful, and truly worth living for.":"Après le décès de ma mère, j’ai compris plus profondément combien la vie peut être courte, fragile et brutale. Cette liste est ma façon de refuser de me laisser porter sans direction et de poursuivre délibérément ce qui me semble rare, beau et véritablement digne d’être vécu.",
    "Graduate with a Bachelor’s degree in Actuarial Science":"Obtenir un baccalauréat en sciences actuarielles",
    "Start working as an actuarial analyst (P&C / IARD)":"Commencer à travailler comme analyste en actuariat IARD",
    "Build my personal blog":"Créer mon blog personnel",
    "Run a marathon":"Courir un marathon",
    "Launch a magazine":"Lancer un magazine",
    "Give public talks on mathematics and actuarial science":"Donner des conférences publiques sur les mathématiques et l’actuariat",
    "Visit every province and territory in Canada":"Visiter toutes les provinces et tous les territoires du Canada",
    "Become a boxing coach":"Devenir entraîneur de boxe",
    "Work in a bookstore or a library":"Travailler dans une librairie ou une bibliothèque",
    "Visit 100 countries":"Visiter 100 pays",
    "Visit New York City":"Visiter New York",
    "Design and publish a game":"Concevoir et publier un jeu",
    "See Nahanni and Virginia Falls":"Découvrir Nahanni et les chutes Virginia",
    "See the Northern Lights in the Yukon":"Observer les aurores boréales au Yukon",
    "Support education in the world":"Soutenir l’éducation dans le monde",
    "Start a scholarship to support brave young kids":"Créer une bourse pour soutenir des jeunes courageux",
    "Interview some of the greatest mathematicians of our time":"Interviewer des mathématiciens parmi les plus remarquables de notre époque",
    "See the Grand Canyon at sunrise":"Admirer le Grand Canyon au lever du soleil",
    "See Petra with my own eyes":"Voir Pétra de mes propres yeux",
    "Write a paper in actuarial science":"Rédiger un article scientifique en actuariat",
    "Read 1000 books":"Lire 1 000 livres",
    "Go on unforgettable hikes in Canada":"Faire des randonnées inoubliables au Canada",
    "See the Northern Lights in Canada":"Observer les aurores boréales au Canada",
    "Become ACAS":"Obtenir le titre ACAS",
    "Reach Machu Picchu":"Atteindre le Machu Picchu",
    "See the Galápagos Islands":"Découvrir les îles Galápagos",
    "Become FCAS":"Obtenir le titre FCAS",
    "Go on a trip overseas with my whole family":"Voyager à l’étranger avec toute ma famille",
    "Be a writer":"Devenir écrivain",
    "Trek through Torres del Paine":"Faire une randonnée à Torres del Paine",
    "Complete a Master’s degree":"Terminer une maîtrise",
    "Work internationally":"Travailler à l’international",
    "Pursue a career in politics":"Faire carrière en politique",
    "Complete a PhD":"Terminer un doctorat",
    "Risk":"Risque",
    "Risk Management":"Gestion des risques",
    "Portfolio Management":"Gestion de portefeuille",
    "Personal finance":"Finances personnelles",
    "Signal":"Signal",
    "Ongoing":"En cours",
    "Work in progress":"En cours",
    "Planned contents":"Contenu prévu",
    "About these notes":"À propos de ces notes"
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
          const text=normalize(raw);
          const listText=text.match(/^([✓✗])\s*(.+)$/);
          if (!Object.prototype.hasOwnProperty.call(strings,text) &&
              !(listText && Object.prototype.hasOwnProperty.call(strings,listText[2]))) continue;
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
      let localized = strings[en];
      // Checklist markers in List 100 are part of the same text node.
      if (!localized) {
        const marked = en.match(/^([✓✗])\s*(.+)$/);
        if (marked && strings[marked[2]]) localized = marked[1] + " " + strings[marked[2]];
      }
      if (language!=="fr") localized=en;
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
    showOriginalLanguageNotice();
  }
  function showOriginalLanguageNotice() {
    const path = location.pathname;
    const articlePage = /^\/(?:posts\/|workshop\/\d+\/?$|texts\/hamming-)/.test(path);
    const target = document.querySelector(".page__content");
    if (!articlePage || !target) return;
    let notice = target.querySelector(".site-translation-notice");
    if (language==="fr" && !target.querySelector('[data-site-content-lang="fr"]')) {
      if (!notice) {
        notice=document.createElement("p");
        notice.className="site-translation-notice";
        target.insertBefore(notice,target.firstChild);
      }
      notice.textContent="Cette page propose la navigation en français, mais le texte intégral de cet article est encore disponible uniquement en anglais.";
    } else if (notice)notice.remove();
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
