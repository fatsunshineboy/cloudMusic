import{j as e,d as a,r as i,w as l,o as s,c as n,F as t,h as d,u as o,a1 as c,n as r,a as u,t as m,C as p,e as v,p as y,l as f,_ as g,b as h}from"./index.d4524908.js";import{p as L}from"./playListApi.c89d129e.js";const C=()=>e({url:"/recommend/resource",method:"GET"}),b=e=>(y("data-v-86b01f8a"),e=e(),f(),e),I=["onClick"],_={class:"img"},x=["src"],k={class:"playCount"},R=b((()=>u("div",{class:"iconItem"},[u("svg",{class:"icon","aria-hidden":"true"},[u("use",{"xlink:href":"#icon-bofang"})])],-1))),j={class:"count"},P=b((()=>u("div",{class:"playIcon"},[u("svg",{class:"icon","aria-hidden":"true"},[u("use",{"xlink:href":"#icon-shipinbofangshibofang"})])],-1))),q={class:"title"},w=g(a({__name:"RecommendItem",props:{itmeLineCount:{type:Number,required:!0,default:5},playList:{type:Array,required:!0}},setup(e){const a=e,y=v();let f=[1287293193,1463586082],g=i();return l((()=>a.playList),(async()=>{let e=a.playList;for(let a=0;a<(null==e?void 0:e.length);a++){let i=e[a];-1!=f.indexOf(i.userId)&&await L.getPlaylistDetail({id:i.id}).then((i=>{e.splice(a,1,i.playlist)}))}g.value=e}),{immediate:!0}),(e,i)=>(s(),n("div",{id:"recommendItem",style:c({"--itmeLineCount":a.itmeLineCount})},[(s(!0),n(t,null,d(o(g),((e,i)=>(s(),n("div",{class:r(["item",{clearMarginRight:(i+1)%a.itmeLineCount==0}]),onClick:a=>o(y).push(`/songlist/${null==e?void 0:e.id}`)},[u("div",_,[u("img",{src:`${(null==e?void 0:e.picUrl)||(null==e?void 0:e.coverImgUrl)}?param=300y300`},null,8,x),u("div",k,[R,u("div",j,m(o(p)((null==e?void 0:e.playcount)||(null==e?void 0:e.playCount)||0)),1)]),P]),u("div",q,m(null==e?void 0:e.name),1)],10,I)))),256))],4))}}),[["__scopeId","data-v-86b01f8a"]]),A={id:"personalRecommend"},U=u("div",{class:"banner"},null,-1),$={class:"recommendPlayList"},D=u("div",{class:"title"},"推荐歌单 >",-1),E={class:"playList"},F=a({__name:"PersonalRecommend",setup(e){let a=i([]);return C().then((e=>{var i;a.value=null==(i=e.recommend)?void 0:i.slice(0,9)})),(e,i)=>(s(),n("div",A,[U,u("div",$,[D,u("div",E,[h(w,{"itme-line-count":5,"play-list":o(a)},null,8,["play-list"])])])]))}});export{F as default};
