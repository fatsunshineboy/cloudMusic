import{d as o,s as r,j as c,k as n,o as u,c as l,f as m,i as h}from"./index.99ea843b.js";import{s as p}from"./search.335aedb5.js";const y=o({__name:"album",setup(i){var s;const a=(s=m().query)==null?void 0:s.keywords,t=h("changeSearchResultNum");return r.search({keywords:a,type:p.searchType.album}).then(e=>{t(e.result.albumCount),console.log(e)}),c(()=>{n.emit("changeHeaderSearchValue",{value:a,searchAtOnce:!1})}),(e,_)=>(u(),l("div",null," \u4E13\u8F91 "))}});export{y as default};