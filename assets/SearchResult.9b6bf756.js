import{q as e,d as s,r as a,y as l,o as i,c,a as r,t,u,s as d,n as v,b as n,e as o,j as h,i as k,b1 as m,v as y,x as b,f as p,p as g,_ as S}from"./index.21005268.js";const w=s=>e({url:"/artist/detail",method:"GET",params:s}),C=s=>e({url:"/artist/follow/count",method:"GET",params:s}),f={class:"searchResult"},q={class:"searchValue"},x={class:"title"},_={class:"maybeInteresting"},I=(e=>(y("data-v-2fb32e71"),e=e(),b(),e))((()=>r("div",{class:"title"},"你可能感兴趣",-1))),E={class:"content"},R={class:"interestingItem artist"},j={class:"img"},G=["src"],T={class:"text"},z={id:"artist"},L={id:"title"},M={key:0,id:"alias"},N={id:"introduce"},V={class:"navigate"},A={class:"introduce"},B=S(s({__name:"SearchResult",setup(e){const s=o(),y=h();let b=a(1),S=a(0),B=a("首"),D=a("单曲");s.query.keywords||y.push("/");k("clearSelectedIndex")();const F=(e,a)=>{var l;switch(a){case 1:B.value="首",D.value="单曲";break;case 2:B.value="位",D.value="歌手";break;case 3:B.value="张",D.value="专辑";break;case 4:B.value="个",D.value="视频";break;case 5:B.value="个",D.value="歌单";break;case 6:B.value="首",D.value="歌词";break;case 7:B.value="个",D.value="播客";break;case 8:B.value="个",D.value="声音";break;case 9:B.value="位",D.value="用户"}b.value=a,S.value=0,y.push({path:e,query:{keywords:null==(l=s.query)?void 0:l.keywords}})};g("changeSearchResultNum",(e=>{S.value=e}));let H=a(),J=a(0),K=a("");const O=()=>{m.search({keywords:s.query.keywords,limit:1}).then((e=>{let s;e.result.songs&&(s=e.result.songs[0].ar[0].id,K.value=e.result.songs[0].ar[0].alias[0],w({id:s}).then((e=>{H.value=e.data.artist,H.value.cover+="?param=250y250"})),C({id:s}).then((e=>{J.value=e.data.fansCnt})))}))};O(),l((()=>s.query.keywords),(()=>{O()}));const P=()=>{};return(e,a)=>{var l,o,h,k;const m=p("router-view");return i(),c("div",f,[r("div",q,[r("div",x,"搜索 "+t(null==(l=u(s).query)?void 0:l.keywords),1)]),r("div",_,[I,r("div",E,[r("div",R,[r("div",j,[r("img",{id:"img",src:null==(o=u(H))?void 0:o.cover,onError:P},null,40,G)]),r("div",T,[r("div",z,[r("span",L,"歌手："+t(null==(h=u(H))?void 0:h.name),1),u(K)?(i(),c("span",M," ("+t(u(K))+")",1)):d("",!0)]),r("div",N,"粉丝:"+t((y=u(J),y>1e4?Math.floor(y/1e4)+"万":y+""))+", 歌曲:"+t(null==(k=u(H))?void 0:k.musicSize),1)])])])]),r("div",V,[r("ul",null,[r("li",{class:v({isSelected:1===u(b)}),onClick:a[0]||(a[0]=e=>F("/search/single",1))}," 单曲 ",2),r("li",{class:v({isSelected:2===u(b)}),onClick:a[1]||(a[1]=e=>F("/search/singer",2))}," 歌手 ",2),r("li",{class:v({isSelected:3===u(b)}),onClick:a[2]||(a[2]=e=>F("/search/album",3))}," 专辑 ",2),r("li",{class:v({isSelected:4===u(b)}),onClick:a[3]||(a[3]=e=>F("/search/video",4))}," 视频 ",2),r("li",{class:v({isSelected:5===u(b)}),onClick:a[4]||(a[4]=e=>F("/search/songList",5))}," 歌单 ",2),r("li",{class:v({isSelected:6===u(b)}),onClick:a[5]||(a[5]=e=>F("/search/lyric",6))}," 歌词 ",2),r("li",{class:v({isSelected:7===u(b)}),onClick:a[6]||(a[6]=e=>F("/search/podcast",7))}," 播客 ",2),r("li",{class:v({isSelected:8===u(b)}),onClick:a[7]||(a[7]=e=>F("/search/voice",8))}," 声音 ",2),r("li",{class:v({isSelected:9===u(b)}),onClick:a[8]||(a[8]=e=>F("/search/user",9))}," 用户 ",2)]),r("div",A," 找到 "+t(u(S))+" "+t(u(B))+t(u(D)),1)]),n(m)]);var y}}}),[["__scopeId","data-v-2fb32e71"]]);export{B as default};
