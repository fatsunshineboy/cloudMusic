import{d as k,r as n,w as S,j as w,k as h,o as l,c as v,F as x,l as I,u as m,a as g,f as B,s as F,n as C,e as a,t as o,m as E,q,v as A,i as D,_ as N}from"./index.5a880748.js";import{s as L}from"./search.335aedb5.js";const O=i=>(q("data-v-15452bab"),i=i(),A(),i),R={id:"single"},V=g('<div class="tool" data-v-15452bab></div><div id="title" data-v-15452bab><div class="title" data-v-15452bab>\u97F3\u4E50\u6807\u9898</div><div class="songer" data-v-15452bab>\u6B4C\u624B</div><div class="album" data-v-15452bab>\u4E13\u8F91</div><div class="time" data-v-15452bab>\u65F6\u957F</div><div class="hot" data-v-15452bab>\u70ED\u5EA6</div></div>',2),j=["onDblclick"],z={class:"tool"},T={class:"order"},H=g('<div class="favourite" data-v-15452bab><div class="iconItem" data-v-15452bab><svg class="icon" aria-hidden="true" data-v-15452bab><use xlink:href="#icon-aixin" data-v-15452bab></use></svg></div></div><div class="download" data-v-15452bab><div class="iconItem" data-v-15452bab><svg class="icon" aria-hidden="true" data-v-15452bab><use xlink:href="#icon-xiazai1" data-v-15452bab></use></svg></div></div>',2),M={class:"content"},$={class:"title"},G={class:"songer"},J={class:"album"},K={class:"time"},P={class:"hot"},Q=["value"],U=O(()=>a("div",{class:"page"},null,-1)),W=k({__name:"single",setup(i){const c=B(),p=D("changeSearchResultNum");let r=n(),u=n(1),d=n(100);const _=()=>{F.search({keywords:c.query.keywords,type:L.searchType.single,limit:d.value,offset:(u.value-1)*d.value}).then(e=>{console.log(e);let s=e.result;s&&(p(s==null?void 0:s.songCount),r.value=s.songs)})};_(),S(()=>c.query.keywords,()=>{_()});const f=e=>{h.emit("switchSong",{songId:e,playAtOnce:!0})},y=e=>{let s=e+(u.value-1)*d.value+1;return s<10?0+""+s:s+""};return w(()=>{h.emit("changeHeaderSearchValue",{value:c.query.keywords,searchAtOnce:!1})}),(e,s)=>(l(),v("div",R,[V,(l(!0),v(x,null,I(m(r),(t,b)=>(l(),v("div",{class:C(["singleItem",{bgColor:b%2===0}]),onDblclick:X=>f(t.id)},[a("div",z,[a("div",T,o(y(b)),1),H]),a("div",M,[a("div",$,o(t.name),1),a("div",G,o(t.ar[0].name),1),a("div",J,o(t.al.name),1),a("div",K,o(m(E)(t.dt/1e3)),1),a("div",P,[a("meter",{min:"0",max:"100",value:t.pop,color:"red"},null,8,Q)])])],42,j))),256)),U]))}});const ss=N(W,[["__scopeId","data-v-15452bab"]]);export{ss as default};