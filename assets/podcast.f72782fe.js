import{d as a,b3 as e,b9 as s,ba as r,c as t,e as o,i as c,o as d}from"./index.41351dc4.js";import{s as n}from"./search.335aedb5.js";const u=a({__name:"podcast",setup(a){var u;const i=null==(u=o().query)?void 0:u.keywords,h=c("changeSearchResultNum");return e.search({keywords:i,type:n.searchType.radioStation}).then((a=>{h(a.result.djRadiosCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:i,searchAtOnce:!1})})),(a,e)=>(d(),t("div",null," 播客 "))}});export{u as default};
