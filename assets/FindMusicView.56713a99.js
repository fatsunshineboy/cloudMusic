import{d as s,r as i,o as e,c,a,n as d,u as n,b as l,e as t,f as o,_ as u}from"./index.10aafd9c.js";const r={id:"findMusic"},m={class:"navigate"},v=u(s({__name:"FindMusicView",setup(s){const u=t();let v=i(1);const f=(s,i)=>{v.value=i,u.push(s)};return(s,i)=>{const t=o("router-view");return e(),c("div",r,[a("div",m,[a("div",{class:d(["personalRecommend",{isSelected:1===n(v)}]),onClick:i[0]||(i[0]=s=>f("/findmusic/personalrecommend",1))},"个性推荐",2),a("div",{class:d(["exclusiveCustome",{isSelected:2===n(v)}]),onClick:i[1]||(i[1]=s=>f("/findmusic/exclusivecustome",2))},"专属推荐",2),a("div",{class:d(["playList",{isSelected:3===n(v)}]),onClick:i[2]||(i[2]=s=>f("/findmusic/playlist",3))},"歌单",2),a("div",{class:d(["rank",{isSelected:4===n(v)}]),onClick:i[3]||(i[3]=s=>f("/findmusic/rank",4))}," 排行榜 ",2),a("div",{class:d(["singer",{isSelected:5===n(v)}]),onClick:i[4]||(i[4]=s=>f("/findmusic/singer",5))}," 歌手",2),a("div",{class:d(["latestMusic",{isSelected:6===n(v)}]),onClick:i[5]||(i[5]=s=>f("/findmusic/latestmusic",6))},"最新音乐",2)]),l(t)])}}}),[["__scopeId","data-v-c900dbf5"]]);export{v as default};
