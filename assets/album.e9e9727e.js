import{d as a,a$ as e,b0 as s,b1 as r,o as t,c as u,q as c,U as l}from"./index.8969ea41.js";import{s as n}from"./search.335aedb5.js";const o=a({__name:"album",setup(a){var o;const m=null==(o=c().query)?void 0:o.keywords,d=l("changeSearchResultNum");return e.search({keywords:m,type:n.searchType.album}).then((a=>{d(a.result.albumCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:m,searchAtOnce:!1})})),(a,e)=>(t(),u("div",null," 专辑 "))}});export{o as default};
