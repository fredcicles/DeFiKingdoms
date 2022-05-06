(this["webpackJsonphero-analyzer"]=this["webpackJsonphero-analyzer"]||[]).push([[0],{102:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},118:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var a,s,r=n(1),i=n.n(r),c=n(33),o=n.n(c),l=(n(102),n(28)),u=n(7),m=n(23),j=n.n(m),d=n(55),h=n(30),b=n(42),g=function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))},v=function(e){return"".concat(e[0].toLowerCase()).concat(e.slice(1))},f={id:"SER",name:"Serendale"},O={id:"CRY",name:"Crystalvale"},x={id:"hmy",name:"Harmony"},p={id:"dfk",name:"DFK Chain"},C="https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",N=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n,s,r,i,c,o,l,u,m,d,v,f=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.length>0&&void 0!==f[0]?f[0]:"sale",n=f.length>1&&void 0!==f[1]?f[1]:x.id,s=f.length>2&&void 0!==f[2]?f[2]:[],r=f.length>3&&void 0!==f[3]?f[3]:"",i=f.length>4&&void 0!==f[4]?f[4]:50,c=f.length>5&&void 0!==f[5]?f[5]:0,console.log("Retrieving hero listings ".concat(c+1," - ").concat(c+i," from the Tavern")),o={headers:{"Content-Type":"application/json"}},l=new b.GraphQLClient(C,o),u="".concat(t,'Price_not: null\n                network: "').concat(n,'"'),s.length&&(u="".concat(u,"\n    mainClass_in: [").concat(s.map((function(e){return'"'.concat(g(e),'"')})),"]")),r&&(u="".concat(u,'\n    profession: "').concat(r,'"')),m="price: ".concat(t,"Price"),d=Object(b.gql)(a||(a=Object(h.a)(["\n\t{\n    heroes(\n      first: ","\n      skip: ","\n      where:{\n        ","\n      }\n    )\n    {\n      id\n      owner{\n        name\n      }\n      originRealm\n      network\n      firstName\n      lastName\n      rarity\n      gender\n      generation\n      mainClass\n      subClass\n      level\n      profession\n      fishing\n      foraging\n      gardening\n      mining\n  \n      stamina\n  \n      summonsRemaining\n      maxSummons\n      summons\n      \n      active1\n      active2\n      passive1\n      passive2\n      statBoost1\n      statBoost2\n      statsUnknown1\n      statsUnknown2\n      element\n  \n      strength\n      agility\n      endurance\n      wisdom\n      dexterity\n      vitality\n      intelligence\n      luck\n\n      ","\n      status\n      hpFullAt\n      mpFullAt\n      statGenesRaw: statGenes\n    }\n  }"])),i,c,u,m),e.next=16,l.request(d);case 16:return v=e.sent,console.log("".concat(v.heroes.length," hero listings retrieved from the Tavern")),e.abrupt("return",v);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=[{generation:0,baseCost:6,increment:2,maxCost:30},{generation:1,baseCost:16,increment:2,maxCost:34},{generation:2,baseCost:26,increment:2,maxCost:42},{generation:3,baseCost:36,increment:2,maxCost:50},{generation:4,baseCost:46,increment:2,maxCost:58},{generation:5,baseCost:56,increment:2,maxCost:66},{generation:6,baseCost:66,increment:2,maxCost:74},{generation:7,baseCost:76,increment:2,maxCost:82},{generation:8,baseCost:86,increment:2,maxCost:90},{generation:9,baseCost:96,increment:2,maxCost:98},{generation:10,baseCost:106,increment:2,maxCost:106}],y=function(e){var t=e.generation,n=e.summons,a=e.maxSummons;if(t<0||t>10)return"?";var s=w[t];return n>=a?s.maxCost:s.baseCost+n*s.increment},S=n(14),k=n(83),P=[{classes:["warrior","knight"],mutation:"paladin"},{classes:["thief","archer"],mutation:"darkKnight"},{classes:["priest","wizard"],mutation:"summoner"},{classes:["monk","pirate"],mutation:"ninja"},{classes:["seer","berserker"],mutation:"shapeshifter"},{classes:["paladin","darkKnight"],mutation:"dragoon"},{classes:["summoner","ninja"],mutation:"sage"},{classes:["dragoon","sage"],mutation:"dreadKnight"}],T=[.75,.1875,.046875,.015625],G={basic:.25,advanced:.25,elite:.125,exalted:.125},B=function(e){return I(e.map((function(e,t){return{name:e,value:T[t]}})))},I=function(e){return e.reduce((function(e,t,n){var a=e.find((function(e){return e.name===t.name}));return a?(a.value+=t.value,e):[].concat(Object(S.a)(e),[t])}),[])},R=function(e,t){var n=F(e.name,t.name);if(n){var a=G[Object(k.getHeroTier)(e.name)];return{name:n.mutation,value:e.value*t.value*a}}return null},F=function(e,t){return P.find((function(n){return e!==t&&n.classes.includes(e)&&n.classes.includes(t)}))},A=function(e){return e.forEach((function(e){return e.value=e.value/2}))},L=function(e,t){var n={hero1:B(e),hero2:B(t)};return n.mutations=function(e,t){for(var n=[],a=0;a<e.length;a++)for(var s=0;s<t.length;s++){var r=R(e[a],t[s]);if(r){n.push(r),e[a].value-=r.value,t[s].value-=r.value;break}}return n}(n.hero1,n.hero2),A(n.hero1),A(n.hero2),function(e){return I(e.hero1.concat(e.hero2,e.mutations)).sort((function(e,t){return e.value>t.value?-1:e.value<t.value?1:0}))}(n)},E=function(e,t,n){return L(e,t).find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))},K=function(e,t,n){var a=[t];if(e===t)return a;var s=P.find((function(e){return e.mutation===t}));if(s){var r=s.classes.find((function(t){return t===e})),i=s.classes.find((function(t){return t!==e}));r&&a.push(i)}return a},D=function(e){return P.find((function(t){return t.classes.includes(e)})).mutation},z=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",n=new b.GraphQLClient("https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",{headers:{"Content-Type":"application/json"}}),a=Object(b.gql)(s||(s=Object(h.a)(["\n\t{\n\t\theroes( \n\t\t\torderBy: numberId\n\t\t\torderDirection: asc\n\t\t\twhere: \n\t\t\t{\n\t\t\t\tid: ","\n\t\t   \t}\n\t\t)\n\t\t{\n\t\t\tid\n\t\t\towner{\n\t\t\t  name\n\t\t\t}\n\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\toriginRealm\n\t\t\tnetwork\n\t\t\trarity\n\t\t\tgender\n\t\t\tgeneration\n\t\t\tmainClass\n\t\t\tsubClass\n\t\t\tlevel\n\t\t\tprofession\n\t\t\tfishing\n\t\t\tforaging\n\t\t\tgardening\n\t\t\tmining\n\t\t\n\t\t\tstamina\n\t\t\n\t\t\tsummonsRemaining\n\t\t\tmaxSummons\n\t\t\tsummons\n\t\t\t\n\t\t\tactive1\n\t\t\tactive2\n\t\t\tpassive1\n\t\t\tpassive2\n\t\t\tstatBoost1\n\t\t\tstatBoost2\n\t\t\tstatsUnknown1\n\t\t\tstatsUnknown2\n\t\t\telement\n\t\t\n\t\t\tstrength\n\t\t\tagility\n\t\t\tendurance\n\t\t\twisdom\n\t\t\tdexterity\n\t\t\tvitality\n\t\t\tintelligence\n\t\t\tluck\n\t  \n\t\t\tstatus\n\t\t\thpFullAt\n\t\t\tmpFullAt\n\t\t\tstatGenesRaw: statGenes\n\t\t}\n\t}"])),t),e.next=5,n.request(a);case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:return n=e.sent,(a=Object(d.decodeRecessiveGenesAndNormalize)(n.heroes)[0]).displayId=13===a.id.length?Number(a.id.slice(1)).toString():a.id,a.summonCost=y(a),a.mutationClass=D(v(a.mainClass)),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=n(172),q=n(180),V=n(84),W={warrior:"Warrior",knight:"Knight",thief:"Thief",archer:"Archer",priest:"Priest",wizard:"Wizard",monk:"Monk",pirate:"Pirate",seer:"Seer",berserker:"Berserker",paladin:"Paladin",darkKnight:"DarkKnight",summoner:"Summoner",ninja:"Ninja",shapeshifter:"Shapeshifter",dragoon:"Dragoon",sage:"Sage",dreadKnight:"DreadKnight"},J=["warrior","knight","thief","archer","priest","wizard","monk","pirate","seer","berserker"],U=["paladin","darkKnight","summoner","ninja","shapeshifter"],X=["dragoon","sage"],Q=["dreadKnight"],_=["D","R1","R2","R3"],Y=0,Z=2,$=n(0),ee={mining:"Mining",foraging:"Foraging",gardening:"Gardening",fishing:"Fishing"},te=function(e){var t=e.className,n=e.genes,a=e.heroid,s=e.highlighted,r=e.title,i=e.type;return Object($.jsxs)("div",{className:"hero-snapshot-genes".concat(t?" ".concat(t):""),children:[Object($.jsx)("div",{className:"title",children:r}),n.map((function(e,t){var n=i===Y?W[e]:i===Z?ee[e]:e;return n||(n=e),Object($.jsxs)("div",{className:"gene",children:[Object($.jsxs)("div",{className:"label",children:[_[t],":"]}),Object($.jsx)("div",{className:"value".concat(s&&s.includes(e)?" highlighted":""),children:n})]},"".concat(a,"-").concat(_[t]))}))]})};te.defaultProps={type:0};var ne=te,ae=function(e){var t=e.boldIfNot,n=e.value,a="value";return t&&!n.toString().toLowerCase().includes(t)&&(a+=" highlighted"),Object($.jsx)("div",{className:"gene",children:Object($.jsx)("div",{className:a,children:n})})},se=function(e){var t=e.className,n=e.genes;return Object($.jsxs)($.Fragment,{children:[Object($.jsxs)("div",{className:"hero-snapshot-genes".concat(t?" ".concat(t):""),children:[Object($.jsx)("div",{className:"title",children:"Active"}),Object($.jsx)(ae,{value:n.active1,boldIfNot:"basic"}),Object($.jsx)(ae,{value:n.active2,boldIfNot:"basic"})]}),Object($.jsxs)("div",{className:"hero-snapshot-genes".concat(t?" ".concat(t):""),children:[Object($.jsx)("div",{className:"title",children:"Passive"}),Object($.jsx)(ae,{value:n.passive1,boldIfNot:"basic"}),Object($.jsx)(ae,{value:n.passive2,boldIfNot:"basic"})]})]})};se.defaultProps={};var re=se,ie=function(e){var t=e.highlights,n=e.hero;return Object($.jsxs)($.Fragment,{children:[Object($.jsxs)("div",{className:"hero-snapshot-genes-section",children:[Object($.jsx)(ne,{genes:n.mainClassGenes,heroid:n.id,title:"Class",highlighted:t.mainClass}),Object($.jsx)(ne,{genes:n.subClassGenes,heroid:n.id,title:"SubClass"}),Object($.jsx)(ne,{genes:n.professionGenes,heroid:n.id,title:"Profession",type:Z,highlighted:t.profession})]}),Object($.jsx)("div",{className:"hero-snapshot-stat-genes-section",children:Object($.jsx)(re,{genes:n})})]})};ie.defaultProps={highlights:{}};var ce=ie,oe=function(e){var t=e.children,n=e.className,a=e.title;return Object($.jsxs)("div",{className:"hero-stat-section ".concat(n),children:[Object($.jsx)("div",{className:"title",children:a}),Object($.jsx)("div",{className:"stat-group",children:t})]})};oe.defaultProps={className:"hero-stat-section"};var le=oe,ue=function(e){var t=e.name,n=e.value,a=e.main,s=e.minor,r="name".concat(a&&s?" main-minor":a?" main":s?" minor":"");return Object($.jsxs)("div",{className:"hero-stat",children:[Object($.jsx)("div",{className:r,children:t}),Object($.jsx)("div",{className:"value",children:n})]})},me=function(e){var t=e.hero;return Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(le,{title:"Stats",children:[Object($.jsx)(ue,{name:"STR",value:t.strength,main:"STR"===t.statBoost1,minor:"STR"===t.statBoost2}),Object($.jsx)(ue,{name:"AGI",value:t.agility,main:"AGI"===t.statBoost1,minor:"AGI"===t.statBoost2}),Object($.jsx)(ue,{name:"END",value:t.endurance,main:"END"===t.statBoost1,minor:"END"===t.statBoost2}),Object($.jsx)(ue,{name:"WIS",value:t.wisdom,main:"WIS"===t.statBoost1,minor:"WIS"===t.statBoost2}),Object($.jsx)(ue,{name:"DEX",value:t.dexterity,main:"DEX"===t.statBoost1,minor:"DEX"===t.statBoost2}),Object($.jsx)(ue,{name:"VIT",value:t.vitality,main:"VIT"===t.statBoost1,minor:"VIT"===t.statBoost2}),Object($.jsx)(ue,{name:"INT",value:t.intelligence,main:"INT"===t.statBoost1,minor:"INT"===t.statBoost2}),Object($.jsx)(ue,{name:"LCK",value:t.luck,main:"LCK"===t.statBoost1,minor:"LCK"===t.statBoost2})]}),Object($.jsxs)(le,{className:"profession-stat-section",title:"Professions",children:[Object($.jsx)(ue,{name:"Mining",value:t.mining,main:"mining"===t.profession}),Object($.jsx)(ue,{name:"Fishing",value:t.fishing,main:"fishing"===t.profession}),Object($.jsx)(ue,{name:"Gardening",value:t.gardening,main:"gardening"===t.profession}),Object($.jsx)(ue,{name:"Foraging",value:t.foraging,main:"foraging"===t.profession})]})]})},je=(n(113),["common","uncommon","rare","legendary","mythic"]),de=function(){return Object($.jsx)("img",{src:"/jewel50.png",className:"jewel-icon",alt:"Jewel"})},he=function(){return Object($.jsx)("img",{src:"/crystal100.png",className:"jewel-icon",alt:"Jewel"})},be=function(e){var t=e.label,n=e.showIcon,a=e.network,s=e.value,r=a===x.id?Object($.jsx)(de,{}):Object($.jsx)(he,{});return Object($.jsxs)("div",{className:"price-group",children:[Object($.jsxs)("div",{className:"price-value",children:[s,n&&r]}),Object($.jsx)("div",{className:"price-label",children:t})]})},ge=function(e){var t=e.highlights,n=e.hero,a=e.title,s=e.view,r="Gen ".concat(n.generation," | ").concat(V.Rarity[n.rarity]," | Level ").concat(n.level),i="".concat(g(n.mainClass)," / ").concat(g(n.subClass)," | ").concat(g(n.profession)),c=n.originRealm===f.id?Object($.jsx)(de,{}):Object($.jsx)(he,{});return Object($.jsxs)("div",{className:"hero-snapshot ".concat(je[n.rarity]),children:[Object($.jsx)("div",{className:"hero-snapshot-title",children:a}),Object($.jsxs)("div",{className:"hero-snapshot-name",children:["Hero ",c," #",n.displayId]}),Object($.jsx)("div",{className:"hero-snapshot-grc",children:r}),Object($.jsx)("div",{className:"hero-snapshot-grc",children:i}),"front"===s&&Object($.jsx)(me,{hero:n}),"back"===s&&Object($.jsx)(ce,{hero:n,highlights:t}),Object($.jsxs)("div",{className:"hero-snapshot-pricing",children:[n.price&&Object($.jsx)(be,{label:Object($.jsxs)($.Fragment,{children:["".concat("sale"===n.auctionType?"Purchase":"Rental"),Object($.jsx)("br",{}),"Price"]}),value:n.price,showIcon:!0,network:n.network}),Object($.jsx)(be,{label:Object($.jsxs)($.Fragment,{children:["Summon",Object($.jsx)("br",{}),"Cost"]}),value:n.summonCost,showIcon:!0,network:n.network}),"assisting"===n.auctionType&&Object($.jsx)(be,{label:Object($.jsxs)($.Fragment,{children:["Total",Object($.jsx)("br",{}),"Cost"]}),value:Number(n.price)+Number(n.summonCost),showIcon:!0,network:n.network}),Object($.jsx)(be,{label:0===n.generation?Object($.jsxs)($.Fragment,{children:["Total",Object($.jsx)("br",{}),"Summons"]}):Object($.jsxs)($.Fragment,{children:["Summons",Object($.jsx)("br",{}),"Remaining"]}),value:"".concat(11===n.maxSummons?n.summons:n.summonsRemaining,"/").concat(11===n.maxSummons?"\u221e":n.maxSummons)})]}),Object($.jsxs)("div",{className:"hero-snapshot-owner",children:["Owned by: ",n.owner?n.owner.name:"UNAVAILABLE"]})]})};ge.defaultProps={view:"front"};var ve=ge,fe=ve,Oe=n(175),xe=n(176),pe=n(174),Ce=n(170),Ne=n(181),we=n(171),ye=(n(114),function(e){var t=e.onFiltersChange,n=e.onSortByChange,a=e.onViewToggled,s=e.visible,i=Object(r.useState)("probability"),c=Object(u.a)(i,2),o=c[0],l=c[1],m=Object(r.useState)(""),j=Object(u.a)(m,2),d=j[0],h=j[1],b=Object(r.useState)(""),g=Object(u.a)(b,2),v=g[0],f=g[1],O=Object(r.useState)("0"),x=Object(u.a)(O,2),p=x[0],C=x[1],N=Object(r.useState)("14"),w=Object(u.a)(N,2),y=w[0],S=w[1],k=Object(r.useState)(!1),P=Object(u.a)(k,2),T=P[0],G=P[1],B=function(e){var n=e.target,a=d,s=v,r=p,i=y,c=T;"summonsRemaining"===n.name&&(a=n.value,h(n.value)),"maxSummons"===n.name&&(s=n.value,f(n.value)),"minGen"===n.name&&(r=n.value,C(n.value)),"maxGen"===n.name&&(i=n.value,S(n.value)),"includeSummonClass"===n.name&&(c=Boolean(n.value),G(n.value)),t({summonsRemaining:a,maxSummons:s,minGen:r,maxGen:i,includeSummonClass:c})};return s?Object($.jsxs)(xe.a,{container:!0,className:"sort-filter",justifyContent:"center",children:[Object($.jsxs)(xe.a,{item:!0,className:"section",children:[Object($.jsx)(Ne.a,{defaultChecked:!1,onChange:function(e){a(e.target.checked)}}),"Flip Cards"]}),Object($.jsxs)(xe.a,{item:!0,className:"section",children:[Object($.jsx)("div",{className:"sort-label",children:"Sort By:"}),Object($.jsx)("div",{className:"sort-value",children:Object($.jsxs)(Ce.a,{label:"Sort by",name:"sort-by",className:"sort-by-selecter",value:o,variant:"standard",onChange:function(e){var t=e.target;l(t.value),n(t.value)},children:[Object($.jsx)(pe.a,{value:"probability",children:"Probability"},"probability"),Object($.jsx)(pe.a,{value:"price",children:"Price"},"price")]})})]}),Object($.jsxs)(xe.a,{item:!0,className:"section",children:[Object($.jsx)("div",{className:"filter-label",children:"Filters:"}),Object($.jsxs)("div",{className:"filter-selections",children:["Summons",Object($.jsxs)("div",{className:"filter-selecters",children:[Object($.jsxs)("div",{className:"filter-selecter",children:["Remaining",Object($.jsx)(we.a,{name:"summonsRemaining",value:d,variant:"standard",onChange:B,type:"number"})]}),Object($.jsxs)("div",{className:"filter-selecter",children:["Max",Object($.jsx)(we.a,{name:"maxSummons",value:v,variant:"standard",onChange:B,type:"number"})]})]})]}),Object($.jsxs)("div",{className:"filter-selections",children:["Generation",Object($.jsxs)("div",{className:"filter-selecters",children:[Object($.jsxs)("div",{className:"filter-selecter",children:["Min",Object($.jsx)(we.a,{name:"minGen",value:p,variant:"standard",onChange:B,type:"number"})]}),Object($.jsxs)("div",{className:"filter-selecter",children:["Max",Object($.jsx)(we.a,{name:"maxGen",value:y,variant:"standard",onChange:B,type:"number"})]})]})]}),Object($.jsxs)("div",{className:"include-summon-class",children:[Object($.jsx)("div",{children:"Include Summon Class"}),Object($.jsx)(Oe.a,{name:"includeSummonClass",value:T,onChange:B})]})]})]}):null});ye.defaultProps={onFiltersChange:function(){},onSortByChange:function(){},onViewToggled:function(){},visible:!1};var Se=ye,ke=n(178),Pe=n(182),Te=n(86),Ge=n.n(Te),Be=(n(118),function(){return Object($.jsx)("img",{src:"/jewel50.png",className:"jewel-icon",alt:"Jewel"})}),Ie=function(){return Object($.jsx)("img",{src:"/crystal100.png",className:"jewel-icon",alt:"Jewel"})},Re=[{label:"Serendale",value:x.id},{label:"Crystalvale",value:p.id}],Fe=function(e){return e.map((function(e){var t="string"===typeof e?e:e.label,n="string"===typeof e?e:e.value;return Object($.jsx)(pe.a,{value:n,children:t},n)}))},Ae=Fe([{label:"sale",value:"sale"},{label:"rent",value:"assisting"}]),Le=Fe(Re),Ee=Fe([{label:"any profession",value:"all"}].concat(Object(S.a)(["mining","gardening","foraging","fishing"]))),Ke=function(e){var t=e.defaultSummonClass,n=e.isHeroLoaded,a=e.onHeroChange,s=e.onSubmit,i=(e.onToggle,Object(r.useState)("")),c=Object(u.a)(i,2),o=c[0],l=c[1],m=Object(r.useState)("all"),j=Object(u.a)(m,2),d=j[0],h=j[1],b=Object(r.useState)("assisting"),g=Object(u.a)(b,2),v=g[0],p=g[1],C=Object(r.useState)(x.id),N=Object(u.a)(C,2),w=N[0],y=N[1],k=Object(r.useState)(f.id),P=Object(u.a)(k,2),T=P[0],G=P[1],B=Object(r.useState)(""),I=Object(u.a)(B,2),R=I[0],F=I[1],A=Object(r.useState)([]),L=Object(u.a)(A,2),E=L[0],K=L[1];Object(r.useEffect)((function(){var e=J.sort().map((function(e){return Object($.jsx)(pe.a,{value:e,children:W[e]},e)})),t=U.sort().map((function(e){return Object($.jsx)(pe.a,{value:e,children:W[e]},e)})),n=X.sort().map((function(e){return Object($.jsx)(pe.a,{value:e,children:W[e]},e)})),a=Q.sort().map((function(e){return Object($.jsx)(pe.a,{value:e,children:W[e]},e)})),s=[Object($.jsx)(Pe.a,{children:"Basic Classes"},"basic")].concat(Object(S.a)(e),[Object($.jsx)(Pe.a,{children:"Advanced Classes"},"advanced")],Object(S.a)(t),[Object($.jsx)(Pe.a,{children:"Elite Classes"},"elite")],Object(S.a)(n),[Object($.jsx)(Pe.a,{children:"Exalted Classes"},"exalted")],Object(S.a)(a));K(s)}),[]),Object(r.useEffect)((function(){t&&l(t)}),[t]);var D=function(e){var t=e.target;a&&a(t.value,T)},z=n&&o;return Object($.jsxs)(xe.a,{container:!0,className:"search-form-simple",justifyContent:"center",spacing:0,children:[Object($.jsxs)(xe.a,{item:!0,children:["Find me heroes for",Object($.jsx)(Ce.a,{label:"Auction Type",name:"auction-type",className:"auction-type-selecter",value:v,variant:"standard",onChange:function(e){var t=e.target;p(t.value)},children:Ae})]}),Object($.jsxs)(xe.a,{item:!0,children:["in the",Object($.jsx)(Ce.a,{name:"network",className:"network-selecter",value:w,variant:"standard",onChange:function(e){var t=e.target;y(t.value)},children:Le}),"tavern,"]}),Object($.jsxs)(xe.a,{item:!0,className:"hero-container",children:["who can match with hero",Object($.jsxs)(Ce.a,{className:"origin-realm-selecter",name:"origin-realm",value:T,variant:"standard",onChange:function(e){var t=e.target;G(t.value),R&&a&&a(R,t.value)},children:[Object($.jsx)(pe.a,{value:f.id,children:Object($.jsx)(Be,{})}),Object($.jsx)(pe.a,{value:O.id,children:Object($.jsx)(Ie,{})})]}),"#",Object($.jsx)(we.a,{className:"hero-id-selecter",placeholder:"hero id",name:"hero-id",value:R,variant:"standard",onChange:function(e){F(e.target.value)},onBlur:D,onKeyPress:function(e){"Enter"===e.key&&D(e)}})]}),Object($.jsxs)(xe.a,{item:!0,children:["to summon a",Object($.jsx)(Ce.a,{label:"Class to be summoned",name:"summoned-class",className:"summoned-class-selecter",value:o,variant:"standard",onChange:function(e){var t=e.target;l(t.value)},children:E})]}),Object($.jsxs)(xe.a,{item:!0,children:["for",Object($.jsx)(Ce.a,{label:"Profession to be summoned",name:"summoned-profession",className:"summoned-profession-selecter",value:d,variant:"standard",onChange:function(e){var t=e.target;h(t.value)},children:Ee})]}),Object($.jsx)(xe.a,{item:!0,children:Object($.jsx)(ke.a,{variant:"contained",onClick:function(){s&&s({auctionType:v,heroId:R,network:w,originRealm:T,summonClass:o,summonProfession:"all"===d?"":d})},disabled:!z,children:Object($.jsx)(Ge.a,{})})})]})};Ke.defaultProps={defaultSummonClass:"",isHeroLoaded:!1,onToggle:function(){}};var De=Ke,ze=function(e){var t=e.highlights,n=e.heroes,a=e.view,s=function(e){return"".concat((100*e.targetProbability).toFixed(2),"% probability")};return n.length?n.map((function(e){return Object($.jsx)(ve,{hero:e,title:s(e),view:a,highlights:t},e.id)})):null},He=(n(121),["Now there is an interesting fellow.","Oh, the Tavern has Perch Porter on draft.","Chatting with Agent Selina.  She is such a sweetheart!","Are those wings on her back, or she just harpy to see me?","Woah, big guy!  Careful with those horns!"]),Me=function(e){var t=e.hero,n=e.view;return t?Object($.jsx)("div",{className:"main-hero",children:Object($.jsx)(fe,{hero:t,title:"Main Hero",view:n})}):null},qe=function(e){var t=e.heroCount,n=e.loaded,a=e.loading,s=e.message,r=a?s:n&&!t?"No Heroes Found":null;return r?Object($.jsx)(M.a,{variant:"outlined",severity:"success",className:"loading-message",children:r}):null},Ve=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!1),i=Object(u.a)(s,2),c=i[0],o=i[1],m=Object(r.useState)(""),h=Object(u.a)(m,2),b=h[0],O=h[1],x=Object(r.useState)("simple"),p=Object(u.a)(x,2),C=p[0],w=p[1],S=Object(r.useState)("probability"),k=Object(u.a)(S,2),P=k[0],T=k[1],G=Object(r.useState)({}),B=Object(u.a)(G,2),I=B[0],R=B[1],F=Object(r.useState)(""),A=Object(u.a)(F,2),L=A[0],D=A[1],z=Object(r.useState)(),M=Object(u.a)(z,2),V=M[0],W=M[1],J=Object(r.useState)([]),U=Object(u.a)(J,2),X=U[0],Q=U[1],_=Object(r.useState)("back"),Y=Object(u.a)(_,2),Z=Y[0],ee=Y[1],te=Object(r.useState)(),ne=Object(u.a)(te,2),ae=ne[0],se=ne[1],re=function(e){return new Promise((function(t){return setTimeout(t,e)}))},ie=function(){var e=Math.floor(Math.random()*He.length);O(He[e])},ce=function(){var e=Object(l.a)(j.a.mark((function e(t,n){var a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=n===f.id?t:"".concat("1000000000000".slice(0,13-t.length)).concat(t))||V&&V.id===a){e.next=9;break}return Q([]),W(),e.next=6,H(a);case 6:s=e.sent,W(s),D(s.mutationClass);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),oe=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,s,r,i,c,l,u,m,h,b,g,f;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Q([]),a(!0),ie(),n=[],s=50,r=0,i=!1,c=K(v(V.mainClass),t.summonClass),se({mainClass:c,profession:[t.summonProfession]});case 9:if(i){e.next=29;break}return e.next=12,N(t.auctionType,t.network,c,t.summonProfession,s,r);case 12:for(l=e.sent,u=Object(d.decodeRecessiveGenesAndNormalize)(l.heroes),m=0;m<u.length;m++)(h=u[m]).displayId=13===h.id.length?Number(h.id.slice(1)).toString():h.id,h.auctionType=t.auctionType,h.summonCost=y(h),h.price=(j=h.price,Number(j)/1e18),b=E(V.mainClassGenes,h.mainClassGenes,t.summonClass),t.summonProfession?(g=E(V.professionGenes,h.professionGenes,t.summonProfession),h.targetProbability=b&&g?b.value*g.value:0):h.targetProbability=b?b.value:0;return f=u.filter((function(e){return e.targetProbability>0})),console.log("".concat(n.length," existing heroes")),console.log("adding ".concat(f.length," new heroes")),n=n.concat(f),console.log("now ".concat(n.length," total heroes")),Q(n),ie(),r+=s,i=0===l.length,e.next=26,re(1e3);case 26:i=r>200,e.next=9;break;case 29:a(!1),o(!0);case 31:case"end":return e.stop()}var j}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(e,t,n,a){var s=e;if(!e.length)return s;var r=g(a);return s=s.filter((function(e){var n=!t.summonsRemaining||Number(e.summonsRemaining)>=Number(t.summonsRemaining),a=!t.maxSummons||Number(e.maxSummons)>=Number(t.maxSummons),s=!t.minGen||""===t.minGen||Number(e.generation)>=Number(t.minGen),i=!t.maxGen||""===t.maxGen||Number(e.generation)<=Number(t.maxGen),c=t.includeSummonClass||e.mainClass!==r;return a&&n&&s&&i&&c})),"probability"===n?s.sort((function(e,t){return e.targetProbability>t.targetProbability?-1:e.targetProbability<t.targetProbability?1:0})):s.sort((function(e,t){if("price"===n){var a=e.price+("sale"===e.auctionType?0:e.summonCost),s=t.price+("sale"===t.auctionType?0:t.summonCost);return a>s?1:a<s?-1:0}return 0}))}(X,I,P,L);return Object($.jsxs)(q.a,{maxWidth:"xl",children:[Object($.jsx)(De,{defaultSummonClass:L,isHeroLoaded:!!V,onHeroChange:ce,onToggle:function(){w("simple"===C?"advanced":"simple")},onSubmit:oe}),Object($.jsx)(Se,{onFiltersChange:function(e){R(e)},onSortByChange:function(e){T(e)},onViewToggled:function(e){ee(e?"front":"back")},visible:!!V}),Object($.jsx)(qe,{heroCount:X.length,loading:n,loaded:c,message:b}),Object($.jsxs)("div",{className:"hero-list",children:[Object($.jsx)(Me,{hero:V,view:Z}),Object($.jsx)(ze,{heroes:le,view:Z,highlights:ae})]})]})},We=Ve;n(122);var Je=function(){return Object($.jsxs)("div",{className:"App",children:[Object($.jsx)("header",{className:"App-header"}),Object($.jsx)("main",{className:"App-main",children:Object($.jsx)(We,{})})]})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,186)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};o.a.render(Object($.jsx)(i.a.StrictMode,{children:Object($.jsx)(Je,{})}),document.getElementById("root")),Ue()}},[[123,1,2]]]);
//# sourceMappingURL=main.dbad3333.chunk.js.map