import{d as a,g as e,r as s,w as l,b0 as d,b1 as i,o as t,c as n,a as c,b as o,u as v,F as r,h as u,m as b,i as m,q as g,a$ as p,A as y,n as h,t as k,U as f,_ as w}from"./index.8969ea41.js";import{E as x,P as A}from"./PlayAllAndDownloadAll.87269915.js";import{s as q}from"./search.335aedb5.js";const _={id:"single"},D={class:"playAllAndDownloadAllVue"},I=m('<div id="title" data-v-e5ab3bdc><div class="title" data-v-e5ab3bdc>音乐标题</div><div class="songer" data-v-e5ab3bdc>歌手</div><div class="album" data-v-e5ab3bdc>专辑</div><div class="time" data-v-e5ab3bdc>时长</div><div class="hot" data-v-e5ab3bdc>热度</div></div>',1),T=["onDblclick"],j={class:"tool"},z={class:"order"},C=m('<div class="favourite" data-v-e5ab3bdc><div class="iconItem" data-v-e5ab3bdc><svg class="icon" aria-hidden="true" data-v-e5ab3bdc><use xlink:href="#icon-aixin" data-v-e5ab3bdc></use></svg></div></div><div class="download" data-v-e5ab3bdc><div class="iconItem" data-v-e5ab3bdc><svg class="icon" aria-hidden="true" data-v-e5ab3bdc><use xlink:href="#icon-xiazai1" data-v-e5ab3bdc></use></svg></div></div>',2),N={class:"content"},P={class:"title"},S={class:"songer"},E={class:"album"},U={class:"time"},V={class:"hot"},F=["value"],H={class:"pagination"},L=w(a({__name:"single",setup(a){const m=g(),w=f("changeSearchResultNum"),L=e();let O=s([]),R=s(),$=s(1),B=s(100),G=s(0);l((()=>$.value),(()=>{J()}));const J=()=>{R.value=[],O.value=[],p.search({keywords:m.query.keywords,type:q.searchType.single,limit:B.value,offset:($.value-1)*B.value}).then((a=>{let e=a.result;e&&(e.songs.forEach((a=>{O.value.push({id:a.id,songName:a.name,singer:a.ar[0].name,source:m.query.keywords,sourceType:1,time:y(a.dt/1e3)})})),G.value=(null==e?void 0:e.songCount)>300?300:null==e?void 0:e.songCount,w(G.value),R.value=e.songs)}))};J(),l((()=>m.query.keywords),(()=>{J(),$.value=1}));const K=a=>{let e=a+($.value-1)*B.value+1;return e<10?"0"+e:e+""};return d((()=>{i.emit("changeHeaderSearchValue",{value:m.query.keywords,searchAtOnce:!1})})),(a,e)=>{const s=x;return t(),n("div",_,[c("div",D,[o(A,{"play-list":v(O)},null,8,["play-list"])]),I,(t(!0),n(r,null,u(v(R),((a,e)=>(t(),n("div",{class:h(["singleItem",{bgColor:e%2==0}]),key:e,onDblclick:e=>(a=>{let e={id:a.id,songName:a.name,singer:a.ar[0].name,source:m.query.keywords,sourceType:1,time:y(a.dt/1e3)};L.appendSongToPlayLsit([e])})(a)},[c("div",j,[c("div",z,k(K(e)),1),C]),c("div",N,[c("div",P,k(a.name),1),c("div",S,k(a.ar[0].name),1),c("div",E,k(a.al.name),1),c("div",U,k(v(y)(a.dt/1e3)),1),c("div",V,[c("meter",{min:"0",max:"100",value:a.pop,color:"red"},null,8,F)])])],42,T)))),128)),c("div",H,[o(s,{small:"",background:"",layout:"prev, pager, next",total:v(G),"page-size":v(B),"current-page":v($),"onUpdate:current-page":e[0]||(e[0]=a=>b($)?$.value=a:$=a),"hide-on-single-page":!0,class:"mt-4"},null,8,["total","page-size","current-page"])])])}}}),[["__scopeId","data-v-e5ab3bdc"]]);export{L as default};
