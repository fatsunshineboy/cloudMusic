import{d as a,a$ as e,b0 as s,b1 as r,o as t,c as o,q as d,U as c}from"./index.d4524908.js";import{s as n}from"./search.335aedb5.js";const u=a({__name:"podcast",setup(a){var u;const h=null==(u=d().query)?void 0:u.keywords,i=c("changeSearchResultNum");return e.search({keywords:h,type:n.searchType.radioStation}).then((a=>{i(a.result.djRadiosCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:h,searchAtOnce:!1})})),(a,e)=>(t(),o("div",null," 播客 "))}});export{u as default};