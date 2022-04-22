(this["webpackJsonphero-analyzer"]=this["webpackJsonphero-analyzer"]||[]).push([[0],{153:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},204:function(e,t){},228:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var a,s,i=n(1),r=n.n(i),c=n(44),o=n.n(c),l=(n(153),n(45)),u=n(12),m=n(5),j=n.n(m),b=[{generation:0,baseCost:6,increment:2,maxCost:30},{generation:1,baseCost:16,increment:2,maxCost:34},{generation:2,baseCost:26,increment:2,maxCost:42},{generation:3,baseCost:36,increment:2,maxCost:50},{generation:4,baseCost:46,increment:2,maxCost:58},{generation:5,baseCost:56,increment:2,maxCost:66},{generation:6,baseCost:66,increment:2,maxCost:74},{generation:7,baseCost:76,increment:2,maxCost:82},{generation:8,baseCost:86,increment:2,maxCost:90},{generation:9,baseCost:96,increment:2,maxCost:98},{generation:10,baseCost:106,increment:2,maxCost:106}],d=function(e){var t=e.generation,n=e.summonsRemaining,a=e.maxSummons,s=Number(t);if(s<0||s>10)return"?";var i=b[s];return i.baseCost+(a-n+1)*i.increment},h=n(64),v=n(39),g=n(46),f=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",n=new g.GraphQLClient("https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",{headers:{"Content-Type":"application/json"}}),s=Object(g.gql)(a||(a=Object(v.a)(["\n\t{\n\t\theroes( \n\t\t\torderBy: numberId\n\t\t\torderDirection: asc\n\t\t\twhere: \n\t\t\t{\n\t\t\t\tid: ","\n\t\t   \t}\n\t\t)\n\t\t{\n\t\t\tid\n\t\t\towner{\n\t\t\t  name\n\t\t\t}\n\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\trarity\n\t\t\tgender\n\t\t\tgeneration\n\t\t\tmainClass\n\t\t\tsubClass\n\t\t\tlevel\n\t\t\tprofession\n\t\t\tfishing\n\t\t\tforaging\n\t\t\tgardening\n\t\t\tmining\n\t\t\n\t\t\tstamina\n\t\t\n\t\t\tsummonsRemaining\n\t\t\tmaxSummons\n\t\t\tsummons\n\t\t\t\n\t\t\tactive1\n\t\t\tactive2\n\t\t\tpassive1\n\t\t\tpassive2\n\t\t\tstatBoost1\n\t\t\tstatBoost2\n\t\t\tstatsUnknown1\n\t\t\tstatsUnknown2\n\t\t\telement\n\t\t\n\t\t\tstrength\n\t\t\tagility\n\t\t\tendurance\n\t\t\twisdom\n\t\t\tdexterity\n\t\t\tvitality\n\t\t\tintelligence\n\t\t\tluck\n\t  \n\t\t\tstatus\n\t\t\thpFullAt\n\t\t\tmpFullAt\n\t\t\tstatGenesRaw: statGenes\n\t\t}\n\t}"])),t),e.next=5,n.request(s);case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O="https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql",x=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n,a,i,r,c,o,l,u,m,b,d=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:"sale",n=d.length>1&&void 0!==d[1]?d[1]:[],a=d.length>2&&void 0!==d[2]?d[2]:"",i=d.length>3&&void 0!==d[3]?d[3]:50,r=d.length>4&&void 0!==d[4]?d[4]:0,console.log("Retrieving hero listings ".concat(r+1," - ").concat(r+i," from the Tavern")),c={headers:{"Content-Type":"application/json"}},o=new g.GraphQLClient(O,c),l="".concat(t,"Price_not: null"),n.length&&(l="".concat(l,"\n    mainClass_in: [").concat(n.map((function(e){return'"'.concat(e,'"')})),"]")),a&&(l="".concat(l,'\n    profession: "').concat(a,'"')),u="price: ".concat(t,"Price"),m=Object(g.gql)(s||(s=Object(v.a)(["\n\t{\n    heroes(\n      first: ","\n      skip: ","\n      where:{\n        ","\n      }\n    )\n    {\n      id\n      owner{\n        name\n      }\n      firstName\n      lastName\n      rarity\n      gender\n      generation\n      mainClass\n      subClass\n      level\n      profession\n      fishing\n      foraging\n      gardening\n      mining\n  \n      stamina\n  \n      summonsRemaining\n      maxSummons\n      summons\n      \n      active1\n      active2\n      passive1\n      passive2\n      statBoost1\n      statBoost2\n      statsUnknown1\n      statsUnknown2\n      element\n  \n      strength\n      agility\n      endurance\n      wisdom\n      dexterity\n      vitality\n      intelligence\n      luck\n\n      ","\n      status\n      hpFullAt\n      mpFullAt\n      statGenesRaw: statGenes\n    }\n  }"])),i,r,l,u),e.next=15,o.request(m);case 15:return b=e.sent,console.log("".concat(b.heroes.length," hero listings retrieved from the Tavern")),e.abrupt("return",b);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=n(21),C=n(98),N=[{classes:["Warrior","Knight"],mutation:"Paladin"},{classes:["Thief","Archer"],mutation:"DarkKnight"},{classes:["Priest","Wizard"],mutation:"Summoner"},{classes:["Monk","Pirate"],mutation:"Ninja"},{classes:["Paladin","DarkKnight"],mutation:"Dragoon"},{classes:["Summoner","Ninja"],mutation:"Sage"},{classes:["Dragoon","Sage"],mutation:"DreadKnight"}],S=function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))},y=[.75,.1875,.046875,.015625],w={basic:.25,advanced:.25,elite:.125,exalted:.125},T=function(e){return e.map((function(e,t){return{name:e,value:y[t]}}))},A=function(e){return e.reduce((function(e,t,n){var a=e.find((function(e){return e.name===t.name}));return a?(a.value+=t.value,e):[].concat(Object(p.a)(e),[t])}),[])},P=function(e,t){var n=G(S(e.name),S(t.name));if(n){var a=w[Object(C.getHeroTier)(e.name)];return{name:n.mutation,value:e.value*t.value*a}}return null},G=function(e,t){return N.find((function(n){return e!==t&&n.classes.includes(e)&&n.classes.includes(t)}))},R=function(e){return e.forEach((function(e){return e.value=e.value/2}))},k=function(e,t){var n={hero1:T(e),hero2:T(t)};return n.mutations=function(e,t){for(var n=[],a=0;a<4;a++){var s=P(e[a],t[a]);s&&(n.push(s),e[a].value-=s.value,t[a].value-=s.value)}return A(n)}(n.hero1,n.hero2),R(n.hero1),R(n.hero2),function(e){return A(e.hero1.concat(e.hero2,e.mutations)).sort((function(e,t){return e.value>t.value?-1:e.value<t.value?1:0}))}(n)},B=function(e,t,n){return k(e,t).find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))},F=function(e,t){var n=[t];if(e===t)return n;var a=N.find((function(e){return e.mutation===t}));if(a){var s=a.classes.find((function(t){return t===e})),i=a.classes.find((function(t){return t!==e}));s&&n.push(i)}return n},L=function(e){return N.find((function(t){return t.classes.includes(e)})).mutation},E=n(30),I=["D","R1","R2","R3"],V=0,D=2,U=n(2),_={mining:"Mining",foraging:"Foraging",gardening:"Gardening",fishing:"Fishing"},M=function(e){var t=e.className,n=e.genes,a=e.heroid,s=e.title,i=e.type;return Object(U.jsxs)("div",{className:"hero-snapshot-genes ".concat(t),children:[Object(U.jsx)("div",{className:"title",children:s}),n.map((function(e,t){var n=i===V?E.CLASS_REV[e]:i===D?_[e]:e;return n||(n=e),Object(U.jsxs)("div",{className:"gene",children:[Object(U.jsxs)("div",{className:"label",children:[I[t],":"]}),Object(U.jsx)("div",{className:"value",children:n})]},"".concat(a,"-").concat(I[t]))}))]})};M.defaultProps={type:0};var H=M,z=function(e){var t=e.boldIfNot,n=e.value,a="value";return t&&!n.toString().toLowerCase().includes(t)&&(a+=" notBasic"),Object(U.jsx)("div",{className:"gene",children:Object(U.jsx)("div",{className:a,children:n})})},q=function(e){var t=e.className,n=e.genes,a=n.statsUnknown1?n.statsUnknown1:n.statGenes.statsUnknown1,s=n.statsUnknown2?n.statsUnknown2:n.statGenes.statsUnknown2,i=n.element?n.element:n.statGenes.element;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"hero-snapshot-genes ".concat(t),children:[Object(U.jsx)("div",{className:"title",children:"Active"}),Object(U.jsx)(z,{value:n.active1,boldIfNot:"basic"}),Object(U.jsx)(z,{value:n.active2,boldIfNot:"basic"})]}),Object(U.jsxs)("div",{className:"hero-snapshot-genes ".concat(t),children:[Object(U.jsx)("div",{className:"title",children:"Passive"}),Object(U.jsx)(z,{value:n.passive1,boldIfNot:"basic"}),Object(U.jsx)(z,{value:n.passive2,boldIfNot:"basic"})]}),Object(U.jsxs)("div",{className:"hero-snapshot-genes ".concat(t),children:[Object(U.jsx)("div",{className:"title",children:"Unknown"}),Object(U.jsx)(z,{value:a}),Object(U.jsx)(z,{value:s})]}),Object(U.jsxs)("div",{className:"hero-snapshot-genes ".concat(t),children:[Object(U.jsx)("div",{className:"title",children:"Element"}),Object(U.jsx)(z,{value:i})]})]})};q.defaultProps={};var J=q,K=function(e){var t=e.hero;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"hero-snapshot-genes-section",children:[Object(U.jsx)(H,{genes:t.mainClassGenes,heroid:t.id,title:"Class"}),Object(U.jsx)(H,{genes:t.subClassGenes,heroid:t.id,title:"SubClass"}),Object(U.jsx)(H,{genes:t.professionGenes,heroid:t.id,title:"Profession",type:2})]}),Object(U.jsx)("div",{className:"hero-snapshot-genes-section",children:Object(U.jsx)(J,{genes:t,heroid:t.id})})]})},W=function(e){var t=e.children,n=e.className,a=e.title;return Object(U.jsxs)("div",{className:"hero-stat-section ".concat(n),children:[Object(U.jsx)("div",{className:"title",children:a}),Object(U.jsx)("div",{className:"stat-group",children:t})]})};W.defaultProps={className:"hero-stat-section"};var X=W,Q=function(e){var t=e.name,n=e.value,a=e.main,s=e.minor,i="name".concat(a&&s?" main-minor":a?" main":s?" minor":"");return Object(U.jsxs)("div",{className:"hero-stat",children:[Object(U.jsx)("div",{className:i,children:t}),Object(U.jsx)("div",{className:"value",children:n})]})},Y=function(e){var t=e.hero;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(X,{title:"Stats",children:[Object(U.jsx)(Q,{name:"STR",value:t.strength,main:"STR"===t.statBoost1,minor:"STR"===t.statBoost2}),Object(U.jsx)(Q,{name:"AGI",value:t.agility,main:"AGI"===t.statBoost1,minor:"AGI"===t.statBoost2}),Object(U.jsx)(Q,{name:"END",value:t.endurance,main:"END"===t.statBoost1,minor:"END"===t.statBoost2}),Object(U.jsx)(Q,{name:"WIS",value:t.wisdom,main:"WIS"===t.statBoost1,minor:"WIS"===t.statBoost2}),Object(U.jsx)(Q,{name:"DEX",value:t.dexterity,main:"DEX"===t.statBoost1,minor:"DEX"===t.statBoost2}),Object(U.jsx)(Q,{name:"VIT",value:t.vitality,main:"VIT"===t.statBoost1,minor:"VIT"===t.statBoost2}),Object(U.jsx)(Q,{name:"INT",value:t.intelligence,main:"INT"===t.statBoost1,minor:"INT"===t.statBoost2}),Object(U.jsx)(Q,{name:"LCK",value:t.luck,main:"LCK"===t.statBoost1,minor:"LCK"===t.statBoost2})]}),Object(U.jsxs)(X,{className:"profession-stat-section",title:"Professions",children:[Object(U.jsx)(Q,{name:"Mining",value:t.mining,main:"mining"===t.profession}),Object(U.jsx)(Q,{name:"Fishing",value:t.fishing,main:"fishing"===t.profession}),Object(U.jsx)(Q,{name:"Gardening",value:t.gardening,main:"gardening"===t.profession}),Object(U.jsx)(Q,{name:"Foraging",value:t.foraging,main:"foraging"===t.profession})]})]})},Z=(n(161),["common","uncommon","rare","legendary","mythic"]),$=function(){return Object(U.jsx)("img",{src:"/jewel50.png",className:"jewel-icon",alt:"Jewel"})},ee=function(e){var t=e.label,n=e.showJewel,a=e.value;return Object(U.jsxs)("div",{className:"price-group",children:[Object(U.jsxs)("div",{className:"price-value",children:[a,n&&Object(U.jsx)($,{})]}),Object(U.jsx)("div",{className:"price-label",children:t})]})},te=function(e){var t=e.hero,n=e.title,a=e.view,s="Gen ".concat(t.generation," | ").concat(E.Rarity[t.rarity]," | Level ").concat(t.level),i="".concat(S(t.mainClass)," / ").concat(S(t.subClass)," | ").concat(S(t.profession));return Object(U.jsxs)("div",{className:"hero-snapshot ".concat(Z[t.rarity]),children:[Object(U.jsx)("div",{className:"hero-snapshot-title",children:n}),Object(U.jsxs)("div",{className:"hero-snapshot-name",children:["Hero #",t.id]}),Object(U.jsx)("div",{className:"hero-snapshot-grc",children:s}),Object(U.jsx)("div",{className:"hero-snapshot-grc",children:i}),"front"===a&&Object(U.jsx)(Y,{hero:t}),"back"===a&&Object(U.jsx)(K,{hero:t}),Object(U.jsxs)("div",{className:"hero-snapshot-pricing",children:[t.price&&Object(U.jsx)(ee,{label:Object(U.jsxs)(U.Fragment,{children:["".concat("sale"===t.auctionType?"Purchase":"Rental"),Object(U.jsx)("br",{}),"Price"]}),value:t.price,showJewel:!0}),Object(U.jsx)(ee,{label:Object(U.jsxs)(U.Fragment,{children:["Summon",Object(U.jsx)("br",{}),"Cost"]}),value:t.summonCost,showJewel:!0}),"assisting"===t.auctionType&&Object(U.jsx)(ee,{label:Object(U.jsxs)(U.Fragment,{children:["Total",Object(U.jsx)("br",{}),"Cost"]}),value:t.price+t.summonCost,showJewel:!0}),Object(U.jsx)(ee,{label:Object(U.jsxs)(U.Fragment,{children:["Summons",Object(U.jsx)("br",{}),"Remaining"]}),value:"".concat(t.summonsRemaining,"/").concat(t.maxSummons)})]}),Object(U.jsxs)("div",{className:"hero-snapshot-owner",children:["Owned by: ",t.owner?t.owner.name:"UNAVAILABLE"]})]})};te.defaultProps={view:"front"};var ne=te,ae=ne,se=n(281),ie=n(278),re=n(282),ce=n(279),oe=(n(162),function(e){var t=e.onFiltersChange,n=e.onSortByChange,a=e.onViewToggled,s=e.visible,r=Object(i.useState)("probability"),c=Object(u.a)(r,2),o=c[0],l=c[1],m=Object(i.useState)(""),j=Object(u.a)(m,2),b=j[0],d=j[1],h=Object(i.useState)(""),v=Object(u.a)(h,2),g=v[0],f=v[1],O=Object(i.useState)("0"),x=Object(u.a)(O,2),p=x[0],C=x[1],N=Object(i.useState)("14"),S=Object(u.a)(N,2),y=S[0],w=S[1],T=function(e){var n=e.target,a=b,s=g,i=p,r=y;"summonsRemaining"===n.name&&(a=n.value,d(n.value)),"maxSummons"===n.name&&(s=n.value,f(n.value)),"minGen"===n.name&&(i=n.value,C(n.value)),"maxGen"===n.name&&(r=n.value,w(n.value)),t({summonsRemaining:a,maxSummons:s,minGen:i,maxGen:r})};return s?Object(U.jsxs)("div",{className:"sort-filter",children:[Object(U.jsxs)("div",{className:"section",children:[Object(U.jsx)(re.a,{defaultChecked:!0,onChange:function(e){a(e.target.checked)}}),"Flip Cards"]}),Object(U.jsxs)("div",{className:"section",children:[Object(U.jsx)("div",{className:"sort-label",children:"Sort By:"}),Object(U.jsx)("div",{className:"sort-value",children:Object(U.jsxs)(ie.a,{label:"Sort by",name:"sort-by",className:"sort-by-selecter",value:o,variant:"standard",onChange:function(e){var t=e.target;l(t.value),n(t.value)},children:[Object(U.jsx)(se.a,{value:"probability",children:"Probability"},"probability"),Object(U.jsx)(se.a,{value:"price",children:"Price"},"price")]})})]}),Object(U.jsxs)("div",{className:"section",children:[Object(U.jsx)("div",{className:"filter-label",children:"Filters:"}),Object(U.jsxs)("div",{className:"filter-selections",children:["Summons",Object(U.jsxs)("div",{className:"filter-selecters",children:[Object(U.jsxs)("div",{className:"filter-selecter",children:["Remaining",Object(U.jsx)(ce.a,{name:"summonsRemaining",value:b,variant:"standard",onChange:T,type:"number"})]}),Object(U.jsxs)("div",{className:"filter-selecter",children:["Max",Object(U.jsx)(ce.a,{name:"maxSummons",value:g,variant:"standard",onChange:T,type:"number"})]})]})]}),Object(U.jsxs)("div",{className:"filter-selections",children:["Generation",Object(U.jsxs)("div",{className:"filter-selecters",children:[Object(U.jsxs)("div",{className:"filter-selecter",children:["Min",Object(U.jsx)(ce.a,{name:"minGen",value:p,variant:"standard",onChange:T,type:"number"})]}),Object(U.jsxs)("div",{className:"filter-selecter",children:["Max",Object(U.jsx)(ce.a,{name:"maxGen",value:y,variant:"standard",onChange:T,type:"number"})]})]})]})]})]}):null});oe.defaultProps={onFiltersChange:function(){},onSortByChange:function(){},onViewToggled:function(){},visible:!1};var le=oe,ue=n(41),me=n(57),je=n(284),be=n(286),de=n(134),he=n.n(de),ve=(n(228),function(e){return e.map((function(e){var t="string"===typeof e?e:e.label,n="string"===typeof e?e:e.value;return Object(U.jsx)(se.a,{value:n,children:t},n)}))}),ge=ve([{label:"sale",value:"sale"},{label:"rent",value:"assisting"}]),fe=ve([{label:"any profession",value:"all"}].concat(Object(p.a)(E.PROFESSIONS_AR))),Oe=function(e){var t=e.defaultSummonClass,n=e.isHeroLoaded,a=e.onHeroChange,s=e.onSubmit,r=(e.onToggle,Object(i.useState)("")),c=Object(u.a)(r,2),o=c[0],l=c[1],m=Object(i.useState)("all"),j=Object(u.a)(m,2),b=j[0],d=j[1],h=Object(i.useState)("assisting"),v=Object(u.a)(h,2),g=v[0],f=v[1],O=Object(i.useState)(""),x=Object(u.a)(O,2),C=x[0],N=x[1],S=Object(i.useState)([]),y=Object(u.a)(S,2),w=y[0],T=y[1];Object(i.useEffect)((function(){var e=me.basicClasses.sort().map((function(e){return Object(U.jsx)(se.a,{value:ue.CONSTANTS.CLASS_REV[e],children:ue.CONSTANTS.CLASS_REV[e]},e)})),t=me.advancedClasses.sort().map((function(e){return Object(U.jsx)(se.a,{value:ue.CONSTANTS.CLASS_REV[e],children:ue.CONSTANTS.CLASS_REV[e]},e)})),n=me.eliteClasses.sort().map((function(e){return Object(U.jsx)(se.a,{value:ue.CONSTANTS.CLASS_REV[e],children:ue.CONSTANTS.CLASS_REV[e]},e)})),a=me.exaltedClasses.sort().map((function(e){return Object(U.jsx)(se.a,{value:ue.CONSTANTS.CLASS_REV[e],children:ue.CONSTANTS.CLASS_REV[e]},e)})),s=[Object(U.jsx)(be.a,{children:"Basic Classes"},"basic")].concat(Object(p.a)(e),[Object(U.jsx)(be.a,{children:"Advanced Classes"},"advanced")],Object(p.a)(t),[Object(U.jsx)(be.a,{children:"Elite Classes"},"elite")],Object(p.a)(n),[Object(U.jsx)(be.a,{children:"Exalted Classes"},"exalted")],Object(p.a)(a));T(s)}),[]),Object(i.useEffect)((function(){t&&l(t)}),[t]);var A=n&&o;return Object(U.jsxs)("div",{className:"search-form-simple",children:["Find me heroes for",Object(U.jsx)(ie.a,{label:"Auction Type",name:"auction-type",className:"auction-type-selecter",value:g,variant:"standard",onChange:function(e){var t=e.target;f(t.value)},children:ge}),"who could match with hero #",Object(U.jsx)("div",{className:"hero-id-selecter",children:Object(U.jsx)(ce.a,{placeholder:"hero id",name:"hero-id",value:C,variant:"standard",onChange:function(e){var t=e.target;N(t.value)},onBlur:function(e){var t=e.target;a&&a(t.value)}})}),"to summon a",Object(U.jsx)(ie.a,{label:"Class to be summoned",name:"summoned-class",className:"summoned-class-selecter",value:o,variant:"standard",onChange:function(e){var t=e.target;l(t.value)},children:w}),"for",Object(U.jsx)(ie.a,{label:"Profession to be summoned",name:"summoned-profession",className:"summoned-profession-selecter",value:b,variant:"standard",onChange:function(e){var t=e.target;d(t.value)},children:fe}),Object(U.jsx)(je.a,{variant:"contained",onClick:function(){s&&s({auctionType:g,heroId:C,summonClass:o,summonProfession:"all"===b?"":b})},disabled:!A,children:Object(U.jsx)(he.a,{})})]})};Oe.defaultProps={defaultSummonClass:"",isHeroLoaded:!1,onToggle:function(){}};var xe=Oe,pe=function(e){var t=e.heroes,n=e.view,a=function(e){return"".concat((100*e.targetProbability).toFixed(2),"% probability")};return t.length?t.map((function(e){return Object(U.jsx)(ne,{hero:e,title:a(e),view:n},e.id)})):null},Ce=(n(231),["Now there is an interesting fellow.","Oh, the Tavern has Perch Porter on draft.","Chatting with Agent Selina.  She is such a sweetheart!","Are those wings on her back, or she just harpy to see me?","Woah, big guy!  Careful with those horns!"]),Ne=function(e){var t=e.hero,n=e.view;return t?Object(U.jsx)("div",{className:"main-hero",children:Object(U.jsx)(ae,{hero:t,title:"Main Hero",view:n})}):null},Se=function(e){var t=e.heroCount,n=e.loaded,a=e.loading,s=e.message,i=a?s:n&&!t?"No Heroes Found":null;return Object(U.jsx)("div",{className:"loading-message",children:i})},ye=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(!1),r=Object(u.a)(s,2),c=r[0],o=r[1],m=Object(i.useState)(""),b=Object(u.a)(m,2),v=b[0],g=b[1],O=Object(i.useState)("simple"),p=Object(u.a)(O,2),C=p[0],N=p[1],S=Object(i.useState)("probability"),y=Object(u.a)(S,2),w=y[0],T=y[1],A=Object(i.useState)({}),P=Object(u.a)(A,2),G=P[0],R=P[1],k=Object(i.useState)(""),E=Object(u.a)(k,2),I=E[0],V=E[1],D=Object(i.useState)(),_=Object(u.a)(D,2),M=_[0],H=_[1],z=Object(i.useState)([]),q=Object(u.a)(z,2),J=q[0],K=q[1],W=Object(i.useState)("front"),X=Object(u.a)(W,2),Q=X[0],Y=X[1],Z=function(e){return new Promise((function(t){return setTimeout(t,e)}))},$=function(){var e=Math.floor(Math.random()*Ce.length);g(Ce[e])},ee=function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return K([]),H(),e.next=5,f(t);case 5:n=e.sent,(n=Object(h.decodeRecessiveGenesAndNormalize)(n.heroes))[0].summonCost=d(n[0]),H(n[0]),V(L(n[0].mainClass));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,s,i,r,c,l,u,m,b,v,g,f;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K([]),a(!0),$(),n=[],s=50,i=0,r=!1;case 7:if(r){e.next=28;break}return c=F(M.mainClass,t.summonClass),e.next=11,x(t.auctionType,c,t.summonProfession,s,i);case 11:for(l=e.sent,u=Object(h.decodeRecessiveGenesAndNormalize)(l.heroes),m=0;m<u.length;m++)(b=u[m]).auctionType=t.auctionType,b.summonCost=d(b),b.price=(j=b.price,Number(j)/1e18),v=B(M.mainClassGenes,b.mainClassGenes,t.summonClass),t.summonProfession?(g=B(M.professionGenes,b.professionGenes,t.summonProfession),b.targetProbability=v&&g?v.value*g.value:0):b.targetProbability=v?v.value:0;return f=u.filter((function(e){return e.targetProbability>0})),console.log("".concat(n.length," existing heroes")),console.log("adding ".concat(f.length," new heroes")),n=n.concat(f),console.log("now ".concat(n.length," total heroes")),K(n),$(),i+=s,r=0===l.length,e.next=25,Z(1e3);case 25:r=i>200,e.next=7;break;case 28:a(!1),o(!0);case 30:case"end":return e.stop()}var j}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=J;return(G.summonsRemaining||G.maxSummons||G.minGen||G.maxGen)&&(ne=ne.filter((function(e){var t=!G.summonsRemaining||Number(e.summonsRemaining)>=Number(G.summonsRemaining),n=!G.maxSummons||Number(e.maxSummons)>=Number(G.maxSummons),a=""===G.minGen||Number(e.generation)>=Number(G.minGen),s=""===G.maxGen||Number(e.generation)<=Number(G.maxGen);return n&&t&&a&&s}))),ne="probability"===w?ne.sort((function(e,t){return e.targetProbability>t.targetProbability?-1:e.targetProbability<t.targetProbability?1:0})):ne.sort((function(e,t){if("price"===w){var n=e.price+("sale"===e.auctionType?0:e.summonCost),a=t.price+("sale"===t.auctionType?0:t.summonCost);return n>a?1:n<a?-1:0}return 0})),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(xe,{defaultSummonClass:I,isHeroLoaded:!!M,onHeroChange:ee,onToggle:function(){N("simple"===C?"advanced":"simple")},onSubmit:te}),Object(U.jsx)(le,{onFiltersChange:function(e){R(e)},onSortByChange:function(e){T(e)},onViewToggled:function(e){Y(e?"front":"back")},visible:J.length>0}),Object(U.jsx)(Se,{heroCount:J.length,loading:n,loaded:c,message:v}),Object(U.jsxs)("div",{className:"hero-list",children:[Object(U.jsx)(Ne,{hero:M,view:Q}),Object(U.jsx)(pe,{heroes:ne,view:Q})]})]})},we=ye;n(232);var Te=function(){return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)("header",{className:"App-header"}),Object(U.jsx)("main",{className:"App-main",children:Object(U.jsx)(we,{})})]})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};o.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(Te,{})}),document.getElementById("root")),Ae()}},[[234,1,2]]]);
//# sourceMappingURL=main.18a08c07.chunk.js.map