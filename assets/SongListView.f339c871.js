import{d as a,g as e,o as l,c as s,F as i,h as t,i as n,n as d,a as o,t as v,_ as c,j as r,u,k as m,e as p,p as g,l as b,r as y,w as h,b as k,m as I,q as f,s as C,v as x,x as _,y as T,z as L,A as N,B as S,C as $}from"./index.d4524908.js";import{E as w,P as D}from"./PlayAllAndDownloadAll.e67f91c7.js";import{p as P}from"./playListApi.c89d129e.js";const j={id:"songPlayList"},A=n('<div id="title" data-v-8ed6a72c><div class="action" data-v-8ed6a72c>操作</div><div class="title" data-v-8ed6a72c>标题</div><div class="songer" data-v-8ed6a72c>歌手</div><div class="album" data-v-8ed6a72c>专辑</div><div class="time" data-v-8ed6a72c>时间</div></div>',1),z=["onDblclick"],U={class:"tool"},B={class:"order"},R=n('<div class="favourite" data-v-8ed6a72c><div class="iconItem" data-v-8ed6a72c><svg class="icon" aria-hidden="true" data-v-8ed6a72c><use xlink:href="#icon-aixin" data-v-8ed6a72c></use></svg></div></div><div class="download" data-v-8ed6a72c><div class="iconItem" data-v-8ed6a72c><svg class="icon" aria-hidden="true" data-v-8ed6a72c><use xlink:href="#icon-xiazai1" data-v-8ed6a72c></use></svg></div></div>',2),q={class:"content"},E={class:"title"},F={class:"songer"},G={class:"album"},H={class:"time"},M=c(a({__name:"SongPlayList",props:["playListDetail"],setup(a){const n=a,c=e(),r=a=>a<10?"0"+(a+1):a+"";return(a,e)=>(l(),s("div",j,[A,(l(!0),s(i,null,t(n.playListDetail,((a,e)=>(l(),s("div",{class:d(["singleItem",{bgColor:e%2==0}]),key:e,onDblclick:a=>(a=>{c.setPlayList(n.playListDetail.map((a=>({id:a.id,songName:a.songName,singer:a.singer,source:a.source,sourceType:a.sourceType,playListName:a.playListName,time:a.time})))),c.setNowToPlayId(a)})(e)},[o("div",U,[o("div",B,v(r(e)),1),R]),o("div",q,[o("div",E,v(a.songName),1),o("div",F,v(a.singer),1),o("div",G,v(a.albumName),1),o("div",H,v(a.time),1)])],42,z)))),128))]))}}),[["__scopeId","data-v-8ed6a72c"]]),O=a=>r({url:`/comment/playlist?timerstamp=${Date.now()}`,method:"GET",params:a}),V=a=>r({url:`/comment/like?timerstamp=${Date.now()}`,method:"GET",params:a});var Y=(a=>(a[a.song=0]="song",a[a.mv=1]="mv",a[a.playlist=2]="playlist",a[a.album=3]="album",a[a.radiioStationProgram=4]="radiioStationProgram",a[a.video=5]="video",a[a.post=6]="post",a[a.radiioStation=7]="radiioStation",a))(Y||{});const J={class:"contentItem"},K=["src"],Q={class:"detail"},W={class:"nameAndText"},X={class:"text"},Z={key:0,id:"reply"},aa={class:"text"},ea={class:"timeAndTool"},la={class:"time"},sa={class:"commentTool"},ia=(a=>(g("data-v-990b3a62"),a=a(),b(),a))((()=>o("div",{class:"support"},[o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-dianzan"})])],-1))),ta={class:"supportCount"},na=n('<div class="gap" data-v-990b3a62>|</div><div class="share" data-v-990b3a62><svg class="icon" aria-hidden="true" data-v-990b3a62><use xlink:href="#icon-fenxiang" data-v-990b3a62></use></svg></div><div class="gap" data-v-990b3a62>|</div><div class="reply" data-v-990b3a62><svg class="icon" aria-hidden="true" data-v-990b3a62><use xlink:href="#icon-pinglun" data-v-990b3a62></use></svg></div>',4),da=c(a({__name:"Comment",props:{commentItem:{type:Object,required:!0},likeCommentButton:{type:Function,required:!0}},setup(a){const e=p();return(i,t)=>{var n,d,c,r,p,g,b,y,h,k,I,f,C,x;return l(),s("div",J,[o("img",{src:`${null==(d=null==(n=a.commentItem)?void 0:n.user)?void 0:d.avatarUrl}?param=60y60`,onClick:t[0]||(t[0]=l=>{var s,i;return u(e).push(`/user/${null==(i=null==(s=a.commentItem)?void 0:s.user)?void 0:i.userId}`)})},null,8,K),o("div",Q,[o("div",W,[o("span",{class:"name",onClick:t[1]||(t[1]=l=>{var s,i;return u(e).push(`/user/${null==(i=null==(s=a.commentItem)?void 0:s.user)?void 0:i.userId}`)})},v(null==(r=null==(c=a.commentItem)?void 0:c.user)?void 0:r.nickname),1),o("span",X," : "+v(null==(p=a.commentItem)?void 0:p.content),1)]),(null==(b=null==(g=a.commentItem)?void 0:g.beReplied)?void 0:b.length)?(l(),s("div",Z,[o("div",{class:"name",onClick:t[2]||(t[2]=l=>{var s,i,t;return u(e).push(`/user/${null==(t=null==(i=null==(s=a.commentItem)?void 0:s.beReplied[0])?void 0:i.user)?void 0:t.userId}`)})},"@"+v(null==(k=null==(h=null==(y=a.commentItem)?void 0:y.beReplied[0])?void 0:h.user)?void 0:k.nickname),1),o("div",aa," : "+v(null==(f=null==(I=a.commentItem)?void 0:I.beReplied[0])?void 0:f.content),1)])):m("",!0),o("div",ea,[o("div",la,v(null==(C=a.commentItem)?void 0:C.timeStr),1),o("div",sa,[o("div",{class:"supportAndCount",onClick:t[3]||(t[3]=e=>{var l,s;return a.likeCommentButton(null==(l=a.commentItem)?void 0:l.commentId,(null==(s=a.commentItem)?void 0:s.liked)?0:1)})},[ia,o("span",ta,v(null==(x=a.commentItem)?void 0:x.likedCount),1)]),na])])])])}}}),[["__scopeId","data-v-990b3a62"]]),oa=a=>(g("data-v-1033bb6d"),a=a(),b(),a),va={id:"comment"},ca=n('<textarea class="textarea customeScroll" name="saysths" rows="3" wrap="soft" data-v-1033bb6d></textarea><div class="tool" data-v-1033bb6d><div class="iconItem" data-v-1033bb6d><div class="topic" data-v-1033bb6d><svg class="icon" aria-hidden="true" data-v-1033bb6d><use xlink:href="#icon-hashjinghao" data-v-1033bb6d></use></svg></div><div class="at" data-v-1033bb6d><svg class="icon" aria-hidden="true" data-v-1033bb6d><use xlink:href="#icon-aite1" data-v-1033bb6d></use></svg></div><div class="emoji" data-v-1033bb6d><svg class="icon" aria-hidden="true" data-v-1033bb6d><use xlink:href="#icon-xiaolian1" data-v-1033bb6d></use></svg></div></div><div class="sendComment" data-v-1033bb6d>评论</div></div>',2),ra={class:"content"},ua={key:0,class:"noComment"},ma={key:1,class:"hotComment"},pa=oa((()=>o("div",{class:"title"},"精彩评论",-1))),ga={key:2,class:"moreHotComment"},ba={key:3,class:"latestComment"},ya={class:"title"},ha={class:"pagination"},ka=c(a({__name:"Comment",props:{type:{type:Number,required:!0}},setup(a,{expose:e}){const n=a,c=f();let r=y(),p=y(),g=y(),b=y(0),C=y(1),x=y(100);const _=(a,e)=>{V({id:c.params.id,cid:a,t:e,type:n.type}).then((a=>{T()}))},T=()=>{if(n.type===Y.playlist)L(x.value,(C.value-1)*x.value)},L=(a,e,l)=>{O({id:c.params.id,limit:a,offset:e}).then((a=>{var e;r.value=null==a?void 0:a.comments,b.value=a.total,p.value=null==(e=null==a?void 0:a.hotComments)?void 0:e.slice(0,10),g.value=null==a?void 0:a.moreHot}))};return h((()=>C.value),(()=>{r.value=[],p.value=[],T()}),{immediate:!0}),e({getComment:T}),(a,e)=>{var n,c,y,h,f;const T=w;return l(),s("div",va,[ca,o("div",ra,[(null==(n=u(r))?void 0:n.length)||(null==(c=u(p))?void 0:c.length)?m("",!0):(l(),s("div",ua," 还没有评论，快来抢沙发~ ")),(null==(y=u(p))?void 0:y.length)?(l(),s("div",ma,[pa,(l(!0),s(i,null,t(u(p),((a,e)=>(l(),s("div",{class:"contentItem borderBottom",key:e},[k(da,{"comment-item":a,"like-comment-button":_},null,8,["comment-item"])])))),128))])):m("",!0),(null==(h=u(p))?void 0:h.length)&&u(g)?(l(),s("div",ga," 更多精彩评论 > ")):m("",!0),(null==(f=u(r))?void 0:f.length)?(l(),s("div",ba,[o("div",ya,"最新评论("+v(u(b))+")",1),(l(!0),s(i,null,t(u(r),((a,e)=>{var i;return l(),s("div",{class:d(["contentItem",{borderBottom:e!=(null==(i=u(r))?void 0:i.length)-1}]),key:e},[k(da,{"comment-item":a,"like-comment-button":_},null,8,["comment-item"])],2)})),128))])):m("",!0),o("div",ha,[k(T,{small:"",background:"",layout:"prev, pager, next",total:u(b),"page-size":u(x),"current-page":u(C),"onUpdate:current-page":e[0]||(e[0]=a=>I(C)?C.value=a:C=a),"hide-on-single-page":!0,class:"mt-4"},null,8,["total","page-size","current-page"])])])])}}}),[["__scopeId","data-v-1033bb6d"]]),Ia=a=>(g("data-v-97c5b7c8"),a=a(),b(),a),fa={id:"subscribers"},Ca={key:0,class:"nosubscribers"},xa=["onClick"],_a=["src"],Ta={class:"userAndIntro"},La={class:"user"},Na={class:"name"},Sa={class:"gender male"},$a=[Ia((()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-nanxing"})],-1)))],wa={class:"gender female"},Da=[Ia((()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-nvxing"})],-1)))],Pa={class:"pagination"},ja=c(a({__name:"Subscribers",setup(a){const e=f(),n=p();let d=y(0),c=y(1),r=y(60),g=y();const b=()=>{g.value=[],P.getPlaylistSubscribers({id:e.params.id,limit:r.value,offset:(c.value-1)*r.value}).then((a=>{d.value=a.total,g.value=a.subscribers}))};return b(),h((()=>c.value),(()=>{b()})),(a,e)=>{const p=w;return l(),s("div",fa,[u(g).length?m("",!0):(l(),s("div",Ca,"暂无收藏者")),(l(!0),s(i,null,t(u(g),((a,e)=>(l(),s("div",{class:"subscriber",key:e,onClick:e=>u(n).push(`/user/${null==a?void 0:a.userId}`)},[o("img",{src:`${null==a?void 0:a.avatarUrl}?param=110y110`},null,8,_a),o("div",Ta,[o("div",La,[o("div",Na,v(null==a?void 0:a.nickname),1),C(o("div",Sa,$a,512),[[x,1===(null==a?void 0:a.gender)]]),C(o("div",wa,Da,512),[[x,2===(null==a?void 0:a.gender)]])]),C(o("div",{class:"intro"},v(null==a?void 0:a.signature),513),[[x,null==a?void 0:a.signature]])])],8,xa)))),128)),o("div",Pa,[k(p,{small:"",background:"",layout:"prev, pager, next",total:u(d),"page-size":u(r),"current-page":u(c),"onUpdate:current-page":e[0]||(e[0]=a=>I(c)?c.value=a:c=a),"hide-on-single-page":!0,class:"mt-4"},null,8,["total","page-size","current-page"])])])}}}),[["__scopeId","data-v-97c5b7c8"]]),Aa=a=>(g("data-v-f998fda0"),a=a(),b(),a),za={id:"songList"},Ua={class:"header"},Ba={class:"songListImg"},Ra=["src"],qa={class:"detail"},Ea={class:"title"},Fa=Aa((()=>o("div",{class:"alias"},"歌单",-1))),Ga={class:"name"},Ha=Aa((()=>o("div",{class:"edit iconItem"},null,-1))),Ma={class:"creater"},Oa={class:"createrImg"},Va=["src"],Ya={class:"time"},Ja={class:"tool"},Ka={class:"introduce"},Qa={class:"tags"},Wa=Aa((()=>o("span",{class:"introduceTitle"},"标签 : ",-1))),Xa={class:"songsCount"},Za=Aa((()=>o("span",{class:"introduceTitle"},"歌曲 : ",-1))),ae={class:"playTime"},ee=Aa((()=>o("span",{class:"introduceTitle"},"播放 : ",-1))),le={class:"brief"},se=Aa((()=>o("span",{class:"introduceTitle"},"简介 : ",-1))),ie={class:"briefContent"},te={class:"navigate"},ne=c(a({__name:"SongListView",setup(a){const e=f(),i=y();let t=y(!1),n=y(!1);h((()=>e.params.id),(()=>{var a;c.value=1,r.value=[],g(),null==(a=i.value)||a.getComment()}));let c=y(1),r=y(),p=y([]);const g=()=>{P.getPlaylistDetail({id:e.params.id}).then((a=>{var l,s,i,d,o;if(r.value=a.playlist,(null==(s=null==(l=r.value)?void 0:l.description)?void 0:s.split("\n").length)>=2&&(t.value=!0,n.value=!1),null==(d=null==(i=r.value)?void 0:i.trackIds)?void 0:d.length){let a=null==(o=r.value)?void 0:o.trackIds.map((a=>a.id));L.getSongDetail({ids:a.join(",")}).then((a=>{p.value=a.songs.map((a=>{var l;return{id:a.id,songName:a.name,singer:a.ar[0].name,source:e.params.id,sourceType:2,playListName:null==(l=r.value)?void 0:l.name,albumName:a.al.name,time:N(a.dt/1e3)}}))}))}})).catch((a=>{S.replace("/")}))};g();const b=a=>{let e=new Date(a);return`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`};return(a,e)=>{var g,y,h,f,L,N,w,P,j,A,z,U,B,R,q,E,F,G,H,O,V,J,K,Q,W,X;return l(),s("div",za,[o("div",Ua,[o("div",Ba,[o("img",{src:null==(g=u(r))?void 0:g.coverImgUrl,alt:"",srcset:""},null,8,Ra)]),o("div",qa,[o("div",Ea,[Fa,o("div",Ga,v(null==(y=u(r))?void 0:y.name),1),Ha]),o("div",Ma,[C(o("div",Oa,[o("img",{src:`${null==(f=null==(h=u(r))?void 0:h.creator)?void 0:f.avatarUrl}?param=100y100`,onClick:e[0]||(e[0]=a=>{var e,l;return u(S).push(`/user/${null==(l=null==(e=u(r))?void 0:e.creator)?void 0:l.userId}`)})},null,8,Va)],512),[[x,null==(N=null==(L=u(r))?void 0:L.creator)?void 0:N.avatarUrl]]),C(o("div",{class:"name",onClick:e[1]||(e[1]=a=>{var e,l;return u(S).push(`/user/${null==(l=null==(e=u(r))?void 0:e.creator)?void 0:l.userId}`)})},v(null==(P=null==(w=u(r))?void 0:w.creator)?void 0:P.nickname),513),[[x,null==(A=null==(j=u(r))?void 0:j.creator)?void 0:A.nickname]]),o("div",Ya,v(b(null==(z=u(r))?void 0:z.createTime))+"创建",1)]),o("div",Ja,[k(D,{"play-list":(X=u(p),X.map((a=>({id:a.id,songName:a.songName,singer:a.singer,source:a.source,sourceType:a.sourceType,playListName:a.playListName,time:a.time}))))},null,8,["play-list"])]),o("div",Ka,[C(o("div",Qa,[Wa,C(o("span",null,"添加标签",512),[[x,!(null==(B=null==(U=u(r))?void 0:U.tags)?void 0:B.length)]]),C(o("span",null,v(null==(q=null==(R=u(r))?void 0:R.tags)?void 0:q.join(" / ")),513),[[x,null==(F=null==(E=u(r))?void 0:E.tags)?void 0:F.length]])],512),[[x,5!=(null==(G=u(r))?void 0:G.specialType)]]),o("div",Xa,[Za,_(v(null==(H=u(r))?void 0:H.trackCount),1)]),o("div",ae,[ee,_(v(u($)(null==(O=u(r))?void 0:O.playCount)),1)]),C(o("div",le,[se,C(o("span",null,"添加简介",512),[[x,!(null==(V=u(r))?void 0:V.description)]]),C(o("div",{class:d(["moreBrief",{briefShort:!u(n)}])},[o("span",ie,v(null==(J=u(r))?void 0:J.description),1),u(t)&&!u(n)?(l(),s("span",{key:0,class:"showMore",onClick:e[2]||(e[2]=a=>I(n)?n.value=!0:n=!0)})):m("",!0),u(t)&&u(n)?(l(),s("span",{key:1,class:"showLess",onClick:e[3]||(e[3]=a=>I(n)?n.value=!1:n=!1)})):m("",!0)],2),[[x,null==(K=u(r))?void 0:K.description]])],512),[[x,5!=(null==(Q=u(r))?void 0:Q.specialType)]])])])]),o("div",te,[o("div",{class:d(["songPlayList",{isSelected:1===u(c)}]),onClick:e[4]||(e[4]=a=>I(c)?c.value=1:c=1)},"歌曲列表 ",2),o("div",{class:d(["comment",{isSelected:2===u(c)}]),onClick:e[5]||(e[5]=a=>I(c)?c.value=2:c=2)},"评论("+v((null==(W=u(r))?void 0:W.commentCount)||0)+")",3),o("div",{class:d(["collecter",{isSelected:3===u(c)}]),onClick:e[6]||(e[6]=a=>I(c)?c.value=3:c=3)},"收藏者 ",2)]),C(k(M,{"play-list-detail":u(p)},null,8,["play-list-detail"]),[[x,1===u(c)]]),2===u(c)?(l(),T(ka,{key:0,type:u(Y).playlist,ref_key:"commentRef",ref:i},null,8,["type"])):m("",!0),3===u(c)?(l(),T(ja,{key:1})):m("",!0)])}}}),[["__scopeId","data-v-f998fda0"]]);export{ne as default};
