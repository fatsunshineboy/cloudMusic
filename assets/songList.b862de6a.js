import{d as e,a$ as s,b0 as a,b1 as r,o as t,c as n,q as o,U as c}from"./index.d4524908.js";import{s as u}from"./search.335aedb5.js";const l=e({__name:"songList",setup(e){var l;const d=null==(l=o().query)?void 0:l.keywords,h=c("changeSearchResultNum");return s.search({keywords:d,type:u.searchType.songList}).then((e=>{h(e.result.playlistCount)})),a((()=>{r.emit("changeHeaderSearchValue",{value:d,searchAtOnce:!1})})),(e,s)=>(t(),n("div",null," 歌单 "))}});export{l as default};