import{d as o,s as r,j as c,k as n,o as u,c as l,f as h,i}from"./index.91c40d38.js";import{s as m}from"./search.335aedb5.js";const y=o({__name:"podcast",setup(p){var s;const a=(s=h().query)==null?void 0:s.keywords,t=i("changeSearchResultNum");return r.search({keywords:a,type:m.searchType.radioStation}).then(e=>{t(e.result.djRadiosCount),console.log(e)}),c(()=>{n.emit("changeHeaderSearchValue",{value:a,searchAtOnce:!1})}),(e,f)=>(u(),l("div",null," \u64AD\u5BA2 "))}});export{y as default};
