import{d as e,b3 as a,b9 as s,ba as r,c as t,e as o,i as c,o as n}from"./index.92a5387d.js";import{s as d}from"./search.335aedb5.js";const u=e({__name:"voice",setup(e){var u;const h=null==(u=o().query)?void 0:u.keywords,i=c("changeSearchResultNum");return a.search({keywords:h,type:d.searchType.voice}).then((e=>{i(e.data.totalCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:h,searchAtOnce:!1})})),(e,a)=>(n(),t("div",null," 声音 "))}});export{u as default};