/* Exam FM Atlas — five-chapter interactive notes and formula reader */
(function () {
  "use strict";
  const root = document.getElementById("fm-atlas");
  const template = document.getElementById("fm-atlas-source");
  if (!root || !template || !template.content) return;
  const get = id => document.getElementById(id);
  const graph = get("pa-map"), list = get("pa-outline"), search = get("pa-search");
  const reader = get("pa-reader"), content = get("pa-reading-content");
  const storageKey = "evenson-soa-fm-reviewed-v1";
  const definitions = [
    {id:"fm-tvm",title:"Time Value of Money",short:"Time value",category:"Financial foundations",tone:"blue",
      intro:"Understand accumulation and discounting, the relationship between interest and discount, and rates that vary over time."},
    {id:"fm-annuities",title:"Annuities and Non-Contingent Cash Flows",short:"Annuities",category:"Cash flows",tone:"purple",
      intro:"Value level, arithmetic and geometric cash flows. Compare immediate and due timing and derive accumulated values."},
    {id:"fm-loans",title:"Loans and Amortization",short:"Loans",category:"Credit mathematics",tone:"green",
      intro:"Separate interest from principal, build amortization schedules and determine outstanding balances."},
    {id:"fm-bonds",title:"Bonds and Securities",short:"Bonds",category:"Fixed income",tone:"amber",
      intro:"Value coupons and redemption, identify premium or discount, and follow book value as maturity approaches."},
    {id:"fm-alm",title:"Cash Flows and Asset-Liability Management",short:"ALM & duration",category:"Yield and risk",tone:"cyan",
      intro:"Connect spot rates and cash-flow matching with Macaulay duration and immunization strategies."}
  ];
  const abbreviations = {
    "fm-rates":"Interest / discount","fm-force-interest":"Force of interest",
    "fm-spot-rates":"Spot rate matching",
    "fm-annuity-immediate-pv":"Immediate PV","fm-annuity-due-pv":"Due PV",
    "fm-annuity-immediate-fv":"Immediate FV","fm-annuity-due-fv":"Due FV",
    "fm-pq-method":"P–Q method","fm-arithmetic-annuities":"Arithmetic series",
    "fm-geometric-annuities":"Geometric series","fm-geometric-increasing-pv":"Geometric annuity PV",
    "fm-immunization-zero-coupon":"Zero-coupon matching",
    "fm-macaulay-duration":"Macaulay duration",
    "fm-loan-amortization":"Amortization basics",
    "fm-amortization-schedule":"Amortization schedule","fm-principal-repaid":"Principal repaid",
    "fm-annuity-relations":"Annuity identities","fm-annuity-timing":"Annuity timing",
    "fm-increasing-annuity-table":"TI-30XS table",
    "fm-bond-price":"Bond pricing","fm-bond-par":"Premium or par",
    "fm-bond-premium-formula":"Premium formula",
    "fm-bond-book-value":"Book value","fm-makeham":"Makeham formula"
  };
  const chapters = definitions.map(def => {
    const section=document.createElement("section");
    section.className="fm-atlas__overview";
    section.id=def.id;
    const heading=document.createElement("h2");
    heading.textContent=def.title;
    section.append(heading);
    const intro=document.createElement("p");
    intro.textContent=def.intro;
    section.append(intro);
    const chapter={...def,source:section,type:"chapter",children:[]};
    chapter.children=Array.from(template.content.querySelectorAll("details.fm-card-toggle"))
      .filter(card=>card.dataset.fmChapter===def.id)
      .map(card=>{
        const h=card.querySelector(":scope > summary h3");
        const label=card.querySelector(":scope > summary .fm-proof-label");
        return {id:card.id,source:card,type:"article",chapterId:chapter.id,
          title:h?h.textContent.replace(/\s+/g," ").trim():card.id,
          short:abbreviations[card.id]||card.id,category:chapter.category,tone:chapter.tone,
          label:label?label.textContent.trim():"Formula note"};
      });
    const count=document.createElement("p");
    count.textContent="Explore "+chapter.children.length+" detailed formula notes and derivations below.";
    section.append(count);
    const ul=document.createElement("ul");
    ul.className="fm-atlas__overview-list";
    chapter.children.forEach((note,i)=>{
      const li=document.createElement("li"),a=document.createElement("a");
      a.href="#note="+encodeURIComponent(note.id);
      const name=document.createElement("span"),index=document.createElement("small");
      name.textContent=note.short;
      index.textContent=String(i+1).padStart(2,"0")+" / "+String(chapter.children.length).padStart(2,"0");
      a.append(name,index);li.append(a);ul.append(li);
    });
    section.append(ul);
    const callout=document.createElement("p");
    callout.className="fm-atlas__callout";
    callout.textContent="Exam tip: Start with the cash-flow timeline and the appropriate rate per payment period before substituting into a formula.";
    section.append(callout);
    return chapter;
  });
  if(!chapters.length) {
    get("pa-status").textContent="FM formula notes could not load. Use the classic guide instead.";
    return;
  }
  const notes=chapters.flatMap(ch=>[ch].concat(ch.children));
  const byId=new Map(notes.map(note=>[note.id,note]));
  const locale=window.createSOAAtlasLocale(root,"fm",()=>{renderReader();renderGraph();renderList();renderLegend();progress();if(typeof renderRelated==="function")renderRelated();});
  let reviewed=new Set();
  try {
    const saved=JSON.parse(localStorage.getItem(storageKey)||"[]");
    if(Array.isArray(saved)) reviewed=new Set(saved.filter(id=>byId.has(id)));
  } catch (_) {}
  let selectedId=chapters[0].id, focusId=null, loaderStarted=false;
  let mathQueue=Promise.resolve();
  let mode=window.matchMedia("(max-width:720px)").matches?"outline":"graph";
  const normalize=value=>String(value||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  const term=()=>normalize(search.value.trim());
  const chapterMatches=(ch,q)=>!q||normalize(ch.title+" "+ch.short+" "+ch.category+" "+(window.SOA_ATLAS_LANGUAGE.fr["fm"][ch.id]?.title||"")+" "+(window.SOA_ATLAS_LANGUAGE.fr["fm"][ch.id]?.intro||"")).includes(q);
  const noteMatches=(note,q)=>!q||normalize(note.title+" "+note.short+" "+note.source.textContent+" "+(window.SOA_ATLAS_LANGUAGE.fr["fm"][note.id]?.title||"")+" "+(window.SOA_ATLAS_LANGUAGE.fr["fm"][note.id]?.intro||"")).includes(q);
  const childrenFor=(ch,q)=>ch.children.filter(note=>chapterMatches(ch,q)||noteMatches(note,q));
  const chaptersFor=q=>chapters.filter(ch=>chapterMatches(ch,q)||childrenFor(ch,q).length);
  function element(tag,cls,label) {
    const e=document.createElement(tag);
    if(cls)e.className=cls;
    if(label!==undefined)e.textContent=label;
    return e;
  }
  function makeButton(label,cls,fn) {
    const e=element("button",cls,label);e.type="button";e.addEventListener("click",fn);return e;
  }
  function progress() {
    const count=chapters.reduce((sum,ch)=>sum+ch.children.length,0);
    get("pa-chapter-count").textContent=String(chapters.length).padStart(2,"0");
    get("pa-topic-count").textContent=String(count).padStart(2,"0");
    get("pa-reviewed-count").textContent=String([...reviewed].filter(id=>byId.get(id)?.type==="article").length).padStart(2,"0");
    const q=term(), visible=chaptersFor(q).reduce((sum,ch)=>sum+childrenFor(ch,q).length,0);
    get("pa-result-count").textContent=visible+" / "+count+" "+locale.t("topics","topics");
  }
  function renderList() {
    list.replaceChildren();
    const q=term(), visible=chaptersFor(q);
    if(!visible.length) {
      list.append(element("p","p-atlas__empty",locale.t("noResults","No matching note. Try another keyword.")));
      return;
    }
    visible.forEach(ch=>{
      const wrap=element("div","p-atlas__group");
      wrap.style.setProperty("--group-color","var(--pa-"+(ch.tone==="blue"?"accent":ch.tone)+")");
      const heading=element("div","p-atlas__group-label");
      heading.append(element("span","p-atlas__group-bullet"));
      const b=makeButton(locale.title(ch),"p-atlas__chapter-btn",()=>choose(ch.id,true));
      b.setAttribute("aria-current",String(selectedId===ch.id));
      heading.append(b,element("span","p-atlas__group-count",String(childrenFor(ch,q).length).padStart(2,"0")));
      wrap.append(heading);
      const items=element("div","p-atlas__items");
      childrenFor(ch,q).forEach(note=>{
        const item=makeButton(locale.title(note),"p-atlas__item-btn",()=>choose(note.id,true));
        item.setAttribute("aria-current",String(note.id===selectedId));
        if(reviewed.has(note.id))item.append(element("span","done","✓"));
        items.append(item);
      });
      wrap.append(items);list.append(wrap);
    });
  }
  const xmlns="http://www.w3.org/2000/svg";
  function s(tag,attributes,parent) {
    const el=document.createElementNS(xmlns,tag);
    Object.entries(attributes||{}).forEach(([k,v])=>el.setAttribute(k,String(v)));
    if(parent)parent.append(el);
    return el;
  }
  function label(parent,text,cx,cy,width) {
    const words=text.split(/\s+/),lines=[];let line="";
    words.forEach(word=>{
      if(line&&(line+" "+word).length>width){lines.push(line);line=word;}
      else line=(line+" "+word).trim();
    });
    if(line)lines.push(line);
    if(lines.length>2){lines[1]=lines.slice(1).join(" ").slice(0,width-1)+"…";lines.length=2;}
    const t=s("text",{"text-anchor":"middle",x:cx,y:cy-(lines.length-1)*9},parent);
    lines.forEach((sText,i)=>{
      const span=s("tspan",{x:cx,dy:i?20:0},t);
      span.textContent=sText;
    });
  }
  function link(x,y,xx,yy,active) {
    s("line",{x1:x,y1:y,x2:xx,y2:yy,"class":active?"map-link map-link--active":"map-link"},graph);
  }
  function graphNode(note,x,y,width,height,annotation) {
    const g=s("g",{"class":"map-node"+(selectedId===note.id?" is-active":""),
      "data-tone":note.tone,role:"button",tabindex:0,"aria-label":"Open "+locale.title(note)},graph);
    s("rect",{x:x-width/2,y:y-height/2,width,height,rx:15},g);
    s("circle",{cx:x-width/2+17,cy:y-height/2+16,r:4,"class":"map-node-dot"},g);
    label(g,locale.short(note),x,y-3,25);
    s("text",{x,y:y+height/2-12,"class":"map-node-meta","text-anchor":"middle"},g).textContent=annotation;
    s("title",{},g).textContent=locale.title(note);
    const click=()=>choose(note.id,true);
    g.addEventListener("click",click);
    g.addEventListener("keydown",e=>{
      if(e.key==="Enter"||e.key===" "){e.preventDefault();click();}
    });
  }
  function center(x,y,heading,sub,note) {
    const g=s("g",{},graph);
    if(note) {
      g.setAttribute("role","button");g.setAttribute("tabindex","0");
      g.setAttribute("aria-label","Open "+locale.title(note));
      g.style.cursor="pointer";
      g.addEventListener("click",()=>choose(note.id,true));
      g.addEventListener("keydown",e=>{
        if(e.key==="Enter"||e.key===" "){e.preventDefault();choose(note.id,true);}
      });
    }
    s("circle",{cx:x,cy:y,r:66,"class":"map-center"},g);
    s("text",{x,y:y-2,"class":"map-center-text","text-anchor":"middle"},g).textContent=heading;
    s("text",{x,y:y+23,"class":"map-center-sub","text-anchor":"middle"},g).textContent=sub;
  }
  function renderGraph() {
    graph.replaceChildren();
    const q=term(), visible=chaptersFor(q);
    const focused=focusId&&byId.has(focusId)?byId.get(focusId):null;
    const leaves=focused?childrenFor(focused,q):visible;
    const height=Math.max(520,leaves.length*92+50);
    graph.setAttribute("viewBox","0 0 440 "+height);
    graph.style.aspectRatio="440 / "+height;
    graph.setAttribute("aria-label","Interactive FM concept graph. Tab to a topic and press Enter to open.");
    const cx=84, cy=height/2, nx=306;
    get("pa-back-to-map").hidden=!focused;
    get("pa-map-subtitle").textContent=focused?locale.title(focused):locale.t("chooseChapter","Choose one of five FM chapters.");
    leaves.forEach((item,i)=>{
      const y=(i+1)*height/(leaves.length+1);
      link(cx,cy,nx,y,selectedId===item.id);
    });
    center(cx,cy,focused?(locale.lang==="fr"?"NOTIONS":"TOPICS"):"Exam FM",focused?String(leaves.length)+(locale.lang==="fr"?" liens":" linked"):"5 modules",focused);
    leaves.forEach((item,i)=>{
      const y=(i+1)*height/(leaves.length+1);
      const caption=focused?(locale.lang==="fr"?"FICHE ":"NOTE ")+String(focused.children.indexOf(item)+1).padStart(2,"0"):
        childrenFor(item,q).length+" "+(locale.lang==="fr"?"FICHES":"NOTES");
      graphNode(item,nx,y,232,76,caption);
    });
    if(!leaves.length)label(graph,locale.t("noMatchGraph","No matching topics"),300,cy,25);
  }
  function renderLegend() {
    const target=get("pa-legend");
    target.replaceChildren();
    chapters.forEach(ch=>{
      const b=makeButton(locale.short(ch),"",()=>choose(ch.id,true));
      b.style.setProperty("--legend-color","var(--pa-"+(ch.tone==="blue"?"accent":ch.tone)+")");
      b.setAttribute("aria-current",String(selectedId===ch.id||focusId===ch.id));
      target.append(b);
    });
  }
  function math() {
    if(window.MathJax&&typeof window.MathJax.typesetPromise==="function") {
      mathQueue=mathQueue.then(async()=>{
        await (window.MathJax.startup?.promise||Promise.resolve());
        if(content.isConnected)await window.MathJax.typesetPromise([content,get("pa-reader-title")]);
      }).catch(e=>console.warn("Exam FM math typesetting:",e));
      return;
    }
    if(loaderStarted)return;
    loaderStarted=true;
    const external=document.querySelector('script[src*="mathjax"],script[src*="MathJax"]');
    if(external) {external.addEventListener("load",math,{once:true});return;}
    window.MathJax=window.MathJax||{
      tex:{inlineMath:[["\\(","\\)"]],displayMath:[["\\[","\\]"]]},
      options:{skipHtmlTags:["script","noscript","style","textarea","pre","code"]}
    };
    const script=document.createElement("script");
    script.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async=true;
    script.addEventListener("load",math,{once:true});
    script.addEventListener("error",()=>{
      get("pa-status").textContent="The math renderer could not load. The classic Formula Boxes page is also available.";
    });
    document.head.append(script);
  }

  // Match tagged JSON exercises to each concept without changing the problem bank.
  // The exercise id deep-link is supported by the FM practice tool.
  const relatedTopics = {
    "fm-rates":["effective rates","effective interest rate","effective discount","nominal interest rate","nominal discount rate","discount factor"],
    "fm-force-interest":["force of interest"],
    "fm-spot-rates":["Spot Rates","Forward Rates","Yield Curves"],
    "fm-annuity-immediate-pv":["annuities-immediate and present value"],
    "fm-annuity-due-pv":["annuities-due and present value"],
    "fm-annuity-immediate-fv":["annuities-immediate and accumulated value"],
    "fm-annuity-due-fv":["annuities-due and accumulated value"],
    "fm-pq-method":["Increasing Annuities: Arithmetic"],
    "fm-arithmetic-annuities":["Increasing Annuities: Arithmetic","Decreasing Annuities: Arithmetic"],
    "fm-geometric-annuities":["Geometric Varying Annuities"],
    "fm-geometric-increasing-pv":["Geometric Varying Annuities"],
    "fm-immunization-zero-coupon":["Full Immunization and Dedication","Redington Immunization"],
    "fm-macaulay-duration":["Macaulay Duration"],
    "fm-loan-amortization":["Amortization Schedules"],
    "fm-amortization-schedule":["Amortization Schedules"],
    "fm-principal-repaid":["Amortization Schedules"],
    "fm-annuity-relations":["Annuity Tricks","annuities-immediate vs annuities-due"],
    "fm-annuity-timing":["annuities-immediate vs annuities-due"],
    "fm-increasing-annuity-table":["Increasing Annuities: Arithmetic"],
    "fm-bond-price":["Price of a Bond"],
    "fm-bond-par":["Premium and Discount"],
    "fm-bond-premium-formula":["Premium and Discount"],
    "fm-bond-book-value":["Bond Amortization"],
    "fm-makeham":["Price of a Bond"]
  };
  let fmProblems=null;
  function renderRelated() {
    const target=get("fm-related-content");
    if(!target)return;
    target.replaceChildren();
    if(!fmProblems){
      target.append(element("p","fm-atlas__related-intro",locale.t("loadingProblems","Loading the FM practice bank...")));
      return;
    }
    const note=byId.get(selectedId);
    const ids=note.type==="chapter"?note.children.map(x=>x.id):[note.id];
    const rules=[...new Set(ids.flatMap(id=>relatedTopics[id]||[]).map(normalize))];
    const candidates=fmProblems.filter(problem=>{
      const topic=normalize(problem.topic);
      return rules.some(rule=>topic.includes(rule));
    });
    if(!candidates.length){
      target.append(element("p","fm-atlas__related-intro",locale.t("noRelated","No exercise is currently tagged for this concept. You can still explore all FM questions through the practice tool.")));
      return;
    }
    const shown=candidates.slice(0,note.type==="chapter"?8:6);
    target.append(element("p","fm-atlas__related-intro",
      String(candidates.length)+" "+locale.t("practiceCount","tagged exercises in your bank · Select an ID to open that question directly.")));
    const ul=element("ul","fm-atlas__related-list");
    shown.forEach(problem=>{
      const li=document.createElement("li"), a=document.createElement("a");
      a.href=root.dataset.practiceBaseUrl+"?id="+encodeURIComponent(String(problem.id));
      const number=element("strong","",String(problem.id).padStart(3,"0")+" / "+locale.t("practiceTag","PRACTICE"));
      const topic=element("small","",String(problem.topic||"Financial mathematics"));
      a.append(number,topic);li.append(a);ul.append(li);
    });
    target.append(ul);
  }
  async function loadPracticeIndex() {
    const target=get("fm-related-content");
    try {
      const response=await fetch(root.dataset.practiceUrl);
      if(!response.ok)throw new Error("FM exercises returned HTTP "+response.status);
      const data=await response.json();
      if(!Array.isArray(data))throw new Error("Unexpected FM practice format");
      fmProblems=data.filter(item=>Number.isInteger(Number(item.id))&&typeof item.topic==="string");
      renderRelated();
    } catch(error) {
      console.warn("Unable to load related FM exercises:",error);
      if(target)target.textContent="Related exercise links are temporarily unavailable. Use All exercises above.";
    }
  }

  function renderReader() {
    const note=byId.get(selectedId);
    const ch=note.type==="chapter"?note:byId.get(note.chapterId);
    get("pa-crumb").textContent=locale.category(ch.category)+" / "+(note.type==="chapter"?locale.t("chapter","Chapter"):locale.t("formulaNote","Formula note"));
    get("pa-reader-label").textContent=note.type==="chapter"?locale.t("chapterOverview","CHAPTER OVERVIEW"):locale.t("researchNote","FORMULA NOTE");
    const heading=get("pa-reader-title");
    if(window.MathJax&&typeof window.MathJax.typesetClear==="function") {
      try{window.MathJax.typesetClear([content,heading]);}catch(_){}
    }
    heading.textContent=locale.title(note);
    get("pa-reading-hint").textContent=locale.lang==="fr"?(note.type==="chapter"?locale.t("chapterHint","Chapter overview."):locale.t("noteHint","Original explanation below.")):(note.type==="chapter"?"Browse this chapter or select a node to open an individual proof.":"From "+ch.title+" · Formula, explanation and original derivations.");
    if(note.type==="chapter"){
      content.replaceChildren(note.source.cloneNode(true));
    } else {
      const card=note.source.querySelector(":scope > .fm-card-content");
      content.replaceChildren(card?card.cloneNode(true):note.source.cloneNode(true));
    }
    if(locale.lang==="fr")locale.lesson(note,ch,content.firstElementChild,content,choose,math);
    const mark=get("pa-reviewed");
    mark.textContent=reviewed.has(note.id)?locale.t("isReviewed","✓ Reviewed"):locale.t("markReviewed","Mark reviewed");
    mark.classList.toggle("is-reviewed",reviewed.has(note.id));
    mark.setAttribute("aria-pressed",String(reviewed.has(note.id)));
    const index=notes.findIndex(n=>n.id===note.id),prev=notes[index-1],next=notes[index+1];
    get("pa-prev").disabled=!prev;get("pa-next").disabled=!next;
    get("pa-prev-label").textContent=prev?locale.short(prev):locale.t("start","Beginning");
    get("pa-next-label").textContent=next?locale.short(next):locale.t("end","End of notes");
    math();
    renderRelated();
  }
  function choose(id,drill) {
    if(!byId.has(id))return;
    selectedId=id;
    const note=byId.get(id);
    if(drill)focusId=note.type==="chapter"?note.id:note.chapterId;
    renderReader();renderGraph();renderList();renderLegend();progress();
    const hash="#note="+encodeURIComponent(id);
    if(location.hash!==hash)history.replaceState(null,"",location.pathname+location.search+hash);
    if(drill&&window.innerWidth<=720)reader.scrollIntoView({
      behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",
      block:"start"
    });
  }
  function adjacent(direction) {
    const index=notes.findIndex(n=>n.id===selectedId);
    const next=notes[index+direction];
    if(next)choose(next.id,true);
  }
  function setMode(next) {
    mode=next;
    get("pa-graph-panel").hidden=next!=="graph";
    get("pa-outline-panel").hidden=next!=="outline";
    get("pa-graph-tab").setAttribute("aria-pressed",String(next==="graph"));
    get("pa-outline-tab").setAttribute("aria-pressed",String(next==="outline"));
    get("pa-explorer-title").textContent=next==="graph"?locale.t("graphTitle","Knowledge graph"):locale.t("outlineTitle","Chapter explorer");
    if(next==="graph")renderGraph();else renderList();
  }
  get("pa-graph-tab").addEventListener("click",()=>setMode("graph"));
  get("pa-outline-tab").addEventListener("click",()=>setMode("outline"));
  get("pa-back-to-map").addEventListener("click",()=>{focusId=null;renderGraph();renderLegend();});
  get("pa-prev").addEventListener("click",()=>adjacent(-1));
  get("pa-next").addEventListener("click",()=>adjacent(1));
  get("pa-reviewed").addEventListener("click",()=>{
    if(reviewed.has(selectedId))reviewed.delete(selectedId);else reviewed.add(selectedId);
    try{localStorage.setItem(storageKey,JSON.stringify([...reviewed]));}catch(_){}
    progress();renderReader();renderList();
  });
  search.addEventListener("input",()=>{
    const q=term();
    if(focusId&&!chaptersFor(q).some(ch=>ch.id===focusId))focusId=null;
    renderList();renderGraph();progress();
    get("pa-status").textContent=chaptersFor(q).length
      ?locale.t("tip","Tip: press / to search. Review marks are stored only in this browser.")
      :locale.t("noResults","No matching topics. Clear search to restore the map.");
  });
  document.addEventListener("keydown",event=>{
    const target=event.target;
    const editing=target instanceof HTMLElement&&(target.matches("input,textarea,select")||target.isContentEditable);
    if(event.key==="/"&&!editing&&!event.ctrlKey&&!event.metaKey&&!event.altKey) {
      event.preventDefault();search.focus();
    } else if(event.key==="Escape"&&document.activeElement===search) {
      search.value="";search.dispatchEvent(new Event("input"));search.blur();
    }
  });
  window.addEventListener("hashchange",()=>{
    if(!location.hash.startsWith("#note="))return;
    let id="";
    try{id=decodeURIComponent(location.hash.slice(6));}catch(_){return;}
    if(byId.has(id)&&id!==selectedId)choose(id,true);
  });
  locale.apply();
  setMode(mode);
  progress();renderLegend();
  let initial="";
  if(location.hash.startsWith("#note=")) {
    try{initial=decodeURIComponent(location.hash.slice(6));}catch(_){}
  }
  if(byId.has(initial))choose(initial,true);
  else {renderReader();renderGraph();renderList();}
  get("pa-status").textContent=locale.t("tip","Tip: press / to search. Review marks are stored only in this browser.");
  loadPracticeIndex();
})();
