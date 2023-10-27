"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Mortgage",l={unversionedId:"findoc/models/mortgage",id:"findoc/models/mortgage",title:"Mortgage",description:"Default Model Definition",source:"@site/docs/findoc/models/mortgage.md",sourceDirName:"findoc/models",slug:"/findoc/models/mortgage",permalink:"/obsidian-plugins-docs/docs/findoc/models/mortgage",draft:!1,editUrl:"https://github.com/studiowebux/obsidian-plugins-docs/docs/findoc/models/mortgage.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Income minus Expenses by Year/Month",permalink:"/obsidian-plugins-docs/docs/findoc/models/incomeMinusExpensesByYearMonth"},next:{title:"Mortgage Rate",permalink:"/obsidian-plugins-docs/docs/findoc/models/mortgageRate"}},c={},s=[{value:"Default Model Definition",id:"default-model-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Screenshot",id:"screenshot",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mortgage"},"Mortgage"),(0,o.kt)("h2",{id:"default-model-definition"},"Default Model Definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'mortgage: {\n    "dataSource": "splitDailyDates",\n    "categories": ["Mortgage"],\n    "output": "generateDailyDataSet",\n    "beginAtZero": false,\n    "chartLabelType": "money",\n    "dataSourceKey": "timestamp",\n    "values": "",\n}\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"```findoc\nfilename: ./data.csv\nmodel: mortgage\ntitle: Mortgage\n```\n")),(0,o.kt)("h2",{id:"screenshot"},"Screenshot"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mortgage",src:n(7841).Z,width:"1466",height:"1216"})))}p.isMDXComponent=!0},7841:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mortgage-f8f1609a94589fbf1a0630a5f370d374.png"}}]);