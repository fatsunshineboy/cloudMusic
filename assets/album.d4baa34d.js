import{d as e,b1 as a,b7 as s,b8 as r,o as t,c as u,e as c,i as l}from"./index.21005268.js";import{s as n}from"./search.335aedb5.js";const o=e({__name:"album",setup(e){var o;const m=null==(o=c().query)?void 0:o.keywords,d=l("changeSearchResultNum");return a.search({keywords:m,type:n.searchType.album}).then((e=>{d(e.result.albumCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:m,searchAtOnce:!1})})),(e,a)=>(t(),u("div",null," 专辑 "))}});export{o as default};
