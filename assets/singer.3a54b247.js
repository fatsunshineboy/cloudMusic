import{d as r,s as o,j as c,k as n,o as u,c as l,f as h,i}from"./index.99ea843b.js";import{s as m}from"./search.335aedb5.js";const k=r({__name:"singer",setup(p){var t;const s=(t=h().query)==null?void 0:t.keywords,a=i("changeSearchResultNum");return o.search({keywords:s,type:m.searchType.singer}).then(e=>{a(e.result.artistCount),console.log(e)}),c(()=>{n.emit("changeHeaderSearchValue",{value:s,searchAtOnce:!1})}),(e,_)=>(u(),l("div",null," \u6B4C\u624B "))}});export{k as default};