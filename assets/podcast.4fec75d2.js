import{d as e,b3 as a,b9 as s,ba as r,c as t,e as o,i as c,o as d}from"./index.33e10627.js";import{s as n}from"./search.335aedb5.js";const u=e({__name:"podcast",setup(e){var u;const i=null==(u=o().query)?void 0:u.keywords,h=c("changeSearchResultNum");return a.search({keywords:i,type:n.searchType.radioStation}).then((e=>{h(e.result.djRadiosCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:i,searchAtOnce:!1})})),(e,a)=>(d(),t("div",null," 播客 "))}});export{u as default};
