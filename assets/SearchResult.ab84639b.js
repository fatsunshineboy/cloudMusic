import{N as e,d as s,r as a,k as l,c as i,a as c,t as r,u as t,l as u,n as d,b as n,e as o,j as v,i as k,b3 as h,o as m,x as y,y as p,f as g,p as S,_ as b}from"./index.33e10627.js";const C=s=>e({url:"/artist/detail",method:"GET",params:s}),w=s=>e({url:"/artist/follow/count",method:"GET",params:s}),f={class:"searchResult"},q={class:"searchValue"},x={class:"title"},_={class:"maybeInteresting"},I=(e=>(y("data-v-d1373a64"),e=e(),p(),e))((()=>c("div",{class:"title"},"你可能感兴趣",-1))),E={class:"content"},R={class:"img"},j=["src"],G={class:"text"},N={id:"artist"},T={id:"title"},z={key:0,id:"alias"},L={id:"introduce"},M={class:"navigate"},V={class:"introduce"},A=b(s({__name:"SearchResult",setup(e){const s=o(),y=v();let p=a(1),b=a(0),A=a("首"),B=a("单曲");s.query.keywords||y.push("/");k("clearSelectedIndex")();const D=(e,a)=>{var l;switch(a){case 1:A.value="首",B.value="单曲";break;case 2:A.value="位",B.value="歌手";break;case 3:A.value="张",B.value="专辑";break;case 4:A.value="个",B.value="视频";break;case 5:A.value="个",B.value="歌单";break;case 6:A.value="首",B.value="歌词";break;case 7:A.value="个",B.value="播客";break;case 8:A.value="个",B.value="声音";break;case 9:A.value="位",B.value="用户"}p.value=a,b.value=0,y.push({path:e,query:{keywords:null==(l=s.query)?void 0:l.keywords}})};S("changeSearchResultNum",(e=>{b.value=e}));let F=a(),H=a(0),J=a("");const K=()=>{h.search({keywords:s.query.keywords,limit:1}).then((e=>{let s;e.result.songs&&(s=e.result.songs[0].ar[0].id,J.value=e.result.songs[0].ar[0].alias[0],C({id:s}).then((e=>{F.value=e.data.artist,F.value.cover+="?param=250y250"})),w({id:s}).then((e=>{H.value=e.data.fansCnt})))}))};K(),l((()=>s.query.keywords),(()=>{K()}));const O=()=>{};return(e,a)=>{var l,o,v,k;const h=g("router-view");return m(),i("div",f,[c("div",q,[c("div",x,"搜索 "+r(null==(l=t(s).query)?void 0:l.keywords),1)]),c("div",_,[I,c("div",E,[c("div",{class:"interestingItem artist",onClick:a[0]||(a[0]=e=>t(y).push("/singer/"+t(F).id))},[c("div",R,[c("img",{id:"img",src:null==(o=t(F))?void 0:o.cover,onError:O},null,40,j)]),c("div",G,[c("div",N,[c("span",T,"歌手："+r(null==(v=t(F))?void 0:v.name),1),t(J)?(m(),i("span",z," ("+r(t(J))+")",1)):u("",!0)]),c("div",L,"粉丝:"+r((S=t(H),S>1e4?Math.floor(S/1e4)+"万":S+""))+", 歌曲:"+r(null==(k=t(F))?void 0:k.musicSize),1)])])])]),c("div",M,[c("ul",null,[c("li",{class:d({isSelected:1===t(p)}),onClick:a[1]||(a[1]=e=>D("/search/single",1))}," 单曲 ",2),c("li",{class:d({isSelected:2===t(p)}),onClick:a[2]||(a[2]=e=>D("/search/singer",2))}," 歌手 ",2),c("li",{class:d({isSelected:3===t(p)}),onClick:a[3]||(a[3]=e=>D("/search/album",3))}," 专辑 ",2),c("li",{class:d({isSelected:4===t(p)}),onClick:a[4]||(a[4]=e=>D("/search/video",4))}," 视频 ",2),c("li",{class:d({isSelected:5===t(p)}),onClick:a[5]||(a[5]=e=>D("/search/songList",5))}," 歌单 ",2),c("li",{class:d({isSelected:6===t(p)}),onClick:a[6]||(a[6]=e=>D("/search/lyric",6))}," 歌词 ",2),c("li",{class:d({isSelected:7===t(p)}),onClick:a[7]||(a[7]=e=>D("/search/podcast",7))}," 播客 ",2),c("li",{class:d({isSelected:8===t(p)}),onClick:a[8]||(a[8]=e=>D("/search/voice",8))}," 声音 ",2),c("li",{class:d({isSelected:9===t(p)}),onClick:a[9]||(a[9]=e=>D("/search/user",9))}," 用户 ",2)]),c("div",V," 找到 "+r(t(b))+" "+r(t(A))+r(t(B)),1)]),n(h)]);var S}}}),[["__scopeId","data-v-d1373a64"]]);export{A as default};