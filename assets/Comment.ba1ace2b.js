import{M as e,d as a,o as t,c as l,a as s,u as n,t as i,l as o,J as d,j as m,x as v,y as u,_ as r,r as c,k as p,F as g,m as h,b as k,s as f,n as y,e as I}from"./index.f13d04ae.js";import{E as C}from"./el-select.717c9ca8.js";const x=a=>e({url:`/comment/playlist?timerstamp=${Date.now()}`,method:"GET",params:a}),b=a=>e({url:`/comment/like?timerstamp=${Date.now()}`,method:"GET",params:a}),_=a=>e({url:`/comment/album?timerstamp=${Date.now()}`,method:"GET",params:a});var $=(e=>(e[e.song=0]="song",e[e.mv=1]="mv",e[e.playlist=2]="playlist",e[e.album=3]="album",e[e.radiioStationProgram=4]="radiioStationProgram",e[e.video=5]="video",e[e.post=6]="post",e[e.radiioStation=7]="radiioStation",e))($||{});const j={class:"contentItem"},w=["src"],S={class:"detail"},T={class:"nameAndText"},B={class:"text"},E={key:0,id:"reply"},R={class:"text"},q={class:"timeAndTool"},z={class:"time"},A={class:"commentTool"},D=(e=>(v("data-v-45d0aa7f"),e=e(),u(),e))((()=>s("div",{class:"support"},[s("svg",{class:"icon","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-dianzan"})])],-1))),G={class:"supportCount"},H=d('<div class="gap" data-v-45d0aa7f>|</div><div class="share" data-v-45d0aa7f><svg class="icon" aria-hidden="true" data-v-45d0aa7f><use xlink:href="#icon-fenxiang" data-v-45d0aa7f></use></svg></div><div class="gap" data-v-45d0aa7f>|</div><div class="reply" data-v-45d0aa7f><svg class="icon" aria-hidden="true" data-v-45d0aa7f><use xlink:href="#icon-pinglun" data-v-45d0aa7f></use></svg></div>',4),F=r(a({__name:"Comment",props:{commentItem:{type:Object,required:!0},likeCommentButton:{type:Function,required:!0}},setup(e){const a=m();return(d,m)=>{var v,u,r,c,p,g,h,k,f,y,I,C,x,b;return t(),l("div",j,[s("img",{src:`${null==(u=null==(v=e.commentItem)?void 0:v.user)?void 0:u.avatarUrl}?param=60y60`,onClick:m[0]||(m[0]=t=>{var l,s;return n(a).push(`/user/${null==(s=null==(l=e.commentItem)?void 0:l.user)?void 0:s.userId}`)})},null,8,w),s("div",S,[s("div",T,[s("span",{class:"name",onClick:m[1]||(m[1]=t=>{var l,s;return n(a).push(`/user/${null==(s=null==(l=e.commentItem)?void 0:l.user)?void 0:s.userId}`)})},i(null==(c=null==(r=e.commentItem)?void 0:r.user)?void 0:c.nickname),1),s("span",B," : "+i(null==(p=e.commentItem)?void 0:p.content),1)]),(null==(h=null==(g=e.commentItem)?void 0:g.beReplied)?void 0:h.length)?(t(),l("div",E,[s("div",{class:"name",onClick:m[2]||(m[2]=t=>{var l,s,i;return n(a).push(`/user/${null==(i=null==(s=null==(l=e.commentItem)?void 0:l.beReplied[0])?void 0:s.user)?void 0:i.userId}`)})},"@"+i(null==(y=null==(f=null==(k=e.commentItem)?void 0:k.beReplied[0])?void 0:f.user)?void 0:y.nickname),1),s("div",R," : "+i(null==(C=null==(I=e.commentItem)?void 0:I.beReplied[0])?void 0:C.content),1)])):o("",!0),s("div",q,[s("div",z,i(null==(x=e.commentItem)?void 0:x.timeStr),1),s("div",A,[s("div",{class:"supportAndCount",onClick:m[3]||(m[3]=a=>{var t,l;return e.likeCommentButton(null==(t=e.commentItem)?void 0:t.commentId,(null==(l=e.commentItem)?void 0:l.liked)?0:1)})},[D,s("span",G,i(null==(b=e.commentItem)?void 0:b.likedCount),1)]),H])])])])}}}),[["__scopeId","data-v-45d0aa7f"]]),P=e=>(v("data-v-1036ee20"),e=e(),u(),e),U={id:"comment"},J=d('<textarea class="textarea customeScroll" name="saysths" rows="3" wrap="soft" data-v-1036ee20></textarea><div class="tool" data-v-1036ee20><div class="iconItem" data-v-1036ee20><div class="topic" data-v-1036ee20><svg class="icon" aria-hidden="true" data-v-1036ee20><use xlink:href="#icon-hashjinghao" data-v-1036ee20></use></svg></div><div class="at" data-v-1036ee20><svg class="icon" aria-hidden="true" data-v-1036ee20><use xlink:href="#icon-aite1" data-v-1036ee20></use></svg></div><div class="emoji" data-v-1036ee20><svg class="icon" aria-hidden="true" data-v-1036ee20><use xlink:href="#icon-xiaolian1" data-v-1036ee20></use></svg></div></div><div class="sendComment" data-v-1036ee20>评论</div></div>',2),M={class:"content"},N={key:0,class:"noComment"},O={key:1,class:"hotComment"},K=P((()=>s("div",{class:"title"},"精彩评论",-1))),L={key:2,class:"moreHotComment"},Q={key:3,class:"latestComment"},V={class:"title"},W={class:"pagination"},X=r(a({__name:"Comment",props:{type:{type:Number,required:!0}},setup(e,{expose:a}){const d=e,m=I();let v=c(),u=c(),r=c(),j=c(0),w=c(1),S=c(100);const T=(e,a)=>{b({id:m.params.id,cid:e,t:a,type:d.type}).then((e=>{B()}))},B=()=>{switch(d.type){case $.playlist:E(S.value,(w.value-1)*S.value);break;case $.album:R(S.value,(w.value-1)*S.value)}},E=(e,a,t)=>{x({id:m.params.id,limit:e,offset:a}).then((e=>{var a;v.value=null==e?void 0:e.comments,j.value=e.total,u.value=null==(a=null==e?void 0:e.hotComments)?void 0:a.slice(0,10),r.value=null==e?void 0:e.moreHot}))},R=(e,a,t)=>{_({id:m.params.id,limit:e,offset:a}).then((e=>{var a;v.value=null==e?void 0:e.comments,j.value=e.total,u.value=null==(a=null==e?void 0:e.hotComments)?void 0:a.slice(0,10),r.value=null==e?void 0:e.moreHot}))};return p((()=>w.value),(()=>{v.value=[],u.value=[],B()}),{immediate:!0}),a({getComment:B}),(e,a)=>{var d,m,c,p,I;const x=C;return t(),l("div",U,[J,s("div",M,[(null==(d=n(v))?void 0:d.length)||(null==(m=n(u))?void 0:m.length)?o("",!0):(t(),l("div",N," 还没有评论，快来抢沙发~ ")),(null==(c=n(u))?void 0:c.length)?(t(),l("div",O,[K,(t(!0),l(g,null,h(n(u),((e,a)=>(t(),l("div",{class:"contentItem borderBottom",key:a},[k(F,{"comment-item":e,"like-comment-button":T},null,8,["comment-item"])])))),128))])):o("",!0),(null==(p=n(u))?void 0:p.length)&&n(r)?(t(),l("div",L," 更多精彩评论 > ")):o("",!0),(null==(I=n(v))?void 0:I.length)?(t(),l("div",Q,[s("div",V,"最新评论("+i(n(j))+")",1),(t(!0),l(g,null,h(n(v),((e,a)=>{var s;return t(),l("div",{class:y(["contentItem",{borderBottom:a!=(null==(s=n(v))?void 0:s.length)-1}]),key:a},[k(F,{"comment-item":e,"like-comment-button":T},null,8,["comment-item"])],2)})),128))])):o("",!0),s("div",W,[k(x,{small:"",background:"",layout:"prev, pager, next",total:n(j),"page-size":n(S),"current-page":n(w),"onUpdate:current-page":a[0]||(a[0]=e=>f(w)?w.value=e:w=e),"hide-on-single-page":!0,class:"mt-4"},null,8,["total","page-size","current-page"])])])])}}}),[["__scopeId","data-v-1036ee20"]]);export{X as C,$ as c};
