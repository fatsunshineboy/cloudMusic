import{d as e,b3 as s,b9 as a,ba as r,c as t,e as n,i as o,o as c}from"./index.92a5387d.js";import{s as u}from"./search.335aedb5.js";const l=e({__name:"songList",setup(e){var l;const d=null==(l=n().query)?void 0:l.keywords,i=o("changeSearchResultNum");return s.search({keywords:d,type:u.searchType.songList}).then((e=>{i(e.result.playlistCount)})),a((()=>{r.emit("changeHeaderSearchValue",{value:d,searchAtOnce:!1})})),(e,s)=>(c(),t("div",null," 歌单 "))}});export{l as default};