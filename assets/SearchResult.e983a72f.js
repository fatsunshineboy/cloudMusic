import{d as S,r as d,o as f,c as _,a as s,t as v,u as a,n as i,b as m,e as B,f as h,g,i as y,h as A,p as b,_ as D}from"./index.99ea843b.js";const E={class:"searchResult"},R={class:"searchValue"},x={class:"title"},N=B('<div class="maybeInteresting" data-v-ec7f94a7><div class="title" data-v-ec7f94a7>\u4F60\u53EF\u80FD\u611F\u5174\u8DA3</div><div class="content" data-v-ec7f94a7><div class="interestingItem" data-v-ec7f94a7><div class="img" data-v-ec7f94a7></div><div class="text" data-v-ec7f94a7><div id="title" data-v-ec7f94a7>\u6B4C\u624B\uFF1A\u7C73\u6D25\u7384\u5E08</div><div id="introduce" data-v-ec7f94a7>\u7C89\u4E1D\uFF1A544\u4E07\uFF0C\u6B4C\u66F2\uFF1A180</div></div></div></div></div>',1),$={class:"navigate"},w={class:"introduce"},I=S({__name:"SearchResult",setup(q){const C=h(),k=g();let u=d(1),F=d(0),t=d("\u9996"),l=d("\u5355\u66F2");C.query.keywords||k.push("/"),y("clearSelectedIndex")();const c=(o,e)=>{var n;switch(console.log(o),e){case 1:t.value="\u9996",l.value="\u5355\u66F2";break;case 2:t.value="\u4F4D",l.value="\u6B4C\u624B";break;case 3:t.value="\u5F20",l.value="\u4E13\u8F91";break;case 4:t.value="\u4E2A",l.value="\u89C6\u9891";break;case 5:t.value="\u4E2A",l.value="\u6B4C\u5355";break;case 6:t.value="\u9996",l.value="\u6B4C\u8BCD";break;case 7:t.value="\u4E2A",l.value="\u64AD\u5BA2";break;case 8:t.value="\u4E2A",l.value="\u58F0\u97F3";break;case 9:t.value="\u4F4D",l.value="\u7528\u6237";break}u.value=e,F.value=0,k.push({path:o,query:{keywords:(n=C.query)==null?void 0:n.keywords}})};return b("changeSearchResultNum",o=>{F.value=o}),(o,e)=>{var p;const n=A("router-view");return f(),_("div",E,[s("div",R,[s("div",x,"\u641C\u7D22\xA0"+v((p=a(C).query)==null?void 0:p.keywords),1)]),N,s("div",$,[s("ul",null,[s("li",{class:i({isSelected:a(u)===1}),onClick:e[0]||(e[0]=r=>c("/search/single",1))}," \u5355\u66F2 ",2),s("li",{class:i({isSelected:a(u)===2}),onClick:e[1]||(e[1]=r=>c("/search/singer",2))}," \u6B4C\u624B ",2),s("li",{class:i({isSelected:a(u)===3}),onClick:e[2]||(e[2]=r=>c("/search/album",3))}," \u4E13\u8F91 ",2),s("li",{class:i({isSelected:a(u)===4}),onClick:e[3]||(e[3]=r=>c("/search/video",4))}," \u89C6\u9891 ",2),s("li",{class:i({isSelected:a(u)===5}),onClick:e[4]||(e[4]=r=>c("/search/songList",5))}," \u6B4C\u5355 ",2),s("li",{class:i({isSelected:a(u)===6}),onClick:e[5]||(e[5]=r=>c("/search/lyric",6))}," \u6B4C\u8BCD ",2),s("li",{class:i({isSelected:a(u)===7}),onClick:e[6]||(e[6]=r=>c("/search/podcast",7))}," \u64AD\u5BA2 ",2),s("li",{class:i({isSelected:a(u)===8}),onClick:e[7]||(e[7]=r=>c("/search/voice",8))}," \u58F0\u97F3 ",2),s("li",{class:i({isSelected:a(u)===9}),onClick:e[8]||(e[8]=r=>c("/search/user",9))}," \u7528\u6237 ",2)]),s("div",w," \u627E\u5230 "+v(a(F))+" "+v(a(t))+v(a(l)),1)]),m(n)])}}});const z=D(I,[["__scopeId","data-v-ec7f94a7"]]);export{z as default};