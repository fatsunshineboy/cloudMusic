import{d as a,k as e,r as s,y as l,b7 as d,b8 as i,o as t,c as n,a as c,b as o,u as v,F as r,l as u,z as b,m,e as g,b1 as p,G as y,n as h,t as k,i as f,_ as w}from"./index.21005268.js";import{E as x,P as A}from"./PlayAllAndDownloadAll.c8849e43.js";import{s as q}from"./search.335aedb5.js";const _={id:"single"},z={class:"playAllAndDownloadAllVue"},D=m('<div id="title" data-v-e5ab3bdc><div class="title" data-v-e5ab3bdc>音乐标题</div><div class="songer" data-v-e5ab3bdc>歌手</div><div class="album" data-v-e5ab3bdc>专辑</div><div class="time" data-v-e5ab3bdc>时长</div><div class="hot" data-v-e5ab3bdc>热度</div></div>',1),I=["onDblclick"],T={class:"tool"},j={class:"order"},C=m('<div class="favourite" data-v-e5ab3bdc><div class="iconItem" data-v-e5ab3bdc><svg class="icon" aria-hidden="true" data-v-e5ab3bdc><use xlink:href="#icon-aixin" data-v-e5ab3bdc></use></svg></div></div><div class="download" data-v-e5ab3bdc><div class="iconItem" data-v-e5ab3bdc><svg class="icon" aria-hidden="true" data-v-e5ab3bdc><use xlink:href="#icon-xiazai1" data-v-e5ab3bdc></use></svg></div></div>',2),N={class:"content"},P={class:"title"},S={class:"songer"},E={class:"album"},V={class:"time"},F={class:"hot"},G=["value"],H={class:"pagination"},L=w(a({__name:"single",setup(a){const m=g(),w=f("changeSearchResultNum"),L=e();let O=s([]),R=s(),U=s(1),B=s(100),J=s(0);l((()=>U.value),(()=>{K()}));const K=()=>{R.value=[],O.value=[],p.search({keywords:m.query.keywords,type:q.searchType.single,limit:B.value,offset:(U.value-1)*B.value}).then((a=>{let e=a.result;e&&(e.songs.forEach((a=>{O.value.push({id:a.id,songName:a.name,singer:a.ar[0].name,source:m.query.keywords,sourceType:1,time:y(a.dt/1e3)})})),J.value=(null==e?void 0:e.songCount)>300?300:null==e?void 0:e.songCount,w(J.value),R.value=e.songs)}))};K(),l((()=>m.query.keywords),(()=>{K(),U.value=1}));const M=a=>{let e=a+(U.value-1)*B.value+1;return e<10?"0"+e:e+""};return d((()=>{i.emit("changeHeaderSearchValue",{value:m.query.keywords,searchAtOnce:!1})})),(a,e)=>{const s=x;return t(),n("div",_,[c("div",z,[o(A,{"play-list":v(O)},null,8,["play-list"])]),D,(t(!0),n(r,null,u(v(R),((a,e)=>(t(),n("div",{class:h(["singleItem",{bgColor:e%2==0}]),key:e,onDblclick:e=>(a=>{let e={id:a.id,songName:a.name,singer:a.ar[0].name,source:m.query.keywords,sourceType:1,time:y(a.dt/1e3)};L.appendSongToPlayLsit([e])})(a)},[c("div",T,[c("div",j,k(M(e)),1),C]),c("div",N,[c("div",P,k(a.name),1),c("div",S,k(a.ar[0].name),1),c("div",E,k(a.al.name),1),c("div",V,k(v(y)(a.dt/1e3)),1),c("div",F,[c("meter",{min:"0",max:"100",value:a.pop,color:"red"},null,8,G)])])],42,I)))),128)),c("div",H,[o(s,{small:"",background:"",layout:"prev, pager, next",total:v(J),"page-size":v(B),"current-page":v(U),"onUpdate:current-page":e[0]||(e[0]=a=>b(U)?U.value=a:U=a),"hide-on-single-page":!0,class:"mt-4"},null,8,["total","page-size","current-page"])])])}}}),[["__scopeId","data-v-e5ab3bdc"]]);export{L as default};
