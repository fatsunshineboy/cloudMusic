import{d as e,aZ as a,a_ as s,a$ as r,o as c,c as o,s as t,R as d}from"./index.c3c5c69a.js";import{s as n}from"./search.335aedb5.js";const u=e({__name:"video",setup(e){var u;const h=null==(u=t().query)?void 0:u.keywords,i=d("changeSearchResultNum");return a.search({keywords:h,type:n.searchType.video}).then((e=>{i(e.result.videoCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:h,searchAtOnce:!1})})),(e,a)=>(c(),o("div",null," 视频 "))}});export{u as default};
