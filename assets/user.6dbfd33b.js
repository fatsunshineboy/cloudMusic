import{d as t,s as o,aI as c,aJ as u,o as n,c as l,u as h,i as m}from"./index.9b539486.js";import{s as p}from"./search.335aedb5.js";const g=t({__name:"user",setup(i){var a;const s=(a=h().query)==null?void 0:a.keywords,r=m("changeSearchResultNum");return o.search({keywords:s,type:p.searchType.user}).then(e=>{r(e.result.userprofileCount),console.log(e)}),c(()=>{u.emit("changeHeaderSearchValue",{value:s,searchAtOnce:!1})}),(e,_)=>(n(),l("div",null," \u7528\u6237 "))}});export{g as default};