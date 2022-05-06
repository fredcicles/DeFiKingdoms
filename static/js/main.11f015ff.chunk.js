(this["webpackJsonphero-analyzer"]=this["webpackJsonphero-analyzer"]||[]).push([[0],{102:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},118:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a,s,r=n(1),i=n.n(r),c=n(33),o=n.n(c),l=(n(102),n(28)),u=n(7),m=n(23),j=n.n(m),d=n(55),h=n(30),b=n(42),g=function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))},v=function(e){return"".concat(e[0].toLowerCase()).concat(e.slice(1))},f="https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",O=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n,s,r,i,c,o,l,u,m,d,v,O=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.length>0&&void 0!==O[0]?O[0]:"sale",n=O.length>1&&void 0!==O[1]?O[1]:"hmy",s=O.length>2&&void 0!==O[2]?O[2]:[],r=O.length>3&&void 0!==O[3]?O[3]:"",i=O.length>4&&void 0!==O[4]?O[4]:50,c=O.length>5&&void 0!==O[5]?O[5]:0,console.log("Retrieving hero listings ".concat(c+1," - ").concat(c+i," from the Tavern")),o={headers:{"Content-Type":"application/json"}},l=new b.GraphQLClient(f,o),u="".concat(t,'Price_not: null\n                network: "').concat(n,'"'),s.length&&(u="".concat(u,"\n    mainClass_in: [").concat(s.map((function(e){return'"'.concat(g(e),'"')})),"]")),r&&(u="".concat(u,'\n    profession: "').concat(r,'"')),m="price: ".concat(t,"Price"),d=Object(b.gql)(a||(a=Object(h.a)(["\n\t{\n    heroes(\n      first: ","\n      skip: ","\n      where:{\n        ","\n      }\n    )\n    {\n      id\n      owner{\n        name\n      }\n      originRealm\n      network\n      firstName\n      lastName\n      rarity\n      gender\n      generation\n      mainClass\n      subClass\n      level\n      profession\n      fishing\n      foraging\n      gardening\n      mining\n  \n      stamina\n  \n      summonsRemaining\n      maxSummons\n      summons\n      \n      active1\n      active2\n      passive1\n      passive2\n      statBoost1\n      statBoost2\n      statsUnknown1\n      statsUnknown2\n      element\n  \n      strength\n      agility\n      endurance\n      wisdom\n      dexterity\n      vitality\n      intelligence\n      luck\n\n      ","\n      status\n      hpFullAt\n      mpFullAt\n      statGenesRaw: statGenes\n    }\n  }"])),i,c,u,m),e.next=16,l.request(d);case 16:return v=e.sent,console.log("".concat(v.heroes.length," hero listings retrieved from the Tavern")),e.abrupt("return",v);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=[{generation:0,baseCost:6,increment:2,maxCost:30},{generation:1,baseCost:16,increment:2,maxCost:34},{generation:2,baseCost:26,increment:2,maxCost:42},{generation:3,baseCost:36,increment:2,maxCost:50},{generation:4,baseCost:46,increment:2,maxCost:58},{generation:5,baseCost:56,increment:2,maxCost:66},{generation:6,baseCost:66,increment:2,maxCost:74},{generation:7,baseCost:76,increment:2,maxCost:82},{generation:8,baseCost:86,increment:2,maxCost:90},{generation:9,baseCost:96,increment:2,maxCost:98},{generation:10,baseCost:106,increment:2,maxCost:106}],p=function(e){var t=e.generation,n=e.summons,a=e.maxSummons;if(t<0||t>10)return"?";var s=x[t];return n>=a?s.maxCost:s.baseCost+n*s.increment},C=n(14),N=n(83),y=[{classes:["warrior","knight"],mutation:"paladin"},{classes:["thief","archer"],mutation:"darkKnight"},{classes:["priest","wizard"],mutation:"summoner"},{classes:["monk","pirate"],mutation:"ninja"},{classes:["seer","berserker"],mutation:"shapeshifter"},{classes:["paladin","darkKnight"],mutation:"dragoon"},{classes:["summoner","ninja"],mutation:"sage"},{classes:["dragoon","sage"],mutation:"dreadKnight"}],w=[.75,.1875,.046875,.015625],S={basic:.25,advanced:.25,elite:.125,exalted:.125},k=function(e){return P(e.map((function(e,t){return{name:e,value:w[t]}})))},P=function(e){return e.reduce((function(e,t,n){var a=e.find((function(e){return e.name===t.name}));return a?(a.value+=t.value,e):[].concat(Object(C.a)(e),[t])}),[])},T=function(e,t){var n=G(e.name,t.name);if(n){var a=S[Object(N.getHeroTier)(e.name)];return{name:n.mutation,value:e.value*t.value*a}}return null},G=function(e,t){return y.find((function(n){return e!==t&&n.classes.includes(e)&&n.classes.includes(t)}))},B=function(e){return e.forEach((function(e){return e.value=e.value/2}))},I=function(e,t){var n={hero1:k(e),hero2:k(t)};return n.mutations=function(e,t){for(var n=[],a=0;a<e.length;a++)for(var s=0;s<t.length;s++){var r=T(e[a],t[s]);if(r){n.push(r),e[a].value-=r.value,t[s].value-=r.value;break}}return n}(n.hero1,n.hero2),B(n.hero1),B(n.hero2),function(e){return P(e.hero1.concat(e.hero2,e.mutations)).sort((function(e,t){return e.value>t.value?-1:e.value<t.value?1:0}))}(n)},R=function(e,t,n){return I(e,t).find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))},F=function(e,t,n){var a=[t];if(e===t)return a;var s=y.find((function(e){return e.mutation===t}));if(s){var r=s.classes.find((function(t){return t===e})),i=s.classes.find((function(t){return t!==e}));r&&a.push(i)}return a},A=function(e){return y.find((function(t){return t.classes.includes(e)})).mutation},L=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",n=new b.GraphQLClient("https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",{headers:{"Content-Type":"application/json"}}),a=Object(b.gql)(s||(s=Object(h.a)(["\n\t{\n\t\theroes( \n\t\t\torderBy: numberId\n\t\t\torderDirection: asc\n\t\t\twhere: \n\t\t\t{\n\t\t\t\tid: ","\n\t\t   \t}\n\t\t)\n\t\t{\n\t\t\tid\n\t\t\towner{\n\t\t\t  name\n\t\t\t}\n\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\toriginRealm\n\t\t\tnetwork\n\t\t\trarity\n\t\t\tgender\n\t\t\tgeneration\n\t\t\tmainClass\n\t\t\tsubClass\n\t\t\tlevel\n\t\t\tprofession\n\t\t\tfishing\n\t\t\tforaging\n\t\t\tgardening\n\t\t\tmining\n\t\t\n\t\t\tstamina\n\t\t\n\t\t\tsummonsRemaining\n\t\t\tmaxSummons\n\t\t\tsummons\n\t\t\t\n\t\t\tactive1\n\t\t\tactive2\n\t\t\tpassive1\n\t\t\tpassive2\n\t\t\tstatBoost1\n\t\t\tstatBoost2\n\t\t\tstatsUnknown1\n\t\t\tstatsUnknown2\n\t\t\telement\n\t\t\n\t\t\tstrength\n\t\t\tagility\n\t\t\tendurance\n\t\t\twisdom\n\t\t\tdexterity\n\t\t\tvitality\n\t\t\tintelligence\n\t\t\tluck\n\t  \n\t\t\tstatus\n\t\t\thpFullAt\n\t\t\tmpFullAt\n\t\t\tstatGenesRaw: statGenes\n\t\t}\n\t}"])),t),e.next=5,n.request(a);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:return n=e.sent,(a=Object(d.decodeRecessiveGenesAndNormalize)(n.heroes)[0]).displayId=13===a.id.length?Number(a.id.slice(1)).toString():a.id,a.summonCost=p(a),a.mutationClass=A(v(a.mainClass)),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K={id:"SER",name:"Serendale"},D={id:"CRY",name:"Crystalvale"},z=n(172),M=n(180),H=n(84),q={warrior:"Warrior",knight:"Knight",thief:"Thief",archer:"Archer",priest:"Priest",wizard:"Wizard",monk:"Monk",pirate:"Pirate",seer:"Seer",berserker:"Berserker",paladin:"Paladin",darkKnight:"DarkKnight",summoner:"Summoner",ninja:"Ninja",shapeshifter:"Shapeshifter",dragoon:"Dragoon",sage:"Sage",dreadKnight:"DreadKnight"},V=["warrior","knight","thief","archer","priest","wizard","monk","pirate","seer","berserker"],W=["paladin","darkKnight","summoner","ninja","shapeshifter"],J=["dragoon","sage"],U=["dreadKnight"],X=["D","R1","R2","R3"],Q=0,_=2,Y=n(0),Z={mining:"Mining",foraging:"Foraging",gardening:"Gardening",fishing:"Fishing"},$=function(e){var t=e.className,n=e.genes,a=e.heroid,s=e.highlighted,r=e.title,i=e.type;return Object(Y.jsxs)("div",{className:"hero-snapshot-genes".concat(t?" ".concat(t):""),children:[Object(Y.jsx)("div",{className:"title",children:r}),n.map((function(e,t){var n=i===Q?q[e]:i===_?Z[e]:e;return n||(n=e),Object(Y.jsxs)("div",{className:"gene",children:[Object(Y.jsxs)("div",{className:"label",children:[X[t],":"]}),Object(Y.jsx)("div",{className:"value".concat(s&&s.includes(e)?" highlighted":""),children:n})]},"".concat(a,"-").concat(X[t]))}))]})};$.defaultProps={type:0};var ee=$,te=function(e){var t=e.boldIfNot,n=e.value,a="value";return t&&!n.toString().toLowerCase().includes(t)&&(a+=" highlighted"),Object(Y.jsx)("div",{className:"gene",children:Object(Y.jsx)("div",{className:a,children:n})})},ne=function(e){var t=e.className,n=e.genes;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)("div",{className:"hero-snapshot-genes".concat(t?" ".concat(t):""),children:[Object(Y.jsx)("div",{className:"title",children:"Active"}),Object(Y.jsx)(te,{value:n.active1,boldIfNot:"basic"}),Object(Y.jsx)(te,{value:n.active2,boldIfNot:"basic"})]}),Object(Y.jsxs)("div",{className:"hero-snapshot-genes".concat(t?" ".concat(t):""),children:[Object(Y.jsx)("div",{className:"title",children:"Passive"}),Object(Y.jsx)(te,{value:n.passive1,boldIfNot:"basic"}),Object(Y.jsx)(te,{value:n.passive2,boldIfNot:"basic"})]})]})};ne.defaultProps={};var ae=ne,se=function(e){var t=e.highlights,n=e.hero;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)("div",{className:"hero-snapshot-genes-section",children:[Object(Y.jsx)(ee,{genes:n.mainClassGenes,heroid:n.id,title:"Class",highlighted:t.mainClass}),Object(Y.jsx)(ee,{genes:n.subClassGenes,heroid:n.id,title:"SubClass"}),Object(Y.jsx)(ee,{genes:n.professionGenes,heroid:n.id,title:"Profession",type:_,highlighted:t.profession})]}),Object(Y.jsx)("div",{className:"hero-snapshot-stat-genes-section",children:Object(Y.jsx)(ae,{genes:n})})]})};se.defaultProps={highlights:{}};var re=se,ie=function(e){var t=e.children,n=e.className,a=e.title;return Object(Y.jsxs)("div",{className:"hero-stat-section ".concat(n),children:[Object(Y.jsx)("div",{className:"title",children:a}),Object(Y.jsx)("div",{className:"stat-group",children:t})]})};ie.defaultProps={className:"hero-stat-section"};var ce=ie,oe=function(e){var t=e.name,n=e.value,a=e.main,s=e.minor,r="name".concat(a&&s?" main-minor":a?" main":s?" minor":"");return Object(Y.jsxs)("div",{className:"hero-stat",children:[Object(Y.jsx)("div",{className:r,children:t}),Object(Y.jsx)("div",{className:"value",children:n})]})},le=function(e){var t=e.hero;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(ce,{title:"Stats",children:[Object(Y.jsx)(oe,{name:"STR",value:t.strength,main:"STR"===t.statBoost1,minor:"STR"===t.statBoost2}),Object(Y.jsx)(oe,{name:"AGI",value:t.agility,main:"AGI"===t.statBoost1,minor:"AGI"===t.statBoost2}),Object(Y.jsx)(oe,{name:"END",value:t.endurance,main:"END"===t.statBoost1,minor:"END"===t.statBoost2}),Object(Y.jsx)(oe,{name:"WIS",value:t.wisdom,main:"WIS"===t.statBoost1,minor:"WIS"===t.statBoost2}),Object(Y.jsx)(oe,{name:"DEX",value:t.dexterity,main:"DEX"===t.statBoost1,minor:"DEX"===t.statBoost2}),Object(Y.jsx)(oe,{name:"VIT",value:t.vitality,main:"VIT"===t.statBoost1,minor:"VIT"===t.statBoost2}),Object(Y.jsx)(oe,{name:"INT",value:t.intelligence,main:"INT"===t.statBoost1,minor:"INT"===t.statBoost2}),Object(Y.jsx)(oe,{name:"LCK",value:t.luck,main:"LCK"===t.statBoost1,minor:"LCK"===t.statBoost2})]}),Object(Y.jsxs)(ce,{className:"profession-stat-section",title:"Professions",children:[Object(Y.jsx)(oe,{name:"Mining",value:t.mining,main:"mining"===t.profession}),Object(Y.jsx)(oe,{name:"Fishing",value:t.fishing,main:"fishing"===t.profession}),Object(Y.jsx)(oe,{name:"Gardening",value:t.gardening,main:"gardening"===t.profession}),Object(Y.jsx)(oe,{name:"Foraging",value:t.foraging,main:"foraging"===t.profession})]})]})},ue=(n(113),["common","uncommon","rare","legendary","mythic"]),me=function(){return Object(Y.jsx)("img",{src:"/jewel50.png",className:"jewel-icon",alt:"Jewel"})},je=function(){return Object(Y.jsx)("img",{src:"/crystal100.png",className:"jewel-icon",alt:"Jewel"})},de=function(e){var t=e.label,n=e.showIcon,a=e.network,s=e.value,r="hmy"===a?Object(Y.jsx)(me,{}):Object(Y.jsx)(je,{});return Object(Y.jsxs)("div",{className:"price-group",children:[Object(Y.jsxs)("div",{className:"price-value",children:[s,n&&r]}),Object(Y.jsx)("div",{className:"price-label",children:t})]})},he=function(e){var t=e.highlights,n=e.hero,a=e.title,s=e.view,r="Gen ".concat(n.generation," | ").concat(H.Rarity[n.rarity]," | Level ").concat(n.level),i="".concat(g(n.mainClass)," / ").concat(g(n.subClass)," | ").concat(g(n.profession)),c=n.originRealm===K.id?Object(Y.jsx)(me,{}):Object(Y.jsx)(je,{});return Object(Y.jsxs)("div",{className:"hero-snapshot ".concat(ue[n.rarity]),children:[Object(Y.jsx)("div",{className:"hero-snapshot-title",children:a}),Object(Y.jsxs)("div",{className:"hero-snapshot-name",children:["Hero ",c," #",n.displayId]}),Object(Y.jsx)("div",{className:"hero-snapshot-grc",children:r}),Object(Y.jsx)("div",{className:"hero-snapshot-grc",children:i}),"front"===s&&Object(Y.jsx)(le,{hero:n}),"back"===s&&Object(Y.jsx)(re,{hero:n,highlights:t}),Object(Y.jsxs)("div",{className:"hero-snapshot-pricing",children:[n.price&&Object(Y.jsx)(de,{label:Object(Y.jsxs)(Y.Fragment,{children:["".concat("sale"===n.auctionType?"Purchase":"Rental"),Object(Y.jsx)("br",{}),"Price"]}),value:n.price,showIcon:!0,network:n.network}),Object(Y.jsx)(de,{label:Object(Y.jsxs)(Y.Fragment,{children:["Summon",Object(Y.jsx)("br",{}),"Cost"]}),value:n.summonCost,showIcon:!0,network:n.network}),"assisting"===n.auctionType&&Object(Y.jsx)(de,{label:Object(Y.jsxs)(Y.Fragment,{children:["Total",Object(Y.jsx)("br",{}),"Cost"]}),value:Number(n.price)+Number(n.summonCost),showIcon:!0,network:n.network}),Object(Y.jsx)(de,{label:0===n.generation?Object(Y.jsxs)(Y.Fragment,{children:["Total",Object(Y.jsx)("br",{}),"Summons"]}):Object(Y.jsxs)(Y.Fragment,{children:["Summons",Object(Y.jsx)("br",{}),"Remaining"]}),value:"".concat(11===n.maxSummons?n.summons:n.summonsRemaining,"/").concat(11===n.maxSummons?"\u221e":n.maxSummons)})]}),Object(Y.jsxs)("div",{className:"hero-snapshot-owner",children:["Owned by: ",n.owner?n.owner.name:"UNAVAILABLE"]})]})};he.defaultProps={view:"front"};var be=he,ge=be,ve=n(175),fe=n(176),Oe=n(174),xe=n(170),pe=n(181),Ce=n(171),Ne=(n(114),function(e){var t=e.onFiltersChange,n=e.onSortByChange,a=e.onViewToggled,s=e.visible,i=Object(r.useState)("probability"),c=Object(u.a)(i,2),o=c[0],l=c[1],m=Object(r.useState)(""),j=Object(u.a)(m,2),d=j[0],h=j[1],b=Object(r.useState)(""),g=Object(u.a)(b,2),v=g[0],f=g[1],O=Object(r.useState)("0"),x=Object(u.a)(O,2),p=x[0],C=x[1],N=Object(r.useState)("14"),y=Object(u.a)(N,2),w=y[0],S=y[1],k=Object(r.useState)(!1),P=Object(u.a)(k,2),T=P[0],G=P[1],B=function(e){var n=e.target,a=d,s=v,r=p,i=w,c=T;"summonsRemaining"===n.name&&(a=n.value,h(n.value)),"maxSummons"===n.name&&(s=n.value,f(n.value)),"minGen"===n.name&&(r=n.value,C(n.value)),"maxGen"===n.name&&(i=n.value,S(n.value)),"includeSummonClass"===n.name&&(c=Boolean(n.value),G(n.value)),t({summonsRemaining:a,maxSummons:s,minGen:r,maxGen:i,includeSummonClass:c})};return s?Object(Y.jsxs)(fe.a,{container:!0,className:"sort-filter",justifyContent:"center",children:[Object(Y.jsxs)(fe.a,{item:!0,className:"section",children:[Object(Y.jsx)(pe.a,{defaultChecked:!1,onChange:function(e){a(e.target.checked)}}),"Flip Cards"]}),Object(Y.jsxs)(fe.a,{item:!0,className:"section",children:[Object(Y.jsx)("div",{className:"sort-label",children:"Sort By:"}),Object(Y.jsx)("div",{className:"sort-value",children:Object(Y.jsxs)(xe.a,{label:"Sort by",name:"sort-by",className:"sort-by-selecter",value:o,variant:"standard",onChange:function(e){var t=e.target;l(t.value),n(t.value)},children:[Object(Y.jsx)(Oe.a,{value:"probability",children:"Probability"},"probability"),Object(Y.jsx)(Oe.a,{value:"price",children:"Price"},"price")]})})]}),Object(Y.jsxs)(fe.a,{item:!0,className:"section",children:[Object(Y.jsx)("div",{className:"filter-label",children:"Filters:"}),Object(Y.jsxs)("div",{className:"filter-selections",children:["Summons",Object(Y.jsxs)("div",{className:"filter-selecters",children:[Object(Y.jsxs)("div",{className:"filter-selecter",children:["Remaining",Object(Y.jsx)(Ce.a,{name:"summonsRemaining",value:d,variant:"standard",onChange:B,type:"number"})]}),Object(Y.jsxs)("div",{className:"filter-selecter",children:["Max",Object(Y.jsx)(Ce.a,{name:"maxSummons",value:v,variant:"standard",onChange:B,type:"number"})]})]})]}),Object(Y.jsxs)("div",{className:"filter-selections",children:["Generation",Object(Y.jsxs)("div",{className:"filter-selecters",children:[Object(Y.jsxs)("div",{className:"filter-selecter",children:["Min",Object(Y.jsx)(Ce.a,{name:"minGen",value:p,variant:"standard",onChange:B,type:"number"})]}),Object(Y.jsxs)("div",{className:"filter-selecter",children:["Max",Object(Y.jsx)(Ce.a,{name:"maxGen",value:w,variant:"standard",onChange:B,type:"number"})]})]})]}),Object(Y.jsxs)("div",{className:"include-summon-class",children:[Object(Y.jsx)("div",{children:"Include Summon Class"}),Object(Y.jsx)(ve.a,{name:"includeSummonClass",value:T,onChange:B})]})]})]}):null});Ne.defaultProps={onFiltersChange:function(){},onSortByChange:function(){},onViewToggled:function(){},visible:!1};var ye=Ne,we=n(178),Se=n(182),ke=n(86),Pe=n.n(ke),Te=(n(118),function(){return Object(Y.jsx)("img",{src:"/jewel50.png",className:"jewel-icon",alt:"Jewel"})}),Ge=function(){return Object(Y.jsx)("img",{src:"/crystal100.png",className:"jewel-icon",alt:"Jewel"})},Be=function(e){return e.map((function(e){var t="string"===typeof e?e:e.label,n="string"===typeof e?e:e.value;return Object(Y.jsx)(Oe.a,{value:n,children:t},n)}))},Ie=Be([{label:"sale",value:"sale"},{label:"rent",value:"assisting"}]),Re=Be([{label:"Serendale",value:"hmy"},{label:"Crystalvale",value:"dfk"}]),Fe=Be([{label:"any profession",value:"all"}].concat(Object(C.a)(["mining","gardening","foraging","fishing"]))),Ae=function(e){var t=e.defaultSummonClass,n=e.isHeroLoaded,a=e.onHeroChange,s=e.onSubmit,i=(e.onToggle,Object(r.useState)("")),c=Object(u.a)(i,2),o=c[0],l=c[1],m=Object(r.useState)("all"),j=Object(u.a)(m,2),d=j[0],h=j[1],b=Object(r.useState)("assisting"),g=Object(u.a)(b,2),v=g[0],f=g[1],O=Object(r.useState)("hmy"),x=Object(u.a)(O,2),p=x[0],N=x[1],y=Object(r.useState)(K.id),w=Object(u.a)(y,2),S=w[0],k=w[1],P=Object(r.useState)(""),T=Object(u.a)(P,2),G=T[0],B=T[1],I=Object(r.useState)([]),R=Object(u.a)(I,2),F=R[0],A=R[1];Object(r.useEffect)((function(){var e=V.sort().map((function(e){return Object(Y.jsx)(Oe.a,{value:e,children:q[e]},e)})),t=W.sort().map((function(e){return Object(Y.jsx)(Oe.a,{value:e,children:q[e]},e)})),n=J.sort().map((function(e){return Object(Y.jsx)(Oe.a,{value:e,children:q[e]},e)})),a=U.sort().map((function(e){return Object(Y.jsx)(Oe.a,{value:e,children:q[e]},e)})),s=[Object(Y.jsx)(Se.a,{children:"Basic Classes"},"basic")].concat(Object(C.a)(e),[Object(Y.jsx)(Se.a,{children:"Advanced Classes"},"advanced")],Object(C.a)(t),[Object(Y.jsx)(Se.a,{children:"Elite Classes"},"elite")],Object(C.a)(n),[Object(Y.jsx)(Se.a,{children:"Exalted Classes"},"exalted")],Object(C.a)(a));A(s)}),[]),Object(r.useEffect)((function(){t&&l(t)}),[t]);var L=function(e){var t=e.target;a&&a(t.value,S)},E=n&&o;return Object(Y.jsxs)(fe.a,{container:!0,className:"search-form-simple",justifyContent:"center",spacing:0,children:[Object(Y.jsxs)(fe.a,{item:!0,children:["Find me heroes for",Object(Y.jsx)(xe.a,{label:"Auction Type",name:"auction-type",className:"auction-type-selecter",value:v,variant:"standard",onChange:function(e){var t=e.target;f(t.value)},children:Ie})]}),Object(Y.jsxs)(fe.a,{item:!0,children:["in the",Object(Y.jsx)(xe.a,{name:"network",className:"network-selecter",value:p,variant:"standard",onChange:function(e){var t=e.target;N(t.value)},children:Re}),"tavern,"]}),Object(Y.jsxs)(fe.a,{item:!0,className:"hero-container",children:["who can match with hero",Object(Y.jsxs)(xe.a,{className:"origin-realm-selecter",name:"origin-realm",value:S,variant:"standard",onChange:function(e){var t=e.target;k(t.value),G&&a&&a(G,t.value)},children:[Object(Y.jsx)(Oe.a,{value:K.id,children:Object(Y.jsx)(Te,{})}),Object(Y.jsx)(Oe.a,{value:D.id,children:Object(Y.jsx)(Ge,{})})]}),"#",Object(Y.jsx)(Ce.a,{className:"hero-id-selecter",placeholder:"hero id",name:"hero-id",value:G,variant:"standard",onChange:function(e){B(e.target.value)},onBlur:L,onKeyPress:function(e){"Enter"===e.key&&L(e)}})]}),Object(Y.jsxs)(fe.a,{item:!0,children:["to summon a",Object(Y.jsx)(xe.a,{label:"Class to be summoned",name:"summoned-class",className:"summoned-class-selecter",value:o,variant:"standard",onChange:function(e){var t=e.target;l(t.value)},children:F})]}),Object(Y.jsxs)(fe.a,{item:!0,children:["for",Object(Y.jsx)(xe.a,{label:"Profession to be summoned",name:"summoned-profession",className:"summoned-profession-selecter",value:d,variant:"standard",onChange:function(e){var t=e.target;h(t.value)},children:Fe})]}),Object(Y.jsx)(fe.a,{item:!0,children:Object(Y.jsx)(we.a,{variant:"contained",onClick:function(){s&&s({auctionType:v,heroId:G,network:p,originRealm:S,summonClass:o,summonProfession:"all"===d?"":d})},disabled:!E,children:Object(Y.jsx)(Pe.a,{})})})]})};Ae.defaultProps={defaultSummonClass:"",isHeroLoaded:!1,onToggle:function(){}};var Le=Ae,Ee=function(e){var t=e.highlights,n=e.heroes,a=e.view,s=function(e){return"".concat((100*e.targetProbability).toFixed(2),"% probability")};return n.length?n.map((function(e){return Object(Y.jsx)(be,{hero:e,title:s(e),view:a,highlights:t},e.id)})):null},Ke=(n(121),["Now there is an interesting fellow.","Oh, the Tavern has Perch Porter on draft.","Chatting with Agent Selina.  She is such a sweetheart!","Are those wings on her back, or she just harpy to see me?","Woah, big guy!  Careful with those horns!"]),De=function(e){var t=e.hero,n=e.view;return t?Object(Y.jsx)("div",{className:"main-hero",children:Object(Y.jsx)(ge,{hero:t,title:"Main Hero",view:n})}):null},ze=function(e){var t=e.heroCount,n=e.loaded,a=e.loading,s=e.message,r=a?s:n&&!t?"No Heroes Found":null;return r?Object(Y.jsx)(z.a,{variant:"outlined",severity:"success",className:"loading-message",children:r}):null},Me=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!1),i=Object(u.a)(s,2),c=i[0],o=i[1],m=Object(r.useState)(""),h=Object(u.a)(m,2),b=h[0],f=h[1],x=Object(r.useState)("simple"),C=Object(u.a)(x,2),N=C[0],y=C[1],w=Object(r.useState)("probability"),S=Object(u.a)(w,2),k=S[0],P=S[1],T=Object(r.useState)({}),G=Object(u.a)(T,2),B=G[0],I=G[1],A=Object(r.useState)(""),L=Object(u.a)(A,2),D=L[0],z=L[1],H=Object(r.useState)(),q=Object(u.a)(H,2),V=q[0],W=q[1],J=Object(r.useState)([]),U=Object(u.a)(J,2),X=U[0],Q=U[1],_=Object(r.useState)("back"),Z=Object(u.a)(_,2),$=Z[0],ee=Z[1],te=Object(r.useState)(),ne=Object(u.a)(te,2),ae=ne[0],se=ne[1],re=function(e){return new Promise((function(t){return setTimeout(t,e)}))},ie=function(){var e=Math.floor(Math.random()*Ke.length);f(Ke[e])},ce=function(){var e=Object(l.a)(j.a.mark((function e(t,n){var a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=n===K.id?t:"".concat("1000000000000".slice(0,13-t.length)).concat(t))||V&&V.id===a){e.next=9;break}return Q([]),W(),e.next=6,E(a);case 6:s=e.sent,W(s),z(s.mutationClass);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),oe=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,s,r,i,c,l,u,m,h,b,g,f;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q([]),a(!0),ie(),n=[],s=50,r=0,i=!1,c=F(v(V.mainClass),t.summonClass),se({mainClass:c,profession:[t.summonProfession]});case 9:if(i){e.next=29;break}return e.next=12,O(t.auctionType,t.network,c,t.summonProfession,s,r);case 12:for(l=e.sent,u=Object(d.decodeRecessiveGenesAndNormalize)(l.heroes),m=0;m<u.length;m++)(h=u[m]).displayId=13===h.id.length?Number(h.id.slice(1)).toString():h.id,h.auctionType=t.auctionType,h.summonCost=p(h),h.price=(j=h.price,Number(j)/1e18),b=R(V.mainClassGenes,h.mainClassGenes,t.summonClass),t.summonProfession?(g=R(V.professionGenes,h.professionGenes,t.summonProfession),h.targetProbability=b&&g?b.value*g.value:0):h.targetProbability=b?b.value:0;return f=u.filter((function(e){return e.targetProbability>0})),console.log("".concat(n.length," existing heroes")),console.log("adding ".concat(f.length," new heroes")),n=n.concat(f),console.log("now ".concat(n.length," total heroes")),Q(n),ie(),r+=s,i=0===l.length,e.next=26,re(1e3);case 26:i=r>200,e.next=9;break;case 29:a(!1),o(!0);case 31:case"end":return e.stop()}var j}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(e,t,n,a){var s=e;if(!e.length)return s;var r=g(a);return s=s.filter((function(e){var n=!t.summonsRemaining||Number(e.summonsRemaining)>=Number(t.summonsRemaining),a=!t.maxSummons||Number(e.maxSummons)>=Number(t.maxSummons),s=!t.minGen||""===t.minGen||Number(e.generation)>=Number(t.minGen),i=!t.maxGen||""===t.maxGen||Number(e.generation)<=Number(t.maxGen),c=t.includeSummonClass||e.mainClass!==r;return a&&n&&s&&i&&c})),"probability"===n?s.sort((function(e,t){return e.targetProbability>t.targetProbability?-1:e.targetProbability<t.targetProbability?1:0})):s.sort((function(e,t){if("price"===n){var a=e.price+("sale"===e.auctionType?0:e.summonCost),s=t.price+("sale"===t.auctionType?0:t.summonCost);return a>s?1:a<s?-1:0}return 0}))}(X,B,k,D);return Object(Y.jsxs)(M.a,{maxWidth:"xl",children:[Object(Y.jsx)(Le,{defaultSummonClass:D,isHeroLoaded:!!V,onHeroChange:ce,onToggle:function(){y("simple"===N?"advanced":"simple")},onSubmit:oe}),Object(Y.jsx)(ye,{onFiltersChange:function(e){I(e)},onSortByChange:function(e){P(e)},onViewToggled:function(e){ee(e?"front":"back")},visible:!!V}),Object(Y.jsx)(ze,{heroCount:X.length,loading:n,loaded:c,message:b}),Object(Y.jsxs)("div",{className:"hero-list",children:[Object(Y.jsx)(De,{hero:V,view:$}),Object(Y.jsx)(Ee,{heroes:le,view:$,highlights:ae})]})]})},He=Me;n(122);var qe=function(){return Object(Y.jsxs)("div",{className:"App",children:[Object(Y.jsx)("header",{className:"App-header"}),Object(Y.jsx)("main",{className:"App-main",children:Object(Y.jsx)(He,{})})]})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};o.a.render(Object(Y.jsx)(i.a.StrictMode,{children:Object(Y.jsx)(qe,{})}),document.getElementById("root")),Ve()}},[[123,1,2]]]);
//# sourceMappingURL=main.11f015ff.chunk.js.map