/* Shared, dependency-free FR/EN controller for the SOA knowledge atlases. */
(function(){
  "use strict";
  window.createSOAAtlasLocale=function(root,exam,onChange){
    const data=window.SOA_ATLAS_LANGUAGE?.fr||{ui:{},p:{},fm:{}};
    const ui=data.ui||{}, terms=data[exam]||{};
    const requested=new URLSearchParams(location.search).get("lang");
    let lang=requested==="fr"||requested==="en"?requested:(()=>{
      try{return localStorage.getItem("soa-atlas-lang")==="fr"?"fr":"en";}
      catch(_){return"en";}
    })();
    const t=(key,en)=>lang==="fr"&&ui[key]?ui[key]:en;
    const translation=note=>lang==="fr"&&note?terms[note.id]:null;
    const title=note=>translation(note)?.title||note.title;
    const short=note=>translation(note)?.short||note.short;
    const category=value=>{
      if(lang!=="fr")return value;
      const names={"Foundations":"Fondements","Random variables":"Variables aléatoires",
        "Discrete distributions":"Lois discrètes","Financial foundations":"Fondements financiers",
        "Cash flows":"Flux financiers","Credit mathematics":"Mathématiques du crédit",
        "Fixed income":"Revenu fixe","Yield and risk":"Rendement et risque"};
      return names[value]||value;
    };
    function apply(){
      root.lang=lang;
      for(const [id,language] of [["pa-lang-fr","fr"],["pa-lang-en","en"]]){
        const el=root.querySelector("#"+id);
        if(el)el.setAttribute("aria-pressed",String(lang===language));
      }
      root.querySelectorAll("[data-i18n]").forEach(el=>{
        if(!Object.hasOwn(el.dataset,"english"))el.dataset.english=el.textContent.trim();
        const value=t(el.dataset.i18n,el.dataset.english);
        if(el.classList.contains("p-atlas__eyebrow")){
          const dot=document.createElement("span");
          dot.className="p-atlas__dot";dot.setAttribute("aria-hidden","true");
          el.replaceChildren(dot,document.createTextNode(" "+value));
        }else el.textContent=value;
      });
      root.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
        if(!el.dataset.englishPlaceholder)el.dataset.englishPlaceholder=el.placeholder;
        el.placeholder=t(el.dataset.i18nPlaceholder,el.dataset.englishPlaceholder);
      });
      const hero=root.querySelector("[data-atlas-hero]");
      if(hero){
        const isP=hero.dataset.atlasHero==="P";
        const head=lang==="fr"?(isP?"Probabilités, ":"Mathématiques, "):(isP?"Probability, ":"Financial math, ");
        const accent=document.createElement("span");
        accent.textContent=lang==="fr"?"en réseau.":"mapped.";
        hero.replaceChildren(document.createTextNode(head),accent);
      }
    }
    function lesson(note,chapter,original,content,selectNote,typeset){
      const fr=terms[note.id];
      if(lang!=="fr"||!fr){content.replaceChildren(original);return;}
      const panel=document.createElement("section");panel.className="p-atlas__local-lesson";
      const heading=document.createElement("h3");heading.textContent=t("keyIdea","Key idea");
      const introduction=document.createElement("p");introduction.textContent=fr.intro;
      panel.append(heading,introduction);
      if(fr.formula){
        const label=document.createElement("h3");label.textContent=t("formulaLabel","Key formula");
        const formula=document.createElement("div");formula.className="p-atlas__local-formula";
        formula.textContent=fr.formula;panel.append(label,formula);
      }
      if(note.type==="chapter"){
        const label=document.createElement("h3");label.textContent=t("chapterBrowse","Chapter topics");
        const ul=document.createElement("ul");ul.className="p-atlas__local-list";
        for(const child of chapter.children){
          const li=document.createElement("li"),button=document.createElement("button");
          button.type="button";button.textContent=title(child);
          button.addEventListener("click",()=>selectNote(child.id,true));
          li.append(button);ul.append(li);
        }
        panel.append(label,ul);
      }
      const details=document.createElement("details");details.className="p-atlas__original-details";
      const label=document.createElement("summary");
      label.textContent=t("openOriginal","Read full original explanation (EN)");
      const inside=document.createElement("div");
      inside.className="p-atlas__original-inner";inside.append(original);
      details.append(label,inside);
      details.addEventListener("toggle",()=>{if(details.open)typeset();});
      content.replaceChildren(panel,details);
    }
    function set(next){
      if(next!=="en"&&next!=="fr")return;
      lang=next;
      try{localStorage.setItem("soa-atlas-lang",lang);}catch(_){}
      const url=new URL(location.href);
      url.searchParams.set("lang",lang);
      history.replaceState(null,"",url.pathname+url.search+url.hash);
      apply();
      onChange();
    }
    root.querySelector("#pa-lang-fr")?.addEventListener("click",()=>set("fr"));
    root.querySelector("#pa-lang-en")?.addEventListener("click",()=>set("en"));
    return {apply,t,title,short,category,lesson,get lang(){return lang;}};
  };
})();