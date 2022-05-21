(this["webpackJsonphero-analyzer"]=this["webpackJsonphero-analyzer"]||[]).push([[0],{102:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},118:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a,s,r=n(1),i=n.n(r),c=n(33),o=n.n(c),l=(n(102),n(28)),u=n(7),m=n(23),j=n.n(m),d=n(55),h=n(30),b=n(42),g=function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))},v=function(e){return"".concat(e[0].toLowerCase()).concat(e.slice(1))},f={id:"SER",name:"Serendale"},O={id:"CRY",name:"Crystalvale"},x={id:"hmy",name:"Harmony"},p={id:"dfk",name:"DFK Chain"},C="https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",N=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n,s,r,i,c,o,l,u,m,d,v,f=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.length>0&&void 0!==f[0]?f[0]:"sale",n=f.length>1&&void 0!==f[1]?f[1]:x.id,s=f.length>2&&void 0!==f[2]?f[2]:[],r=f.length>3&&void 0!==f[3]?f[3]:"",i=f.length>4&&void 0!==f[4]?f[4]:50,c=f.length>5&&void 0!==f[5]?f[5]:0,console.log("Retrieving hero listings ".concat(c+1," - ").concat(c+i," from the Tavern")),o={headers:{"Content-Type":"application/json"}},l=new b.GraphQLClient(C,o),u="".concat(t,'Price_not: null\n                network: "').concat(n,'"'),s.length&&(u="".concat(u,"\n    mainClass_in: [").concat(s.map((function(e){return'"'.concat(g(e),'"')})),"]")),r&&(u="".concat(u,'\n    profession: "').concat(r,'"')),m="price: ".concat(t,"Price"),d=Object(b.gql)(a||(a=Object(h.a)(["\n\t{\n    heroes(\n      first: ","\n      skip: ","\n      where:{\n        ","\n      }\n    )\n    {\n      id\n      owner{\n        name\n      }\n      originRealm\n      network\n      firstName\n      lastName\n      rarity\n      gender\n      generation\n      mainClass\n      subClass\n      level\n      profession\n      fishing\n      foraging\n      gardening\n      mining\n  \n      stamina\n  \n      summonsRemaining\n      maxSummons\n      summons\n      \n      active1\n      active2\n      passive1\n      passive2\n      statBoost1\n      statBoost2\n      statsUnknown1\n      statsUnknown2\n      element\n  \n      strength\n      agility\n      endurance\n      wisdom\n      dexterity\n      vitality\n      intelligence\n      luck\n\n      ","\n      status\n      hpFullAt\n      mpFullAt\n      statGenesRaw: statGenes\n    }\n  }"])),i,c,u,m),e.next=16,l.request(d);case 16:return v=e.sent,console.log("".concat(v.heroes.length," hero listings retrieved from the Tavern")),e.abrupt("return",v);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=[{generation:0,baseCost:6,increment:2,maxCost:30},{generation:1,baseCost:16,increment:2,maxCost:34},{generation:2,baseCost:26,increment:2,maxCost:42},{generation:3,baseCost:36,increment:2,maxCost:50},{generation:4,baseCost:46,increment:2,maxCost:58},{generation:5,baseCost:56,increment:2,maxCost:66},{generation:6,baseCost:66,increment:2,maxCost:74},{generation:7,baseCost:76,increment:2,maxCost:82},{generation:8,baseCost:86,increment:2,maxCost:90},{generation:9,baseCost:96,increment:2,maxCost:98},{generation:10,baseCost:106,increment:2,maxCost:106}],y=function(e){var t=e.generation,n=e.summons,a=e.maxSummons;if(t<0||t>10)return"?";var s=w[t];return n>=a?s.maxCost:s.baseCost+n*s.increment},S=n(14),k=n(83),G=[{classes:["warrior","knight"],mutation:"paladin"},{classes:["thief","archer"],mutation:"darkKnight"},{classes:["priest","wizard"],mutation:"summoner"},{classes:["monk","pirate"],mutation:"ninja"},{classes:["seer","berserker"],mutation:"shapeshifter"},{classes:["paladin","darkKnight"],mutation:"dragoon"},{classes:["summoner","ninja"],mutation:"sage"},{classes:["dragoon","sage"],mutation:"dreadKnight"}],P=[.75,.1875,.046875,.015625],T={basic:.25,advanced:.25,elite:.125,exalted:.125},B=function(e){return R(e.map((function(e,t){return{name:e,value:P[t]}})))},R=function(e){return e.reduce((function(e,t,n){var a=e.find((function(e){return e.name===t.name}));return a?(a.value+=t.value,e):[].concat(Object(S.a)(e),[t])}),[])},I=function(e,t){var n=F(e.name,t.name);if(n){var a=T[Object(k.getHeroTier)(e.name)];return{name:n.mutation,value:e.value*t.value*a}}return null},F=function(e,t){return G.find((function(n){return e!==t&&n.classes.includes(e)&&n.classes.includes(t)}))},M=function(e){return e.forEach((function(e){return e.value=e.value/2}))},A=function(e,t){var n={hero1:B(e),hero2:B(t)};return n.mutations=function(e,t){for(var n=[],a=0;a<e.length;a++)for(var s=0;s<t.length;s++){var r=I(e[a],t[s]);if(r){n.push(r),e[a].value-=r.value,t[s].value-=r.value;break}}return n}(n.hero1,n.hero2),M(n.hero1),M(n.hero2),function(e){return R(e.hero1.concat(e.hero2,e.mutations)).sort((function(e,t){return e.value>t.value?-1:e.value<t.value?1:0}))}(n)},L=function(e,t,n){return A(e,t).find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))},E=function(e,t,n){var a=[t];if(e===t)return a;var s=G.find((function(e){return e.mutation===t}));if(s){var r=s.classes.find((function(t){return t===e})),i=s.classes.find((function(t){return t!==e}));r&&a.push(i)}return a},K=function(e){return G.find((function(t){return t.classes.includes(e)})).mutation},D=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",n=new b.GraphQLClient("https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",{headers:{"Content-Type":"application/json"}}),a=Object(b.gql)(s||(s=Object(h.a)(["\n\t{\n\t\theroes( \n\t\t\torderBy: numberId\n\t\t\torderDirection: asc\n\t\t\twhere: \n\t\t\t{\n\t\t\t\tid: ","\n\t\t   \t}\n\t\t)\n\t\t{\n\t\t\tid\n\t\t\towner{\n\t\t\t  name\n\t\t\t}\n\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\toriginRealm\n\t\t\tnetwork\n\t\t\trarity\n\t\t\tgender\n\t\t\tgeneration\n\t\t\tmainClass\n\t\t\tsubClass\n\t\t\tlevel\n\t\t\tprofession\n\t\t\tfishing\n\t\t\tforaging\n\t\t\tgardening\n\t\t\tmining\n\t\t\n\t\t\tstamina\n\t\t\n\t\t\tsummonsRemaining\n\t\t\tmaxSummons\n\t\t\tsummons\n\t\t\t\n\t\t\tactive1\n\t\t\tactive2\n\t\t\tpassive1\n\t\t\tpassive2\n\t\t\tstatBoost1\n\t\t\tstatBoost2\n\t\t\tstatsUnknown1\n\t\t\tstatsUnknown2\n\t\t\telement\n\t\t\n\t\t\tstrength\n\t\t\tagility\n\t\t\tendurance\n\t\t\twisdom\n\t\t\tdexterity\n\t\t\tvitality\n\t\t\tintelligence\n\t\t\tluck\n\t  \n\t\t\tstatus\n\t\t\thpFullAt\n\t\t\tmpFullAt\n\t\t\tstatGenesRaw: statGenes\n\t\t}\n\t}"])),t),e.next=5,n.request(a);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:if((n=e.sent).heroes.length){e.next=5;break}return e.abrupt("return",null);case 5:return a=Object(d.decodeRecessiveGenesAndNormalize)(n.heroes)[0],H(a),a.displayId=13===a.id.length?Number(a.id.slice(1)).toString():a.id,a.summonCost=y(a),a.mutationClass=K(v(a.mainClass)),e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t=function(e){for(var t=0;t<e.length;t++)"sheer"===e[t]&&(e[t]="seer")};t(e.mainClassGenes),t(e.subClassGenes)},q=n(172),V=n(180),W=n(84),J={warrior:"Warrior",knight:"Knight",thief:"Thief",archer:"Archer",priest:"Priest",wizard:"Wizard",monk:"Monk",pirate:"Pirate",seer:"Seer",berserker:"Berserker",paladin:"Paladin",darkKnight:"DarkKnight",summoner:"Summoner",ninja:"Ninja",shapeshifter:"Shapeshifter",dragoon:"Dragoon",sage:"Sage",dreadKnight:"DreadKnight"},U=["warrior","knight","thief","archer","priest","wizard","monk","pirate","seer","berserker"],X=["paladin","darkKnight","summoner","ninja","shapeshifter"],Q=["dragoon","sage"],_=["dreadKnight"],Y=["D","R1","R2","R3"],Z=0,$=2,ee=n(0),te={mining:"Mining",foraging:"Foraging",gardening:"Gardening",fishing:"Fishing"},ne=function(e){var t=e.className,n=e.genes,a=e.heroid,s=e.highlighted,r=e.title,i=e.type;return Object(ee.jsxs)("div",{className:"hero-snapshot-genes".concat(t?" ".concat(t):""),children:[Object(ee.jsx)("div",{className:"title",children:r}),n.map((function(e,t){var n=i===Z?J[e]:i===$?te[e]:e;return n||(n=e),Object(ee.jsxs)("div",{className:"gene",children:[Object(ee.jsxs)("div",{className:"label",children:[Y[t],":"]}),Object(ee.jsx)("div",{className:"value".concat(s&&s.includes(e)?" highlighted":""),children:n})]},"".concat(a,"-").concat(Y[t]))}))]})};ne.defaultProps={type:0};var ae=ne,se=function(e){var t=e.boldIfNot,n=e.value,a="value";return t&&!n.toString().toLowerCase().includes(t)&&(a+=" highlighted"),Object(ee.jsx)("div",{className:"gene",children:Object(ee.jsx)("div",{className:a,children:n})})},re=function(e){var t=e.className,n=e.genes;return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)("div",{className:"hero-snapshot-genes".concat(t?" ".concat(t):""),children:[Object(ee.jsx)("div",{className:"title",children:"Active"}),Object(ee.jsx)(se,{value:n.active1,boldIfNot:"basic"}),Object(ee.jsx)(se,{value:n.active2,boldIfNot:"basic"})]}),Object(ee.jsxs)("div",{className:"hero-snapshot-genes".concat(t?" ".concat(t):""),children:[Object(ee.jsx)("div",{className:"title",children:"Passive"}),Object(ee.jsx)(se,{value:n.passive1,boldIfNot:"basic"}),Object(ee.jsx)(se,{value:n.passive2,boldIfNot:"basic"})]})]})};re.defaultProps={};var ie=re,ce=function(e){var t=e.highlights,n=e.hero;return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)("div",{className:"hero-snapshot-genes-section",children:[Object(ee.jsx)(ae,{genes:n.mainClassGenes,heroid:n.id,title:"Class",highlighted:t.mainClass}),Object(ee.jsx)(ae,{genes:n.subClassGenes,heroid:n.id,title:"SubClass"}),Object(ee.jsx)(ae,{genes:n.professionGenes,heroid:n.id,title:"Profession",type:$,highlighted:t.profession})]}),Object(ee.jsx)("div",{className:"hero-snapshot-stat-genes-section",children:Object(ee.jsx)(ie,{genes:n})})]})};ce.defaultProps={highlights:{}};var oe=ce,le=function(e){var t=e.children,n=e.className,a=e.title;return Object(ee.jsxs)("div",{className:"hero-stat-section ".concat(n),children:[Object(ee.jsx)("div",{className:"title",children:a}),Object(ee.jsx)("div",{className:"stat-group",children:t})]})};le.defaultProps={className:"hero-stat-section"};var ue=le,me=function(e){var t=e.name,n=e.value,a=e.main,s=e.minor,r="name".concat(a&&s?" main-minor":a?" main":s?" minor":"");return Object(ee.jsxs)("div",{className:"hero-stat",children:[Object(ee.jsx)("div",{className:r,children:t}),Object(ee.jsx)("div",{className:"value",children:n})]})},je=function(e){var t=e.hero;return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsxs)(ue,{title:"Stats",children:[Object(ee.jsx)(me,{name:"STR",value:t.strength,main:"STR"===t.statBoost1,minor:"STR"===t.statBoost2}),Object(ee.jsx)(me,{name:"AGI",value:t.agility,main:"AGI"===t.statBoost1,minor:"AGI"===t.statBoost2}),Object(ee.jsx)(me,{name:"END",value:t.endurance,main:"END"===t.statBoost1,minor:"END"===t.statBoost2}),Object(ee.jsx)(me,{name:"WIS",value:t.wisdom,main:"WIS"===t.statBoost1,minor:"WIS"===t.statBoost2}),Object(ee.jsx)(me,{name:"DEX",value:t.dexterity,main:"DEX"===t.statBoost1,minor:"DEX"===t.statBoost2}),Object(ee.jsx)(me,{name:"VIT",value:t.vitality,main:"VIT"===t.statBoost1,minor:"VIT"===t.statBoost2}),Object(ee.jsx)(me,{name:"INT",value:t.intelligence,main:"INT"===t.statBoost1,minor:"INT"===t.statBoost2}),Object(ee.jsx)(me,{name:"LCK",value:t.luck,main:"LCK"===t.statBoost1,minor:"LCK"===t.statBoost2})]}),Object(ee.jsxs)(ue,{className:"profession-stat-section",title:"Professions",children:[Object(ee.jsx)(me,{name:"Mining",value:t.mining,main:"mining"===t.profession}),Object(ee.jsx)(me,{name:"Fishing",value:t.fishing,main:"fishing"===t.profession}),Object(ee.jsx)(me,{name:"Gardening",value:t.gardening,main:"gardening"===t.profession}),Object(ee.jsx)(me,{name:"Foraging",value:t.foraging,main:"foraging"===t.profession})]})]})},de=(n(113),["common","uncommon","rare","legendary","mythic"]),he=function(){return Object(ee.jsx)("img",{src:"/jewel50.png",className:"jewel-icon",alt:"Jewel"})},be=function(){return Object(ee.jsx)("img",{src:"/crystal100.png",className:"jewel-icon",alt:"Jewel"})},ge=function(e){var t=e.label,n=e.showIcon,a=e.network,s=e.value,r=a===x.id?Object(ee.jsx)(he,{}):Object(ee.jsx)(be,{});return Object(ee.jsxs)("div",{className:"price-group",children:[Object(ee.jsxs)("div",{className:"price-value",children:[s,n&&r]}),Object(ee.jsx)("div",{className:"price-label",children:t})]})},ve=function(e){var t=e.highlights,n=e.hero,a=e.title,s=e.view,r="Gen ".concat(n.generation," | ").concat(W.Rarity[n.rarity]," | Level ").concat(n.level),i="".concat(g(n.mainClass)," / ").concat(g(n.subClass)," | ").concat(g(n.profession)),c=n.originRealm===f.id?Object(ee.jsx)(he,{}):Object(ee.jsx)(be,{});return Object(ee.jsxs)("div",{className:"hero-snapshot ".concat(de[n.rarity]),children:[Object(ee.jsx)("div",{className:"hero-snapshot-title",children:a}),Object(ee.jsxs)("div",{className:"hero-snapshot-name",children:["Hero ",c," #",n.displayId]}),Object(ee.jsx)("div",{className:"hero-snapshot-grc",children:r}),Object(ee.jsx)("div",{className:"hero-snapshot-grc",children:i}),"front"===s&&Object(ee.jsx)(je,{hero:n}),"back"===s&&Object(ee.jsx)(oe,{hero:n,highlights:t}),Object(ee.jsxs)("div",{className:"hero-snapshot-pricing",children:[n.price&&Object(ee.jsx)(ge,{label:Object(ee.jsxs)(ee.Fragment,{children:["".concat("sale"===n.auctionType?"Purchase":"Rental"),Object(ee.jsx)("br",{}),"Price"]}),value:n.price,showIcon:!0,network:n.network}),Object(ee.jsx)(ge,{label:Object(ee.jsxs)(ee.Fragment,{children:["Summon",Object(ee.jsx)("br",{}),"Cost"]}),value:n.summonCost,showIcon:!0,network:n.network}),"assisting"===n.auctionType&&Object(ee.jsx)(ge,{label:Object(ee.jsxs)(ee.Fragment,{children:["Total",Object(ee.jsx)("br",{}),"Cost"]}),value:Number(n.price)+Number(n.summonCost),showIcon:!0,network:n.network}),Object(ee.jsx)(ge,{label:0===n.generation?Object(ee.jsxs)(ee.Fragment,{children:["Total",Object(ee.jsx)("br",{}),"Summons"]}):Object(ee.jsxs)(ee.Fragment,{children:["Summons",Object(ee.jsx)("br",{}),"Remaining"]}),value:"".concat(11===n.maxSummons?n.summons:n.summonsRemaining,"/").concat(11===n.maxSummons?"\u221e":n.maxSummons)})]}),Object(ee.jsxs)("div",{className:"hero-snapshot-owner",children:["Owned by: ",n.owner?n.owner.name:"UNAVAILABLE"]})]})};ve.defaultProps={view:"front"};var fe=ve,Oe=fe,xe=n(175),pe=n(176),Ce=n(174),Ne=n(170),we=n(181),ye=n(171),Se=(n(114),function(e){var t=e.onFiltersChange,n=e.onSortByChange,a=e.onViewToggled,s=e.visible,i=Object(r.useState)("probability"),c=Object(u.a)(i,2),o=c[0],l=c[1],m=Object(r.useState)(""),j=Object(u.a)(m,2),d=j[0],h=j[1],b=Object(r.useState)(""),g=Object(u.a)(b,2),v=g[0],f=g[1],O=Object(r.useState)("0"),x=Object(u.a)(O,2),p=x[0],C=x[1],N=Object(r.useState)("14"),w=Object(u.a)(N,2),y=w[0],S=w[1],k=Object(r.useState)(!1),G=Object(u.a)(k,2),P=G[0],T=G[1],B=Object(r.useState)(!1),R=Object(u.a)(B,2),I=R[0],F=R[1],M=Object(r.useState)(!1),A=Object(u.a)(M,2),L=A[0],E=A[1],K=Object(r.useState)(!1),D=Object(u.a)(K,2),z=D[0],H=D[1],q=function(e){var n=e.target,a=d,s=v,r=p,i=y,c=P,o=I,l=L,u=z;switch(n.name){case"summonsRemaining":a=n.value,h(n.value);break;case"maxSummons":s=n.value,f(n.value);break;case"minGen":r=n.value,C(n.value);break;case"maxGen":i=n.value,S(n.value);break;case"classMatch":c=n.checked,T(c),console.log("class set to ".concat(c));break;case"subclassMatch":o=n.checked,F(o);break;case"professionMatch":l=n.checked,E(l);break;case"includeSummonClass":u=n.checked,H(u);break;default:console.log("unknown search filter selected")}console.log("".concat(n.name," set to ").concat(n.value)),t({summonsRemaining:a,maxSummons:s,minGen:r,maxGen:i,classMatch:c,subclassMatch:o,professionMatch:l,includeSummonClass:u})};return s?Object(ee.jsxs)(pe.a,{container:!0,className:"sort-filter",justifyContent:"center",children:[Object(ee.jsxs)(pe.a,{item:!0,className:"section",children:[Object(ee.jsx)(we.a,{defaultChecked:!1,onChange:function(e){a(e.target.checked)}}),"Flip Cards"]}),Object(ee.jsxs)(pe.a,{item:!0,className:"section",children:[Object(ee.jsx)("div",{className:"sort-label",children:"Sort By:"}),Object(ee.jsx)("div",{className:"sort-value",children:Object(ee.jsxs)(Ne.a,{label:"Sort by",name:"sort-by",className:"sort-by-selecter",value:o,variant:"standard",onChange:function(e){var t=e.target;l(t.value),n(t.value)},children:[Object(ee.jsx)(Ce.a,{value:"probability",children:"Probability"},"probability"),Object(ee.jsx)(Ce.a,{value:"price",children:"Price"},"price")]})})]}),Object(ee.jsxs)(pe.a,{item:!0,className:"section",children:[Object(ee.jsx)("div",{className:"filter-label",children:"Filters:"}),Object(ee.jsxs)("div",{className:"filter-selections",children:["Summons",Object(ee.jsxs)("div",{className:"filter-selecters",children:[Object(ee.jsxs)("div",{className:"filter-selecter",children:["Remaining",Object(ee.jsx)(ye.a,{name:"summonsRemaining",value:d,variant:"standard",onChange:q,type:"number"})]}),Object(ee.jsxs)("div",{className:"filter-selecter",children:["Max",Object(ee.jsx)(ye.a,{name:"maxSummons",value:v,variant:"standard",onChange:q,type:"number"})]})]})]}),Object(ee.jsxs)("div",{className:"filter-selections",children:["Generation",Object(ee.jsxs)("div",{className:"filter-selecters",children:[Object(ee.jsxs)("div",{className:"filter-selecter",children:["Min",Object(ee.jsx)(ye.a,{name:"minGen",value:p,variant:"standard",onChange:q,type:"number"})]}),Object(ee.jsxs)("div",{className:"filter-selecter",children:["Max",Object(ee.jsx)(ye.a,{name:"maxGen",value:y,variant:"standard",onChange:q,type:"number"})]})]})]}),Object(ee.jsxs)("div",{className:"gene-match",children:[Object(ee.jsx)("div",{className:"heading",children:"D/R1 Gene Match"}),Object(ee.jsxs)("div",{className:"options",children:[Object(ee.jsxs)("div",{className:"option",children:[Object(ee.jsx)(xe.a,{name:"classMatch",value:P,onChange:q,className:"gene-checkbox"}),Object(ee.jsx)("div",{className:"label",children:"Class"})]}),Object(ee.jsxs)("div",{className:"option",children:[Object(ee.jsx)(xe.a,{name:"subclassMatch",value:I,onChange:q,className:"gene-checkbox"}),Object(ee.jsx)("div",{className:"label",children:"Subclass"})]}),Object(ee.jsxs)("div",{className:"option",children:[Object(ee.jsx)(xe.a,{name:"professionMatch",value:L,onChange:q,className:"gene-checkbox"}),Object(ee.jsx)("div",{className:"label",children:"Profession"})]})]})]}),Object(ee.jsxs)("div",{className:"include-summon-class",children:[Object(ee.jsx)("div",{children:"Include Summon Class"}),Object(ee.jsx)(xe.a,{name:"includeSummonClass",value:z,onChange:q})]})]})]}):null});Se.defaultProps={onFiltersChange:function(){},onSortByChange:function(){},onViewToggled:function(){},visible:!1};var ke=Se,Ge=n(178),Pe=n(182),Te=n(86),Be=n.n(Te),Re=(n(118),function(){return Object(ee.jsx)("img",{src:"/jewel50.png",className:"jewel-icon",alt:"Jewel"})}),Ie=function(){return Object(ee.jsx)("img",{src:"/crystal100.png",className:"jewel-icon",alt:"Jewel"})},Fe=[{label:"Serendale",value:x.id},{label:"Crystalvale",value:p.id}],Me=function(e){return e.map((function(e){var t="string"===typeof e?e:e.label,n="string"===typeof e?e:e.value;return Object(ee.jsx)(Ce.a,{value:n,children:t},n)}))},Ae=Me([{label:"sale",value:"sale"},{label:"rent",value:"assisting"}]),Le=Me(Fe),Ee=Me([{label:"any profession",value:"all"}].concat(Object(S.a)(["mining","gardening","foraging","fishing"]))),Ke=function(e){var t=e.defaultSummonClass,n=e.isHeroLoaded,a=e.onHeroChange,s=e.onSubmit,i=(e.onToggle,Object(r.useState)("")),c=Object(u.a)(i,2),o=c[0],l=c[1],m=Object(r.useState)("all"),j=Object(u.a)(m,2),d=j[0],h=j[1],b=Object(r.useState)("assisting"),g=Object(u.a)(b,2),v=g[0],p=g[1],C=Object(r.useState)(x.id),N=Object(u.a)(C,2),w=N[0],y=N[1],k=Object(r.useState)(f.id),G=Object(u.a)(k,2),P=G[0],T=G[1],B=Object(r.useState)(""),R=Object(u.a)(B,2),I=R[0],F=R[1],M=Object(r.useState)([]),A=Object(u.a)(M,2),L=A[0],E=A[1];Object(r.useEffect)((function(){var e=U.sort().map((function(e){return Object(ee.jsx)(Ce.a,{value:e,children:J[e]},e)})),t=X.sort().map((function(e){return Object(ee.jsx)(Ce.a,{value:e,children:J[e]},e)})),n=Q.sort().map((function(e){return Object(ee.jsx)(Ce.a,{value:e,children:J[e]},e)})),a=_.sort().map((function(e){return Object(ee.jsx)(Ce.a,{value:e,children:J[e]},e)})),s=[Object(ee.jsx)(Pe.a,{children:"Basic Classes"},"basic")].concat(Object(S.a)(e),[Object(ee.jsx)(Pe.a,{children:"Advanced Classes"},"advanced")],Object(S.a)(t),[Object(ee.jsx)(Pe.a,{children:"Elite Classes"},"elite")],Object(S.a)(n),[Object(ee.jsx)(Pe.a,{children:"Exalted Classes"},"exalted")],Object(S.a)(a));E(s)}),[]),Object(r.useEffect)((function(){t&&l(t)}),[t]);var K=function(e){var t=e.target;a&&a(t.value,P)},D=n&&o;return Object(ee.jsxs)(pe.a,{container:!0,className:"search-form-simple",justifyContent:"center",spacing:0,children:[Object(ee.jsxs)(pe.a,{item:!0,children:["Find me heroes for",Object(ee.jsx)(Ne.a,{label:"Auction Type",name:"auction-type",className:"auction-type-selecter",value:v,variant:"standard",onChange:function(e){var t=e.target;p(t.value)},children:Ae})]}),Object(ee.jsxs)(pe.a,{item:!0,children:["in the",Object(ee.jsx)(Ne.a,{name:"network",className:"network-selecter",value:w,variant:"standard",onChange:function(e){var t=e.target;y(t.value)},children:Le}),"tavern,"]}),Object(ee.jsxs)(pe.a,{item:!0,className:"hero-container",children:["who can match with hero",Object(ee.jsxs)(Ne.a,{className:"origin-realm-selecter",name:"origin-realm",value:P,variant:"standard",onChange:function(e){var t=e.target;T(t.value),I&&a&&a(I,t.value)},children:[Object(ee.jsx)(Ce.a,{value:f.id,children:Object(ee.jsx)(Re,{})}),Object(ee.jsx)(Ce.a,{value:O.id,children:Object(ee.jsx)(Ie,{})})]}),"#",Object(ee.jsx)(ye.a,{className:"hero-id-selecter",placeholder:"hero id",name:"hero-id",value:I,variant:"standard",onChange:function(e){F(e.target.value)},onBlur:K,onKeyPress:function(e){"Enter"===e.key&&K(e)}})]}),Object(ee.jsxs)(pe.a,{item:!0,children:["to summon a",Object(ee.jsx)(Ne.a,{label:"Class to be summoned",name:"summoned-class",className:"summoned-class-selecter",value:o,variant:"standard",onChange:function(e){var t=e.target;l(t.value)},children:L})]}),Object(ee.jsxs)(pe.a,{item:!0,children:["for",Object(ee.jsx)(Ne.a,{label:"Profession to be summoned",name:"summoned-profession",className:"summoned-profession-selecter",value:d,variant:"standard",onChange:function(e){var t=e.target;h(t.value)},children:Ee})]}),Object(ee.jsx)(pe.a,{item:!0,children:Object(ee.jsx)(Ge.a,{variant:"contained",onClick:function(){s&&s({auctionType:v,heroId:I,network:w,originRealm:P,summonClass:o,summonProfession:"all"===d?"":d})},disabled:!D,children:Object(ee.jsx)(Be.a,{})})})]})};Ke.defaultProps={defaultSummonClass:"",isHeroLoaded:!1,onToggle:function(){}};var De=Ke,ze=function(e){var t=e.highlights,n=e.heroes,a=e.view,s=function(e){return"".concat((100*e.targetProbability).toFixed(2),"% probability")};return n.length?n.map((function(e){return Object(ee.jsx)(fe,{hero:e,title:s(e),view:a,highlights:t},e.id)})):null},He=(n(121),["Now there is an interesting fellow.","Oh, the Tavern has Perch Porter on draft.","Chatting with Agent Selina.  She is such a sweetheart!","Are those wings on her back, or she just harpy to see me?","Woah, big guy!  Careful with those horns!"]),qe=function(e){var t=e.hero,n=e.view;return t?Object(ee.jsx)("div",{className:"main-hero",children:Object(ee.jsx)(Oe,{hero:t,title:"Main Hero",view:n})}):null},Ve=function(e){var t=e.heroCount,n=e.loaded,a=e.loading,s=e.message,r=a?s:n&&!t?"No Heroes Found":null;return r?Object(ee.jsx)(q.a,{variant:"outlined",severity:"success",className:"loading-message",children:r}):null},We=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!1),i=Object(u.a)(s,2),c=i[0],o=i[1],m=Object(r.useState)(""),h=Object(u.a)(m,2),b=h[0],O=h[1],x=Object(r.useState)("simple"),p=Object(u.a)(x,2),C=p[0],w=p[1],S=Object(r.useState)("probability"),k=Object(u.a)(S,2),G=k[0],P=k[1],T=Object(r.useState)({}),B=Object(u.a)(T,2),R=B[0],I=B[1],F=Object(r.useState)(""),M=Object(u.a)(F,2),A=M[0],K=M[1],D=Object(r.useState)(),q=Object(u.a)(D,2),W=q[0],J=q[1],U=Object(r.useState)([]),X=Object(u.a)(U,2),Q=X[0],_=X[1],Y=Object(r.useState)("back"),Z=Object(u.a)(Y,2),$=Z[0],te=Z[1],ne=Object(r.useState)(),ae=Object(u.a)(ne,2),se=ae[0],re=ae[1],ie=function(e){return new Promise((function(t){return setTimeout(t,e)}))},ce=function(){var e=Math.floor(Math.random()*He.length);O(He[e])},oe=function(){var e=Object(l.a)(j.a.mark((function e(t,n){var s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(s=n===f.id?t:"".concat("1000000000000".slice(0,13-t.length)).concat(t))||W&&W.id===s){e.next=10;break}return _([]),J(),K(""),O(""),e.next=8,z(s);case 8:(r=e.sent)?(J(r),K(r.mutationClass)):(O("Hero not found."),a(!0));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,s,r,i,c,l,u,m,h,b,g,f;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_([]),a(!0),ce(),n=[],s=50,r=0,i=!1,c=E(v(W.mainClass),t.summonClass),re({mainClass:c,profession:[t.summonProfession]});case 9:if(i){e.next=29;break}return e.next=12,N(t.auctionType,t.network,c,t.summonProfession,s,r);case 12:for(l=e.sent,u=Object(d.decodeRecessiveGenesAndNormalize)(l.heroes),m=0;m<u.length;m++)h=u[m],H(h),h.displayId=13===h.id.length?Number(h.id.slice(1)).toString():h.id,h.auctionType=t.auctionType,h.summonCost=y(h),h.price=(j=h.price,Number(j)/1e18),b=L(W.mainClassGenes,h.mainClassGenes,t.summonClass),t.summonProfession?(g=L(W.professionGenes,h.professionGenes,t.summonProfession),h.targetProbability=b&&g?b.value*g.value:0):h.targetProbability=b?b.value:0;return f=u.filter((function(e){return e.targetProbability>0})),console.log("".concat(n.length," existing heroes")),console.log("adding ".concat(f.length," new heroes")),n=n.concat(f),console.log("now ".concat(n.length," total heroes")),_(n),ce(),r+=s,i=0===l.length,e.next=26,ie(1e3);case 26:i=r>200,e.next=9;break;case 29:a(!1),o(!0);case 31:case"end":return e.stop()}var j}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(e,t,n,a){var s=e;if(!e.length)return s;var r=g(a);return s=s.filter((function(e){var n=!t.summonsRemaining||Number(e.summonsRemaining)>=Number(t.summonsRemaining),a=!t.maxSummons||Number(e.maxSummons)>=Number(t.maxSummons),s=!t.minGen||""===t.minGen||Number(e.generation)>=Number(t.minGen),i=!t.maxGen||""===t.maxGen||Number(e.generation)<=Number(t.maxGen),c=t.includeSummonClass||e.mainClass!==r,o=!t.classMatch||e.mainClassGenes[0]===e.mainClassGenes[1],l=!t.subclassMatch||e.subClassGenes[0]===e.subClassGenes[1],u=!t.professionMatch||e.professionGenes[0]===e.professionGenes[1];return a&&n&&s&&i&&c&&o&&l&&u})),"probability"===n?s.sort((function(e,t){return e.targetProbability>t.targetProbability?-1:e.targetProbability<t.targetProbability?1:0})):s.sort((function(e,t){if("price"===n){var a=e.price+("sale"===e.auctionType?0:e.summonCost),s=t.price+("sale"===t.auctionType?0:t.summonCost);return a>s?1:a<s?-1:0}return 0}))}(Q,R,G,A);return Object(ee.jsxs)(V.a,{maxWidth:"xl",children:[Object(ee.jsx)(De,{defaultSummonClass:A,isHeroLoaded:!!W,onHeroChange:oe,onToggle:function(){w("simple"===C?"advanced":"simple")},onSubmit:le}),Object(ee.jsx)(ke,{onFiltersChange:function(e){I(e)},onSortByChange:function(e){P(e)},onViewToggled:function(e){te(e?"front":"back")},visible:!!W}),Object(ee.jsx)(Ve,{heroCount:Q.length,loading:n,loaded:c,message:b}),Object(ee.jsxs)("div",{className:"hero-list",children:[Object(ee.jsx)(qe,{hero:W,view:$}),Object(ee.jsx)(ze,{heroes:ue,view:$,highlights:se})]})]})},Je=We;n(122);var Ue=function(){return Object(ee.jsxs)("div",{className:"App",children:[Object(ee.jsx)("header",{className:"App-header"}),Object(ee.jsx)("main",{className:"App-main",children:Object(ee.jsx)(Je,{})})]})},Xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};o.a.render(Object(ee.jsx)(i.a.StrictMode,{children:Object(ee.jsx)(Ue,{})}),document.getElementById("root")),Xe()}},[[123,1,2]]]);
//# sourceMappingURL=main.41e72339.chunk.js.map