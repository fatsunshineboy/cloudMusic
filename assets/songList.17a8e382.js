import{d as a,aZ as s,a_ as e,a$ as r,o as t,c as n,s as o,R as c}from"./index.10aafd9c.js";import{s as u}from"./search.335aedb5.js";const l=a({__name:"songList",setup(a){var l;const d=null==(l=o().query)?void 0:l.keywords,h=c("changeSearchResultNum");return s.search({keywords:d,type:u.searchType.songList}).then((a=>{h(a.result.playlistCount)})),e((()=>{r.emit("changeHeaderSearchValue",{value:d,searchAtOnce:!1})})),(a,s)=>(t(),n("div",null," 歌单 "))}});export{l as default};
