import{d as o,s as n,j as r,k as c,o as u,c as l,f as h,i}from"./index.91c40d38.js";import{s as m}from"./search.335aedb5.js";const k=o({__name:"single",setup(p){var a;const s=(a=h().query)==null?void 0:a.keywords,t=i("changeSearchResultNum");return n.search({keywords:s,type:m.searchType.single}).then(e=>{t(e.result.songCount),console.log(e)}),r(()=>{c.emit("changeHeaderSearchValue",{value:s,searchAtOnce:!1})}),(e,_)=>(u(),l("div",null," \u5355\u66F2 "))}});export{k as default};
