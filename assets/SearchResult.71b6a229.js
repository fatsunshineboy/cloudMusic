import{k as e,d as a,r as s,w as l,o as i,c,a as r,t,u,l as d,n,b as o,s as v,e as k,R as h,aZ as m,p as y,m as p,f as b,a8 as g,_ as S}from"./index.10aafd9c.js";const w=a=>e({url:"/artist/detail",method:"GET",params:a}),C=a=>e({url:"/artist/follow/count",method:"GET",params:a}),f={class:"searchResult"},q={class:"searchValue"},_={class:"title"},x={class:"maybeInteresting"},I=(e=>(y("data-v-2fb32e71"),e=e(),p(),e))((()=>r("div",{class:"title"},"你可能感兴趣",-1))),R={class:"content"},E={class:"interestingItem artist"},G={class:"img"},T=["src"],j={class:"text"},z={id:"artist"},L={id:"title"},M={key:0,id:"alias"},N={id:"introduce"},V={class:"navigate"},Z={class:"introduce"},A=S(a({__name:"SearchResult",setup(e){const a=v(),y=k();let p=s(1),S=s(0),A=s("首"),B=s("单曲");a.query.keywords||y.push("/");h("clearSelectedIndex")();const D=(e,s)=>{var l;switch(s){case 1:A.value="首",B.value="单曲";break;case 2:A.value="位",B.value="歌手";break;case 3:A.value="张",B.value="专辑";break;case 4:A.value="个",B.value="视频";break;case 5:A.value="个",B.value="歌单";break;case 6:A.value="首",B.value="歌词";break;case 7:A.value="个",B.value="播客";break;case 8:A.value="个",B.value="声音";break;case 9:A.value="位",B.value="用户"}p.value=s,S.value=0,y.push({path:e,query:{keywords:null==(l=a.query)?void 0:l.keywords}})};g("changeSearchResultNum",(e=>{S.value=e}));let F=s(),H=s(0),J=s("");const K=()=>{m.search({keywords:a.query.keywords,limit:1}).then((e=>{let a;e.result.songs&&(a=e.result.songs[0].ar[0].id,J.value=e.result.songs[0].ar[0].alias[0],w({id:a}).then((e=>{F.value=e.data.artist,F.value.cover+="?param=250y250"})),C({id:a}).then((e=>{H.value=e.data.fansCnt})))}))};K(),l((()=>a.query.keywords),(()=>{K()}));const O=()=>{};return(e,s)=>{var l,v,k,h;const m=b("router-view");return i(),c("div",f,[r("div",q,[r("div",_,"搜索 "+t(null==(l=u(a).query)?void 0:l.keywords),1)]),r("div",x,[I,r("div",R,[r("div",E,[r("div",G,[r("img",{id:"img",src:null==(v=u(F))?void 0:v.cover,onError:O},null,40,T)]),r("div",j,[r("div",z,[r("span",L,"歌手："+t(null==(k=u(F))?void 0:k.name),1),u(J)?(i(),c("span",M," ("+t(u(J))+")",1)):d("",!0)]),r("div",N,"粉丝:"+t((y=u(H),y>1e4?Math.floor(y/1e4)+"万":y+""))+", 歌曲:"+t(null==(h=u(F))?void 0:h.musicSize),1)])])])]),r("div",V,[r("ul",null,[r("li",{class:n({isSelected:1===u(p)}),onClick:s[0]||(s[0]=e=>D("/search/single",1))}," 单曲 ",2),r("li",{class:n({isSelected:2===u(p)}),onClick:s[1]||(s[1]=e=>D("/search/singer",2))}," 歌手 ",2),r("li",{class:n({isSelected:3===u(p)}),onClick:s[2]||(s[2]=e=>D("/search/album",3))}," 专辑 ",2),r("li",{class:n({isSelected:4===u(p)}),onClick:s[3]||(s[3]=e=>D("/search/video",4))}," 视频 ",2),r("li",{class:n({isSelected:5===u(p)}),onClick:s[4]||(s[4]=e=>D("/search/songList",5))}," 歌单 ",2),r("li",{class:n({isSelected:6===u(p)}),onClick:s[5]||(s[5]=e=>D("/search/lyric",6))}," 歌词 ",2),r("li",{class:n({isSelected:7===u(p)}),onClick:s[6]||(s[6]=e=>D("/search/podcast",7))}," 播客 ",2),r("li",{class:n({isSelected:8===u(p)}),onClick:s[7]||(s[7]=e=>D("/search/voice",8))}," 声音 ",2),r("li",{class:n({isSelected:9===u(p)}),onClick:s[8]||(s[8]=e=>D("/search/user",9))}," 用户 ",2)]),r("div",Z," 找到 "+t(u(S))+" "+t(u(A))+t(u(B)),1)]),o(m)]);var y}}}),[["__scopeId","data-v-2fb32e71"]]);export{A as default};