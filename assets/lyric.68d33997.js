import{d as e,b3 as a,b9 as s,ba as r,c as t,e as c,i as n,o}from"./index.33e10627.js";import{s as u}from"./search.335aedb5.js";const l=e({__name:"lyric",setup(e){var l;const d=null==(l=c().query)?void 0:l.keywords,h=n("changeSearchResultNum");return a.search({keywords:d,type:u.searchType.lyric}).then((e=>{h(e.result.songCount)})),s((()=>{r.emit("changeHeaderSearchValue",{value:d,searchAtOnce:!1})})),(e,a)=>(o(),t("div",null," 歌词 "))}});export{l as default};
