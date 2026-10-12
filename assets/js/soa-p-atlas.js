/* Exam P Atlas — accessible, dependency-free concept graph and notes reader */
(function () {
  "use strict";
  const root = document.getElementById("p-atlas");
  const template = document.getElementById("p-atlas-source");
  if (!root || !template || !template.content) return;
  const get = id => document.getElementById(id);
  const graph = get("pa-map"), list = get("pa-outline"), search = get("pa-search");
  const reader = get("pa-reader"), content = get("pa-reading-content");
  const storageKey = "evenson-soa-p-reviewed-v1";
  const meta = {
    "probability-bounds": ["Probability bounds","Foundations","blue"],
    "variance-standard-deviation-moments": ["Moments & variance","Random variables","purple"],
    "binomial-multinomial-hypergeometric": ["Counting models","Discrete distributions","green"],
    "geometric-starting-at-zero-and-one": ["Geometric","Discrete distributions","amber"]
  };
  const abbreviations = {
    "minimum-union":"Min. union","maximum-union":"Max. union",
    "minimum-intersection":"Min. intersection","maximum-intersection":"Max. intersection",
    "variance-second-moment":"Variance identity","variance-affine-transformation":"Affine transforms",
    "standard-deviation":"Std. deviation","coefficient-of-variation":"Coeff. of variation",
    "moment-terminology":"Types of moments","binomial-distribution":"Binomial",
    "multinomial-distribution":"Multinomial","hypergeometric-distribution":"Hypergeometric",
    "counting-distributions-comparison":"Which distribution?",
    "geometric-counting-conventions":"Start at 0 vs 1",
    "geometric-tail-probabilities":"Tail probabilities",
    "geometric-worked-examples":"Worked examples"
  };
  const chapters = Array.from(template.content.querySelectorAll("section[id]"), section => {
    const definition = meta[section.id] || [section.id,"Probability","blue"];
    const heading = section.querySelector("h2");
    const chapter = {
      id:section.id, source:section, type:"chapter",
      title:heading ? heading.textContent.replace(/\s+/g," ").trim() : section.id,
      short:definition[0], category:definition[1], tone:definition[2], children:[]
    };
    chapter.children = Array.from(section.querySelectorAll(":scope > article.p-formula-box[id]"), article => {
      const h=article.querySelector("h3");
      return {
        id:article.id, source:article, type:"article", chapterId:chapter.id,
        title:h ? h.textContent.replace(/\s+/g," ").trim() : article.id,
        short:abbreviations[article.id] || article.id,
        category:chapter.category,tone:chapter.tone
      };
    });
    return chapter;
  });
  if(!chapters.length) {
    get("pa-status").textContent="The notes could not be initialized. Please refresh the page."
    return;
  }
  const notes=chapters.flatMap(ch=>[ch].concat(ch.children));
  const byId=new Map(notes.map(note=>[note.id,note]));
  const locale=window.createSOAAtlasLocale(root,"p",()=>{renderReader();renderGraph();renderList();renderLegend();progress();if(typeof renderRelated==="function")renderRelated();});
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
  const chapterMatches=(ch,q)=>!q||normalize(ch.title+" "+ch.short+" "+ch.category+" "+(window.SOA_ATLAS_LANGUAGE.fr["p"][ch.id]?.title||"")+" "+(window.SOA_ATLAS_LANGUAGE.fr["p"][ch.id]?.intro||"")).includes(q);
  const noteMatches=(note,q)=>!q||normalize(note.title+" "+note.short+" "+note.source.textContent+" "+(window.SOA_ATLAS_LANGUAGE.fr["p"][note.id]?.title||"")+" "+(window.SOA_ATLAS_LANGUAGE.fr["p"][note.id]?.intro||"")).includes(q);
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
    // A vertically organized graph keeps node labels readable in a narrow sidebar.
    graph.setAttribute("viewBox","0 0 440 520");
    graph.setAttribute("aria-label","Interactive concept graph. Tab to a topic and press Enter to open.");
    const q=term(), visible=chaptersFor(q);
    const cx=84, cy=260, nx=306;
    get("pa-back-to-map").hidden=!focusId;
    if(!focusId||!byId.has(focusId)) {
      get("pa-map-subtitle").textContent=locale.t("chooseChapter","Select a chapter to explore its concepts.");
      visible.forEach((ch,i)=>{
        const y=(i+1)*520/(visible.length+1);
        link(cx,cy,nx,y,selectedId===ch.id);
      });
      center(cx,cy,"Exam P",chapters.length+" modules");
      visible.forEach((ch,i)=>{
        const y=(i+1)*520/(visible.length+1);
        graphNode(ch,nx,y,232,76,childrenFor(ch,q).length+" "+(locale.lang==="fr"?"FICHES":"NOTES"));
      });
      if(!visible.length)label(graph,"No matching topics",305,260,25);
    } else {
      const ch=byId.get(focusId), children=childrenFor(ch,q);
      get("pa-map-subtitle").textContent=locale.title(ch);
      children.forEach((note,i)=>{
        const y=(i+1)*520/(children.length+1);
        link(cx,cy,nx,y,selectedId===note.id);
      });
      center(cx,cy,"TOPICS",String(children.length).padStart(2,"0")+" linked",ch);
      children.forEach((note,i)=>{
        const y=(i+1)*520/(children.length+1);
        graphNode(note,nx,y,232,76,"NOTE "+String(ch.children.indexOf(note)+1).padStart(2,"0"));
      });
      if(!children.length)label(graph,"No matches",305,260,25);
    }
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
        if(content.isConnected)await window.MathJax.typesetPromise([content]);
      }).catch(e=>console.warn("Exam P math typesetting:",e));
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
      get("pa-status").textContent="The mathematical notation could not be displayed. Please refresh to retry."
    });
    document.head.append(script);
  }
  function renderReader() {
    const note=byId.get(selectedId);
    const ch=note.type==="chapter"?note:byId.get(note.chapterId);
    get("pa-crumb").textContent=locale.category(ch.category)+" / "+(note.type==="chapter"?locale.t("chapter","Chapter"):locale.t("formulaNote","Formula note"));
    get("pa-reader-label").textContent=note.type==="chapter"?locale.t("chapterOverview","CHAPTER OVERVIEW"):locale.t("researchNote","RESEARCH NOTE");
    get("pa-reader-title").textContent=locale.title(note);
    get("pa-reading-hint").textContent=locale.lang==="fr"?(note.type==="chapter"?locale.t("chapterHint","Chapter overview."):locale.t("noteHint","Original explanation below.")):(note.type==="chapter"?"Complete chapter · Select a smaller node for focused reading.":"From "+ch.title+" · Formulas, derivations and worked examples.");
    if(window.MathJax&&typeof window.MathJax.typesetClear==="function") {
      try{window.MathJax.typesetClear([content]);}catch(_){}
    }
    const copy=note.source.cloneNode(true);
    const heading=copy.querySelector(note.type==="chapter"?":scope > h2":":scope > h3");
    if(heading)heading.remove();
    locale.lesson(note,ch,copy,content,choose,math);
    const mark=get("pa-reviewed");
    mark.textContent=reviewed.has(note.id)?locale.t("isReviewed","✓ Reviewed"):locale.t("markReviewed","Mark reviewed");
    mark.classList.toggle("is-reviewed",reviewed.has(note.id));
    mark.setAttribute("aria-pressed",String(reviewed.has(note.id)));
    const index=notes.findIndex(n=>n.id===note.id),prev=notes[index-1],next=notes[index+1];
    get("pa-prev").disabled=!prev;get("pa-next").disabled=!next;
    get("pa-prev-label").textContent=prev?locale.short(prev):locale.t("start","Beginning");
    get("pa-next-label").textContent=next?locale.short(next):locale.t("end","End of notes");
    math();
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
      ?"Tip: press / to search. Review marks are stored only in this browser."
      :"No matching topics. Clear search to restore the map.";
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
})();
