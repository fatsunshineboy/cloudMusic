import{d as e,aZ as a,a_ as s,a$ as r,o as t,c as u,s as c,R as o}from"./index.10aafd9c.js";import{s as n}from"./search.335aedb5.js";const d=e({__name:"user",setup(e){var d;const l=null==(d=c().query)?void 0:d.keywords,h=o("changeSearchResultNum");return a.search({keywords:l,type:n.searchType.user}).then((e=>{h(e.result.userprofileCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:l,searchAtOnce:!1})})),(e,a)=>(t(),u("div",null," 用户 "))}});export{d as default};