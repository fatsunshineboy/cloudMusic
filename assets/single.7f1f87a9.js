import{d as a,g as e,r as s,w as l,a_ as d,a$ as i,o as t,c as n,a as v,b as o,u as r,F as c,h as u,q as g,i as m,s as f,aZ as p,j as b,n as h,t as y,R as k,_ as w}from"./index.10aafd9c.js";import{E as x,P as A}from"./PlayAllAndDownloadAll.408b21c4.js";import{s as _}from"./search.335aedb5.js";const j={id:"single"},q={class:"playAllAndDownloadAllVue"},D=m('<div id="title" data-v-21febd60><div class="title" data-v-21febd60>音乐标题</div><div class="songer" data-v-21febd60>歌手</div><div class="album" data-v-21febd60>专辑</div><div class="time" data-v-21febd60>时长</div><div class="hot" data-v-21febd60>热度</div></div>',1),I=["onDblclick"],z={class:"tool"},C={class:"order"},N=m('<div class="favourite" data-v-21febd60><div class="iconItem" data-v-21febd60><svg class="icon" aria-hidden="true" data-v-21febd60><use xlink:href="#icon-aixin" data-v-21febd60></use></svg></div></div><div class="download" data-v-21febd60><div class="iconItem" data-v-21febd60><svg class="icon" aria-hidden="true" data-v-21febd60><use xlink:href="#icon-xiazai1" data-v-21febd60></use></svg></div></div>',2),P={class:"content"},S={class:"title"},E={class:"songer"},R={class:"album"},T={class:"time"},V={class:"hot"},F=["value"],H={class:"pagination"},L=w(a({__name:"single",setup(a){const m=f(),w=k("changeSearchResultNum"),L=e();let O=s([]),U=s(),Z=s(1),$=s(100),B=s(0);l((()=>Z.value),(()=>{G()}));const G=()=>{U.value=[],O.value=[],p.search({keywords:m.query.keywords,type:_.searchType.single,limit:$.value,offset:(Z.value-1)*$.value}).then((a=>{let e=a.result;e&&(e.songs.forEach((a=>{O.value.push({id:a.id,songName:a.name,singer:a.ar[0].name,source:"搜索页",time:b(a.dt/1e3)})})),B.value=(null==e?void 0:e.songCount)>300?300:null==e?void 0:e.songCount,w(B.value),U.value=e.songs)}))};G(),l((()=>m.query.keywords),(()=>{G(),Z.value=1}));const J=a=>{let e=a+(Z.value-1)*$.value+1;return e<10?"0"+e:e+""};return d((()=>{i.emit("changeHeaderSearchValue",{value:m.query.keywords,searchAtOnce:!1})})),(a,e)=>{const s=x;return t(),n("div",j,[v("div",q,[o(A,{"play-list":r(O)},null,8,["play-list"])]),D,(t(!0),n(c,null,u(r(U),((a,e)=>(t(),n("div",{class:h(["singleItem",{bgColor:e%2==0}]),key:e,onDblclick:e=>(a=>{let e={id:a.id,songName:a.name,singer:a.ar[0].name,source:"搜索页",time:b(a.dt/1e3)};L.appendSongToPlayLsit([e])})(a)},[v("div",z,[v("div",C,y(J(e)),1),N]),v("div",P,[v("div",S,y(a.name),1),v("div",E,y(a.ar[0].name),1),v("div",R,y(a.al.name),1),v("div",T,y(r(b)(a.dt/1e3)),1),v("div",V,[v("meter",{min:"0",max:"100",value:a.pop,color:"red"},null,8,F)])])],42,I)))),128)),v("div",H,[o(s,{small:"",background:"",layout:"prev, pager, next",total:r(B),"page-size":r($),"current-page":r(Z),"onUpdate:current-page":e[0]||(e[0]=a=>g(Z)?Z.value=a:Z=a),"hide-on-single-page":!0,class:"mt-4"},null,8,["total","page-size","current-page"])])])}}}),[["__scopeId","data-v-21febd60"]]);export{L as default};