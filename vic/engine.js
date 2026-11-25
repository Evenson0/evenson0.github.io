// Pure annual engine. All monetary amounts in fictional CAD. Scenario controls loss experience.
export const clamp=(n,a,b)=>Math.min(b,Math.max(a,n));
const ratio=(a,b)=>b>0?a/b:null;
export function init(config,scenario,language='en',companyId='local-company'){
 const {name,mode,startingCapital,loan,insureds,premium,marketSize,competitor,marketing}=config;
 return {version:1,companyId,userId:null,company:{name,mode,trust:50},language,year:1,scenario,marketSize,competitor,premium,insureds,assets:startingCapital+loan,debt:loan,initialDebt:loan,decisions:{rate:0,marketing,strictness:40,focus:'general'},objectives:{growth:15,combined:95,share:1,solvency:150,retention:90},history:[],events:[],status:'active',overrides:{}};
}
export function preview(s){
 const x=s.scenario.years[s.year-1]; if(!x)throw Error('missingScenario');
 const p=s.premium*(1+s.decisions.rate/100), competitor=s.competitor*(1+x.competitorRateChange);
 const relative=p/competitor, marketing=s.decisions.marketing, strict=s.decisions.strictness/100, trust=s.company.trust/100;
 const focus=s.decisions.focus;
 const retention=clamp(.86+.09*trust-.55*(relative-1)-.28*Math.max(0,s.decisions.rate/100)+(focus==='retention'?.04:0)-.025*strict,.35,.985);
 const lost=Math.round(s.insureds*(1-retention)), reachable= Math.max(0,s.marketSize-s.insureds+lost);
 const leads=(Math.max(200,s.insureds*.20)+marketing/35)*(focus==='growth'?1.3:focus==='retention'?.65:1);
 const conversion=clamp(.30*Math.exp(-2.8*(relative-1))*(.7+.6*trust)*(1-.55*strict),.025,.85);
 const acquired=Math.min(reachable,Math.round(leads*conversion));
 return {premium:p,competitor,relative,retention,lost,acquired,insureds:s.insureds-lost+acquired,exposure:s.insureds+(acquired-lost)/2,leads,conversion};
}
export function runYear(s){
 if(s.status!=='active'||s.year>20)throw Error('finished');
 const x=s.scenario.years[s.year-1], q=preview(s), o=s.overrides[s.year]||{};
 const priorInflation=s.scenario.years.slice(0,s.year-1).reduce((v,y)=>v*(1+(s.overrides[y.year]?.claimsInflation??y.claimsInflation)),1);
 const inflation=o.claimsInflation??x.claimsInflation, catastrophe=o.catastropheFactor??x.catastropheFactor;
 const count=o.claimsCount??Math.round(q.exposure*x.frequency);
 const severity=o.averageClaimSize??x.averageClaimSize*priorInflation*(1+inflation)*catastrophe;
 const claims=count*severity, earned=q.exposure*q.premium, written=q.insureds*q.premium;
 const expenses=s.scenario.fixedExpense+earned*s.scenario.baseExpenseRatio+s.decisions.marketing;
 const underwriting=earned-claims-expenses, interest=s.debt*s.scenario.annualDebtInterestRate, principal=Math.min(s.debt,s.initialDebt/20);
 const net=underwriting-interest, assets=s.assets+net-principal,debt=s.debt-principal,capital=assets-debt;
 const required=Math.max(1,written*s.scenario.capitalRequirementRatio), solvency=capital/required;
 const lossRatio=ratio(claims,earned), expenseRatio=ratio(expenses,earned), combined=ratio(claims+expenses,earned);
 const growth=ratio(q.insureds-s.insureds,s.insureds), share=q.insureds/s.marketSize;
 const trust=clamp(s.company.trust+(combined!==null&&combined<1?2:-2)+(solvency<1?-4:1)+(q.retention>.9?1:0),0,100);
 const r={year:s.year,assets,debt,capital,required,solvency,insureds:q.insureds,acquired:q.acquired,lost:q.lost,earned,written,count,severity,claims,expenses,underwriting,interest,principal,net,lossRatio,expenseRatio,combined,growth,share,retention:q.retention,premium:q.premium,competitor:q.competitor,index:q.relative*100,trust,objectives:{...s.objectives},decisions:{...s.decisions}};
 const events=[{year:s.year,key:'closed',values:[net]}];
 if(q.relative>1.04)events.push({year:s.year,key:'priceWarning',values:[(q.relative-1)*100]});
 if(s.decisions.marketing>0)events.push({year:s.year,key:'marketingEvent',values:[q.leads]});
 if(catastrophe>1)events.push({year:s.year,key:'catEvent',values:[catastrophe]});
 if(combined!==null&&combined>1)events.push({year:s.year,key:'combinedWarning',values:[combined*100]});
 if(s.debt>0)events.push({year:s.year,key:'debtEvent',values:[interest]});
 if(solvency<1)events.push({year:s.year,key:'capitalWarning',values:[solvency*100]});
 if(share>=.01&&s.insureds/s.marketSize<.01)events.push({year:s.year,key:'milestone',values:[]});
 const status=capital<=0||assets<=0?'ruin':s.year===20?'complete':'active';
 return {...s,year:Math.min(20,s.year+1),assets,debt,insureds:q.insureds,premium:q.premium,competitor:q.competitor,company:{...s.company,trust},decisions:{...s.decisions,rate:0},history:[...s.history,r],events:[...s.events,...events],status};
}
export function validateScenario(s){
 if(!s||s.horizonYears!==20||!Array.isArray(s.years)||s.years.length!==20)throw Error('invalidScenario');
 for(const k of ['baseExpenseRatio','fixedExpense','capitalRequirementRatio','annualDebtInterestRate'])if(!Number.isFinite(s[k])||s[k]<0)throw Error('invalidScenario');
 if(s.capitalRequirementRatio<=0||s.baseExpenseRatio>1||s.annualDebtInterestRate>1)throw Error('invalidScenario');
 s.years.forEach((y,i)=>{if(y.year!==i+1||!Number.isFinite(y.frequency)||y.frequency<0||!Number.isFinite(y.averageClaimSize)||y.averageClaimSize<0||!Number.isFinite(y.claimsInflation)||y.claimsInflation<=-1||!Number.isFinite(y.catastropheFactor)||y.catastropheFactor<=0||!Number.isFinite(y.competitorRateChange)||y.competitorRateChange<=-1)throw Error('invalidScenario')});
 return s;
}
