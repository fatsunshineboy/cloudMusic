import{r as C,d as D,a as h,w as I,o as f,c as R,b as s,t as v,u as t,n as c,e as x,f as $,g as N,i as q,s as T,p as G,h as V,j,k as z,_ as M}from"./index.f886caee.js";const L=a=>C({url:"/artist/desc",method:"GET",params:a}),H=a=>C({url:"/artist/detail",method:"GET",params:a}),J=a=>C({url:"/artist/follow/count",method:"GET",params:a}),b={getArtistDesc:L,getArtistDetail:H,getArtistFansCount:J},K=a=>(G("data-v-44b05244"),a=a(),V(),a),O={class:"searchResult"},P={class:"searchValue"},Q={class:"title"},U={class:"maybeInteresting"},W=K(()=>s("div",{class:"title"},"\u4F60\u53EF\u80FD\u611F\u5174\u8DA3",-1)),X={class:"content"},Y={class:"interestingItem artist"},Z={class:"img"},ee=["src"],se={class:"text"},te={id:"title"},ue={id:"introduce"},ae={class:"navigate"},le={class:"introduce"},oe=D({__name:"SearchResult",setup(a){const _=$(),k=N();let l=h(1),p=h(0),o=h("\u9996"),i=h("\u5355\u66F2");_.query.keywords||k.push("/"),q("clearSelectedIndex")();const r=(u,e)=>{var n;switch(console.log(u),e){case 1:o.value="\u9996",i.value="\u5355\u66F2";break;case 2:o.value="\u4F4D",i.value="\u6B4C\u624B";break;case 3:o.value="\u5F20",i.value="\u4E13\u8F91";break;case 4:o.value="\u4E2A",i.value="\u89C6\u9891";break;case 5:o.value="\u4E2A",i.value="\u6B4C\u5355";break;case 6:o.value="\u9996",i.value="\u6B4C\u8BCD";break;case 7:o.value="\u4E2A",i.value="\u64AD\u5BA2";break;case 8:o.value="\u4E2A",i.value="\u58F0\u97F3";break;case 9:o.value="\u4F4D",i.value="\u7528\u6237";break}l.value=e,p.value=0,k.push({path:u,query:{keywords:(n=_.query)==null?void 0:n.keywords}})};z("changeSearchResultNum",u=>{p.value=u});let g=h(),m=h(0);const E=u=>u>1e4?Math.floor(u/1e4)+"\u4E07":u+"",S=()=>{T.search({keywords:_.query.keywords,limit:1}).then(u=>{let e;u.result.songs&&(e=u.result.songs[0].ar[0].id,b.getArtistDetail({id:e}).then(n=>{g.value=n.data.artist}),b.getArtistFansCount({id:e}).then(n=>{m.value=n.data.fansCnt}))})};S(),I(()=>_.query.keywords,()=>{S()});const w=()=>{console.log(123)};return(u,e)=>{var y,F,A,B;const n=j("router-view");return f(),R("div",O,[s("div",P,[s("div",Q,"\u641C\u7D22\xA0"+v((y=t(_).query)==null?void 0:y.keywords),1)]),s("div",U,[W,s("div",X,[s("div",Y,[s("div",Z,[s("img",{id:"img",src:(F=t(g))==null?void 0:F.cover,onError:w},null,40,ee)]),s("div",se,[s("div",te,"\u6B4C\u624B\uFF1A"+v((A=t(g))==null?void 0:A.name),1),s("div",ue,"\u7C89\u4E1D:"+v(E(t(m)))+", \u6B4C\u66F2:"+v((B=t(g))==null?void 0:B.musicSize),1)])])])]),s("div",ae,[s("ul",null,[s("li",{class:c({isSelected:t(l)===1}),onClick:e[0]||(e[0]=d=>r("/search/single",1))}," \u5355\u66F2 ",2),s("li",{class:c({isSelected:t(l)===2}),onClick:e[1]||(e[1]=d=>r("/search/singer",2))}," \u6B4C\u624B ",2),s("li",{class:c({isSelected:t(l)===3}),onClick:e[2]||(e[2]=d=>r("/search/album",3))}," \u4E13\u8F91 ",2),s("li",{class:c({isSelected:t(l)===4}),onClick:e[3]||(e[3]=d=>r("/search/video",4))}," \u89C6\u9891 ",2),s("li",{class:c({isSelected:t(l)===5}),onClick:e[4]||(e[4]=d=>r("/search/songList",5))}," \u6B4C\u5355 ",2),s("li",{class:c({isSelected:t(l)===6}),onClick:e[5]||(e[5]=d=>r("/search/lyric",6))}," \u6B4C\u8BCD ",2),s("li",{class:c({isSelected:t(l)===7}),onClick:e[6]||(e[6]=d=>r("/search/podcast",7))}," \u64AD\u5BA2 ",2),s("li",{class:c({isSelected:t(l)===8}),onClick:e[7]||(e[7]=d=>r("/search/voice",8))}," \u58F0\u97F3 ",2),s("li",{class:c({isSelected:t(l)===9}),onClick:e[8]||(e[8]=d=>r("/search/user",9))}," \u7528\u6237 ",2)]),s("div",le," \u627E\u5230 "+v(t(p))+" "+v(t(o))+v(t(i)),1)]),x(n)])}}});const ne=M(oe,[["__scopeId","data-v-44b05244"]]);export{ne as default};
