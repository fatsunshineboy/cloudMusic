import{d as a,s as e,aW as s,aX as r,o as u,c as t,u as c,i as l}from"./index.8df841c8.js";import{s as n}from"./search.335aedb5.js";const o=a({__name:"album",setup(a){var o;const d=null==(o=c().query)?void 0:o.keywords,m=l("changeSearchResultNum");return e.search({keywords:d,type:n.searchType.album}).then((a=>{m(a.result.albumCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:d,searchAtOnce:!1})})),(a,e)=>(u(),t("div",null," 专辑 "))}});export{o as default};
