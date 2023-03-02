import{d as a,r as s,H as e,I as l,c as i,a as n,b as t,w as o,J as c,o as d,x as r,y as v,_ as u,L as p,l as y,F as g,m,n as h,M as k,t as f,u as L,q as x,v as I,E as b}from"./index.33e10627.js";const P=a=>(r("data-v-8da27459"),a=a(),v(),a),C={id:"tool"},T=[P((()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-shipinbofangshibofang"})],-1)))],w=[P((()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-jiahao1"})],-1)))],_=c('<div class="downloadAll" data-v-8da27459><div class="iconItem" data-v-8da27459><svg class="icon" aria-hidden="true" data-v-8da27459><use xlink:href="#icon-xiazai1" data-v-8da27459></use></svg></div><div class="download" data-v-8da27459>下载全部</div></div>',1),A={class:"content"},N=[P((()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-guanbi"})],-1)))],S={class:"warn"},W=P((()=>n("div",{class:"title"},"替换播放列表",-1))),D=P((()=>n("div",{class:"tip"},'"播放全部"将会替换当前的播放列表，是否继续？',-1))),q={class:"notWarnAgain"},$=P((()=>n("div",{class:"notWarnAgainTitle"},"不再提醒",-1))),B={class:"button"},V=u(a({__name:"PlayAllAndDownloadAll",props:{playList:{type:Array,required:!0}},setup(a){const c=a,r=s(),v=e(),u=s(!1),p=()=>{0!==v.playList.length?v.appendSongToPlayLsit(c.playList,!1):v.setPlayList(c.playList)},y=()=>{0===v.playList.length||JSON.parse(localStorage.getItem("replacePlayListWithoutWarn")||"false")?v.setPlayList(c.playList):u.value=!0},g=()=>{v.setPlayList(c.playList),u.value=!1,localStorage.setItem("replacePlayListWithoutWarn",r.value.checked)};return(a,s)=>{const e=l;return d(),i("div",C,[n("div",{class:"playAll"},[n("div",{class:"iconItem",onClick:y},T),n("div",{class:"title",onClick:y},"播放全部"),n("div",{class:"add",onClick:p},w)]),_,t(e,{modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=a=>u.value=a),"align-center":"",center:"",draggable:"",modal:!1,"close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0,"show-close":!1,class:"elDialog"},{default:o((()=>[n("div",A,[n("div",{class:"close",onClick:s[0]||(s[0]=a=>u.value=!1)},N),n("div",S,[W,D,n("div",q,[n("input",{type:"checkbox",ref_key:"noConfirmWarnRef",ref:r},null,512),$]),n("div",B,[n("div",{class:"continue",onClick:g}," 继续"),n("div",{class:"cancel",onClick:s[1]||(s[1]=a=>u.value=!1)},"取消")])])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-8da27459"]]),j=a=>(r("data-v-ce766c16"),a=a(),v(),a),z={id:"songPlayList"},J={key:0,class:"action"},E=["onDblclick"],F={class:"tool"},H={key:0,class:"nowToPlayIcon"},M={key:0,class:"icon","aria-hidden":"true"},O=[j((()=>n("use",{"xlink:href":"#icon-shengyin"},null,-1)))],R={key:1,class:"icon","aria-hidden":"true"},U=[j((()=>n("use",{"xlink:href":"#icon-shengyin1"},null,-1)))],G={key:1,class:"order"},K=c('<div class="favourite" data-v-ce766c16><div class="iconItem" data-v-ce766c16><svg class="icon" aria-hidden="true" data-v-ce766c16><use xlink:href="#icon-aixin" data-v-ce766c16></use></svg></div></div><div class="download" data-v-ce766c16><div class="iconItem" data-v-ce766c16><svg class="icon" aria-hidden="true" data-v-ce766c16><use xlink:href="#icon-xiazai1" data-v-ce766c16></use></svg></div></div>',2),Q={class:"content"},X={key:0},Y=["value"],Z=["onClick"],aa={key:2},sa=["onClick"],ea=u(a({__name:"SongPlayList",props:{playListDetail:{type:Array,required:!0},titleSetting:{type:Array,required:!0},showToolTitle:{type:Boolean,default:!1},orederBaseCount:{type:Number,default:0}},setup(a){const s=a,l=e(),t=p(),o=a=>a<9?"0"+(a+1):a+1+"";return(a,e)=>(d(),i("div",z,[n("div",{id:"title",class:h({titleWithTool:s.showToolTitle})},[s.showToolTitle?(d(),i("div",J,"操作")):y("",!0),(d(!0),i(g,null,m(s.titleSetting,((a,s)=>(d(),i("div",{class:"titlename",key:s,style:k(`flex:1 1 ${a.length}px;`)},f(a.name),5)))),128))],2),(d(!0),i(g,null,m(s.playListDetail,((a,e)=>{var c;return d(),i("div",{class:h(["singleItem",{bgColor:e%2==0}]),key:e,onDblclick:a=>(a=>{l.setPlayList(s.playListDetail.map((a=>({id:a.id,songName:a.songName,singer:a.singer,singerId:a.singerId,source:a.source,sourceType:a.sourceType,sourceName:a.sourceName,time:a.time})))),l.setNowToPlayId(a)})(e)},[n("div",F,[(null==a?void 0:a.id)===(null==(c=L(l).playList[L(l).nowToPlayId])?void 0:c.id)?(d(),i("div",H,[L(t).musicIsPlaying?(d(),i("svg",M,O)):(d(),i("svg",R,U))])):(d(),i("div",G,f(o(e+s.orederBaseCount)),1)),K]),n("div",Q,[(d(!0),i(g,null,m(s.titleSetting,((s,e)=>(d(),i("div",{class:h(["contentItem",s.props]),key:e,style:k(`flex:1 1 ${s.length}px;`)},["pop"===s.props?(d(),i("span",X,[n("meter",{class:"meter",min:"0",max:"100",value:a[s.props],color:"red"},null,8,Y)])):"singer"===s.props?(d(!0),i(g,{key:1},m(a[s.props],((e,l)=>{var t;return d(),i("span",{key:l},[n("span",{class:"singer",onClick:s=>((a,s)=>{null!=a.singerId[s]&&b.push(`/singer/${a.singerId[s]}`)})(a,l)},f(e),9,Z),x(n("span",null," / ",512),[[I,l!=(null==(t=a[s.props])?void 0:t.length)-1]])])})),128)):"albumName"===s.props?(d(),i("span",aa,[n("span",{class:"albumName",onClick:s=>L(b).push(`/album/${null==a?void 0:a.albumId}`)},f(a[s.props]),9,sa)])):(d(),i("span",{key:3,class:h(s.props)},f(a[s.props]),3))],6)))),128))])],42,E)})),128))]))}}),[["__scopeId","data-v-ce766c16"]]);export{V as P,ea as S};