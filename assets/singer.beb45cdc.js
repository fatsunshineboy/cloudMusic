import{d as e,s as a,aW as s,aX as r,o as t,c as n,u as c,i as u}from"./index.8df841c8.js";import{s as o}from"./search.335aedb5.js";const d=e({__name:"singer",setup(e){var d;const i=null==(d=c().query)?void 0:d.keywords,h=u("changeSearchResultNum");return a.search({keywords:i,type:o.searchType.singer}).then((e=>{h(e.result.artistCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:i,searchAtOnce:!1})})),(e,a)=>(t(),n("div",null," 歌手 "))}});export{d as default};
