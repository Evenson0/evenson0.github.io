import {init,preview,runYear,validateScenario} from './engine.js';
import {storage} from './storage.js';
import {dictionaries} from './i18n.js';
(function browserApp({init,preview,runYear,validateScenario,storage,dictionaries}) {
 const root=document.querySelector('#app');
 let state=storage.load(), language=state?.language||storage.language(), page='overview', scenario, config, saveOK=true, error='';
 const t=(k)=>dictionaries[language][k]||k;
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const num=(v,d=0)=>v==null?'—':new Intl.NumberFormat(language==='fr'?'fr-CA':'en-CA',{maximumFractionDigits:d,minimumFractionDigits:d}).format(v);
 const money=v=>v==null?'—':new Intl.NumberFormat(language==='fr'?'fr-CA':'en-CA',{style:'currency',currency:'CAD',maximumFractionDigits:0}).format(v);
 const pct=v=>v==null?'—':num(v*100,1)+'%';
 const update=()=>{if(state)saveOK=storage.save(state);render()};
 const panel=(title,body,extra='')=>`<section class="panel"><div class="head"><h3>${t(title)}</h3>${extra}</div>${body}</section>`;
 const field=(label,key,value,min=0,max=1000000000,step=1,group='decision',type='number')=>`<label class="field"><span>${t(label)}</span><input type="${type}" data-group="${group}" data-key="${key}" value="${esc(value??'')}" min="${min}" max="${max}" step="${step}" ${group==='override'?'':'required'}></label>`;
 const kpi=(label,value,cls='')=>`<div class="kpi"><small>${t(label)}</small><div class="value ${cls}">${esc(value)}</div></div>`;
 const line=(label,val)=>`<div class="row"><span class="muted">${t(label)}</span><b class="mono">${esc(val)}</b></div>`;
 const languageButtons=()=>`<div class="lang" aria-label="${t('language')}">${['en','fr'].map(l=>`<button data-lang="${l}" class="${language===l?'selected':''}" aria-pressed="${language===l}">${l.toUpperCase()}</button>`).join('')}</div>`;
 const brand=()=>`<div class="brand"><div class="logo">VIC</div><div><b>VIC OS</b><div class="eyebrow">${t('tag')}</div></div></div>`;
 function setup(mode='free'){config={name:'VIC Mutual One',mode,...scenario.startingConfigurations[mode]};}
 function startView(){
 const fields=[field('name','name',config.name,0,0,1,'config','text'),field('startingCapital','startingCapital',config.startingCapital,1,1e10,1,'config'),...(config.mode==='debt'?[field('loan','loan',config.loan,1,1e10,1,'config')]:[]),field('insureds','insureds',config.insureds,1,config.marketSize,1,'config'),field('premium','premium',config.premium,1,1e6,1,'config'),field('marketSize','marketSize',config.marketSize,1,1e9,1,'config'),field('competitor','competitor',config.competitor,1,1e6,1,'config'),field('marketing','marketing',config.marketing,0,1e10,1,'config')].join('');
 return `<header class="top">${brand()}<span class="eyebrow">${t('version')}</span>${languageButtons()}</header><div class="setup"><div class="eyebrow">${t('newGame')} / 01</div><h1>VIC — Virtual Insurance Company</h1><p>${t('subtitle')}</p>${panel('setup',`<p>${t('setupNote')}</p><div class="grid2">${['debt','free'].map(m=>`<button class="mode ${config.mode===m?'selected':''}" data-mode="${m}"><b>${t(m+'Mode')}</b><small>${t(m+'Desc')}</small></button>`).join('')}</div><form id="startForm"><div class="fields">${fields}</div><div class="actions" style="margin-top:18px"><button class="primary" type="submit">${t('start')} →</button><span class="muted">${t('period')}</span></div></form>`)}${error?`<p class="negative">${esc(error)}</p>`:''}<p class="footer">${t('dataDisclaimer')}</p></div>`;
 }
 const nav=['overview','objectives','pricing','marketingNav','claimsNav','competitors','capitalNav','models','prr','settings'];
 function chart(){
 const h=state.history;if(!h.length)return `<p>${t('empty')}</p>`;
 const values=[h[0].assets-h[0].debt-h[0].net,...h.map(r=>r.capital)],lo=Math.min(0,...values),hi=Math.max(1,...values),y=v=>145-(v-lo)/(hi-lo)*125,x=i=>55+i/(values.length-1)*510;
 const points=values.map((v,i)=>`${x(i)},${y(v)}`).join(' ');
 return `<svg class="chart" viewBox="0 0 600 180" role="img" aria-label="${t('chart')}"><line x1="55" y1="${y(0)}" x2="565" y2="${y(0)}" stroke="#55636e" stroke-dasharray="4 4"/><line x1="55" y1="145" x2="565" y2="145" stroke="#34434c"/><polyline points="${points}" fill="none" stroke="#70d1c0" stroke-width="2.5" stroke-linejoin="round"/>${values.map((v,i)=>`<circle cx="${x(i)}" cy="${y(v)}" r="3" fill="#70d1c0"><title>${t('year')} ${i}: ${esc(money(v))}</title></circle>`).join('')}<text x="55" y="12" fill="#9bafbd" font-size="11">${esc(money(hi))}</text><text x="55" y="165" fill="#9bafbd" font-size="11">0</text><text x="565" y="165" text-anchor="end" fill="#9bafbd" font-size="11">${h.length}</text></svg>`;
 }
 function objectivePanel(r){
 const defs=[['targetGrowth','growth',-50,200,r?.growth,false],['targetCombined','combined',0,300,r?.combined,true],['targetShare','share',0,100,r?.share,false],['targetSolvency','solvency',0,1000,r?.solvency,false],['targetRetention','retention',0,100,r?.retention,false]];
 return panel('objectives',`<p>${t('objectiveNote')}</p><div class="fields">${defs.map(([l,k,a,b])=>field(l,k,state.objectives[k],a,b,.1,'objective')).join('')}</div>${r?`<h3>${t('results')}</h3>${defs.map(([l,k,a,b,v,lower])=>line(l,`${pct(v)} / ${num(r.objectives[k],1)}% · ${v==null?'—':t((lower?v*100<=r.objectives[k]:v*100>=r.objectives[k])?'yes':'no')}`)).join('')}`:''}`);
 }
 function pricingPanel(){return panel('pricing',`<p>${t('rateNote')}</p><div class="actions">${[[-3,'rateDown'],[0,'rateStable'],[5,'rateUp']].map(([v,k])=>`<button data-rate="${v}" class="${state.decisions.rate===v?'selected':''}">${t(k)}</button>`).join('')}</div><div class="fields">${field('rate','rate',state.decisions.rate,-50,100,.5)}${field('strict','strictness',state.decisions.strictness,0,100,1)}</div>`);}
 function marketingPanel(){return panel('marketingNav',`<p>${t('marketNote')}</p><div class="fields">${field('marketing','marketing',state.decisions.marketing,0,1e9,1000)}<label class="field"><span>${t('focus')}</span><select data-group="decision" data-key="focus">${[['general','general'],['growth','growthFocus'],['retention','retentionFocus']].map(([v,k])=>`<option value="${v}" ${state.decisions.focus===v?'selected':''}>${t(k)}</option>`).join('')}</select></label></div>`);}
 function forecast(q){return panel('preview',`<p>${t('previewNote')}</p><div class="list">${line('forecastPremium',money(q.premium))}${line('forecastCompetitor',money(q.competitor))}${line('leads',num(q.leads))}${line('conversion',pct(q.conversion))}${line('new',num(q.acquired))}${line('lost',num(q.lost))}${line('retention',pct(q.retention))}${line('insureds',num(q.insureds))}</div>`);}
 function metrics(r){
 const equity=state.assets-state.debt, required=r?.required??Math.max(1,state.insureds*state.premium*state.scenario.capitalRequirementRatio), solvency=equity/required;
 return `<div class="kpis">${kpi('capital',money(equity),equity>0?'positive':'negative')}${kpi('solvency',pct(solvency),solvency>=1?'positive':'negative')}${kpi('insureds',num(state.insureds))}${kpi('share',pct(state.insureds/state.marketSize))}${kpi('combined',pct(r?.combined),r?.combined>1?'negative':'')}${kpi('net',money(r?.net),r?.net<0?'negative':'')}${kpi('earned',money(r?.earned))}${kpi('claims',money(r?.claims))}${kpi('written',money(r?.written))}${kpi('lossRatio',pct(r?.lossRatio))}${kpi('expenseRatio',pct(r?.expenseRatio))}${kpi('underwriting',money(r?.underwriting))}${kpi('new',num(r?.acquired))}${kpi('lost',num(r?.lost))}${kpi('count',num(r?.count))}${kpi('trust',num(state.company.trust,0)+'/100')}</div>`;
 }
 function history(){const h=state.history;return panel('history',h.length?`<div class="tablewrap"><table><thead><tr>${['year','insureds','earned','claims','combined','net','capital','debt','solvency'].map(k=>`<th>${t(k)}</th>`).join('')}</tr></thead><tbody>${[...h].reverse().map(r=>`<tr><td>${r.year}</td><td>${num(r.insureds)}</td><td>${money(r.earned)}</td><td>${money(r.claims)}</td><td>${pct(r.combined)}</td><td>${money(r.net)}</td><td>${money(r.capital)}</td><td>${money(r.debt)}</td><td>${pct(r.solvency)}</td></tr>`).join('')}</tbody></table></div>`:`<p>${t('empty')}</p>`);}
 function claimsPanel(r){const o=state.overrides[state.year]||{};return panel('claimsNav',`<p>${t('claimNote')}</p><div class="kpis">${kpi('count',num(r?.count))}${kpi('severity',money(r?.severity))}${kpi('claims',money(r?.claims))}${kpi('lossRatio',pct(r?.lossRatio))}</div>`)+panel('manual',`<p>${t('scenarioNote')}</p><p>${t('manualNote')}</p><div class="fields">${field('count','claimsCount',o.claimsCount,0,1e9,1,'override')}${field('severity','averageClaimSize',o.averageClaimSize,0,1e9,.01,'override')}${field('inflation','claimsInflation',o.claimsInflation==null?'':o.claimsInflation*100,-99,1000,.1,'override')}${field('cat','catastropheFactor',o.catastropheFactor,.01,100,.01,'override')}</div><div class="actions"><button data-action="clear">${t('clear')}</button></div>`);}
 function settings(){return panel('settings',`<div class="actions">${languageButtons()}<button data-action="export">${t('export')}</button><button data-action="reset">${t('reset')}</button></div>`)+panel('scenario',`<p>${t('scenarioNote')}</p><div class="row"><span>${esc(state.scenario.id||'custom')}</span><span>20</span></div><label class="field"><span>${t('import')}</span><input type="file" id="scenarioFile" accept="application/json,.json" ${state.history.length?'disabled':''}></label><a href="./scenario.json" download>${t('downloadScenario')}</a><p class="footer">${t('dataDisclaimer')}</p>`);}
 function eventText(e){return t(e.key).replace(/\{(\d+)\}/g,(_,i)=>{let v=e.values[i];return ['closed','debtEvent'].includes(e.key)?money(v):num(v,e.key==='marketingEvent'?0:1)});}
 function dashboard(){
 const r=state.history.at(-1),equity=state.assets-state.debt,solv=equity/(r?.required??Math.max(1,state.insureds*state.premium*state.scenario.capitalRequirementRatio)),active=state.status==='active',q=active?preview(state):null;
 let content='';
 if(page==='overview')content=metrics(r)+panel('annual',`<div class="head"><div><h2>${t('year')} ${state.year} / 20</h2><p>${t('runNote')}</p></div><button class="primary" data-action="run" ${active?'':'disabled'}>${t('apply')} →</button></div><div class="progress"><i style="width:${state.history.length/20*100}%"></i></div><p class="${solv<1?'negative':'positive'}">${t(active?(solv<1?'warning':'healthy'):state.status)}</p>`)+`<div class="grid2">${pricingPanel()}${marketingPanel()}</div>`+(q?forecast(q):'')+panel('chart',chart())+history();
 if(page==='objectives')content=objectivePanel(r);
 if(page==='pricing')content=pricingPanel()+(q?forecast(q):'');
 if(page==='marketingNav')content=marketingPanel()+(q?forecast(q):'');
 if(page==='claimsNav')content=claimsPanel(r);
 if(page==='competitors')content=panel('competitors',`<p>${t('competitorNote')}</p><div class="kpis">${kpi('premium',money(q?.premium??state.premium))}${kpi('competitor',money(q?.competitor??state.competitor))}${kpi('index',num((q?.relative??state.premium/state.competitor)*100,1))}${kpi('difference',pct((q?.relative??state.premium/state.competitor)-1))}</div>`);
 if(page==='capitalNav')content=panel('capitalNav',`<p>${t('capitalNote')}</p><div class="kpis">${kpi('assets',money(state.assets))}${kpi('debt',money(state.debt))}${kpi('capital',money(equity))}${kpi('solvency',pct(solv))}${kpi('required',money(r?.required??state.insureds*state.premium*state.scenario.capitalRequirementRatio))}${kpi('interest',money(r?.interest))}${kpi('principal',money(r?.principal))}</div>`)+panel('chart',chart());
 if(page==='models'||page==='prr')content=panel(page,`<span class="pill">${t('future')}</span><h2>${t('locked')}</h2><p>${t('lockedNote')}</p>`);
 if(page==='settings')content=settings();
 return `<header class="top">${brand()}<div class="topstats">${[['year',state.year+'/20'],['capital',money(equity)],['debt',money(state.debt)],['solvency',pct(solv)],['combined',pct(r?.combined)]].map(([k,v])=>`<div><small>${t(k)}</small><strong>${esc(v)}</strong></div>`).join('')}</div>${languageButtons()}</header><div class="shell"><aside><div class="eyebrow">${t('status')}</div><p class="${active?'positive':'warn'}">${t(state.status)}</p><nav>${nav.map(k=>`<button data-page="${k}" class="${page===k?'selected':''} ${['models','prr'].includes(k)?'lock':''}">${t(k)} ${['models','prr'].includes(k)?'⌑':''}</button>`).join('')}</nav><div class="eyebrow ${saveOK?'':'negative'}">${t(saveOK?'saved':'saveError')}</div><div class="footer">${t('version')}</div></aside><main><div class="head"><div><div class="eyebrow">${esc(state.company.name)} · ${t('period')}</div><h1>${t(page)}</h1></div>${page!=='overview'?`<button data-action="run" class="primary" ${active?'':'disabled'}>${t('apply')} →</button>`:''}</div>${error?`<p class="negative">${esc(error)}</p>`:''}${content}<p class="footer">${t('dataDisclaimer')}</p></main><aside class="feed"><div class="eyebrow">${t('feed')}</div>${state.events.length?[...state.events].reverse().slice(0,30).map(e=>`<div class="feeditem ${e.key.toLowerCase().includes('warning')?'alert':''}"><b>${t('year')} ${e.year}</b>${esc(eventText(e))}</div>`).join(''):`<p style="margin-top:14px">${t('noEvents')}</p>`}</aside></div>`;
 }
 function render(){document.documentElement.lang=language;root.innerHTML=state?dashboard():startView();}
 root.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.lang){language=b.dataset.lang;storage.setLanguage(language);if(state)state.language=language;update();return}
 if(b.dataset.mode){setup(b.dataset.mode);error='';render();return}
 if(b.dataset.page){page=b.dataset.page;error='';render();return}
 if(b.dataset.rate!==undefined){state.decisions.rate=Number(b.dataset.rate);update();return}
 const a=b.dataset.action;if(!a)return;
 if(a==='run'&&state.status==='active'){if(confirm(t('closeConfirm'))){try{state=runYear(state);page='overview';error='';update()}catch(e){error=t(e.message);render()}}}
 if(a==='clear'){delete state.overrides[state.year];update()}
 if(a==='reset'&&confirm(t('resetConfirm'))){storage.clear();state=null;page='overview';setup('free');render()}
 if(a==='export'){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='vic-save.json';a.click();URL.revokeObjectURL(url)}
 });
 root.addEventListener('input',e=>{const el=e.target;if(el.dataset.group==='config'){config[el.dataset.key]=el.type==='text'?el.value:el.value===''?NaN:Number(el.value)}});
 root.addEventListener('change',async e=>{
 const el=e.target;if(el.id==='scenarioFile'&&el.files[0]){try{state.scenario=validateScenario(JSON.parse(await el.files[0].text()));error='';update()}catch{error=t('invalidScenario');render()}return}
 const g=el.dataset.group,k=el.dataset.key;if(!state||!g||g==='config')return;
 if(g==='override'){if(el.value!==''&&!el.checkValidity()){el.reportValidity();return}const o=state.overrides[state.year]??={};if(el.value==='')delete o[k];else o[k]=Number(el.value)/(k==='claimsInflation'?100:1);update();return}
 if(!el.checkValidity()){el.reportValidity();return}
 const val=el.tagName==='SELECT'?el.value:Number(el.value);
 if(g==='decision')state.decisions[k]=val;
 if(g==='objective')state.objectives[k]=val;
 update();
 });
 root.addEventListener('submit',e=>{if(e.target.id!=='startForm')return;e.preventDefault();const c=config,keys=['startingCapital','loan','insureds','premium','marketSize','competitor','marketing'];if(!c.name.trim()||keys.some(k=>!Number.isFinite(c[k])||c[k]<0)||c.startingCapital<=0||c.premium<=0||c.competitor<=0||c.insureds<1||c.insureds>c.marketSize||(c.mode==='debt'&&c.loan<=0)){error=t('invalidConfig');render();return}state=init({...c,loan:c.mode==='free'?0:c.loan},scenario,language,globalThis.crypto?.randomUUID?.()||'vic-'+Date.now());error='';update()});
 fetch('./scenario.json').then(r=>{if(!r.ok)throw Error();return r.json()}).then(s=>{scenario=validateScenario(s);if(!state)setup('free');render()}).catch(()=>{root.textContent='VIC OS — Scenario unavailable / Scénario indisponible.'});
})({init,preview,runYear,validateScenario,storage,dictionaries});
