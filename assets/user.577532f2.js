import{d as e,b3 as s,b9 as a,ba as r,c as t,e as u,i as c,o}from"./index.47c8520f.js";import{s as n}from"./search.335aedb5.js";const l=e({__name:"user",setup(e){var l;const d=null==(l=u().query)?void 0:l.keywords,h=c("changeSearchResultNum");return s.search({keywords:d,type:n.searchType.user}).then((e=>{h(e.result.userprofileCount)})),a((()=>{r.emit("changeHeaderSearchValue",{value:d,searchAtOnce:!1})})),(e,s)=>(o(),t("div",null," 用户 "))}});export{l as default};