import{d as e,H as a,r as s,k as l,b9 as t,ba as n,c as r,a as o,b as u,u as i,s as p,e as d,b3 as c,C as m,D as g,o as v,i as y,_ as h}from"./index.47c8520f.js";import{E as b}from"./el-select.7c7d0f2c.js";import{s as f}from"./search.335aedb5.js";import{P as k,S as w}from"./SongPlayList.b7c46a05.js";const N={id:"single"},_={class:"playAllAndDownloadAllVue"},j={class:"pagination"},q=h(e({__name:"single",setup(e){const h=d(),q=y("changeSearchResultNum");a();let A=s([]),S=s(),x=s(1),C=s(100),I=s(0);l((()=>x.value),(()=>{z()}));const z=()=>{S.value=[],A.value=[],c.search({keywords:h.query.keywords,type:f.searchType.single,limit:C.value,offset:(x.value-1)*C.value}).then((e=>{let a=e.result;a&&(a.songs.forEach((e=>{A.value.push({id:e.id,songName:e.name,singer:e.ar.map((e=>e.name)),singerId:e.ar.map((e=>e.id)),source:h.query.keywords,sourceType:m.search,time:g(e.dt/1e3),albumName:e.al.name,albumId:e.al.id,pop:e.pop})})),I.value=(null==a?void 0:a.songCount)>300?300:null==a?void 0:a.songCount,q(I.value),S.value=a.songs)}))};z(),l((()=>h.query.keywords),(()=>{z(),x.value=1}));const D=s([{name:"音乐标题",props:"songName",length:220},{name:"歌手",props:"singer",length:75},{name:"专辑",props:"albumName",length:75},{name:"时长",props:"time",length:15},{name:"热度",props:"pop",length:40}]);return t((()=>{n.emit("changeHeaderSearchValue",{value:h.query.keywords,searchAtOnce:!1})})),(e,a)=>{const s=b;return v(),r("div",N,[o("div",_,[u(k,{"play-list":i(A)},null,8,["play-list"])]),u(w,{"play-list-detail":i(A),"title-setting":D.value,"oreder-base-count":(i(x)-1)*i(C)},null,8,["play-list-detail","title-setting","oreder-base-count"]),o("div",j,[u(s,{small:"",background:"",layout:"prev, pager, next",total:i(I),"page-size":i(C),"current-page":i(x),"onUpdate:current-page":a[0]||(a[0]=e=>p(x)?x.value=e:x=e),"hide-on-single-page":!0,class:"mt-4"},null,8,["total","page-size","current-page"])])])}}}),[["__scopeId","data-v-6b18935f"]]);export{q as default};