import{d as a,aZ as e,a_ as s,a$ as r,o as t,c as n,s as c,R as o}from"./index.10aafd9c.js";import{s as u}from"./search.335aedb5.js";const d=a({__name:"singer",setup(a){var d;const h=null==(d=c().query)?void 0:d.keywords,i=o("changeSearchResultNum");return e.search({keywords:h,type:u.searchType.singer}).then((a=>{i(a.result.artistCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:h,searchAtOnce:!1})})),(a,e)=>(t(),n("div",null," 歌手 "))}});export{d as default};