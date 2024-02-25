<template>
    <div class="searchResult">
        <div class="searchValue">
            <div class="title">搜索&nbsp;{{ route.query?.keywords }}</div>
        </div>
        <div class="maybeInteresting">
            <div class="title">你可能感兴趣</div>
            <div class="content">
                <div class="interestingItem artist" @click="router.push('/singer/' + maybeInterestingArtist?.id)">
                    <div class="img">
                        <img id="img" :src="maybeInterestingArtist?.cover" @error="errorImg" />
                    </div>
                    <div class="text">
                        <div id="artist">
                            <span id="title">歌手：{{ maybeInterestingArtist?.name }}</span>
                            <span id="alias" v-if="alias">&nbsp;({{ alias }})</span>
                        </div>
                        <div id="introduce">粉丝:{{ getFansCount(fansCount) }}, 歌曲:{{
                            maybeInterestingArtist?.musicSize
                        }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navigate">
            <ul>
                <li :class="{ isSelected: isSelectedIndex === 1 }" @click="urlNavigate('/search/single', 1)">
                    单曲
                </li>
                <li :class="{ isSelected: isSelectedIndex === 2 }" @click="urlNavigate('/search/singer', 2)">
                    歌手
                </li>
                <li :class="{ isSelected: isSelectedIndex === 3 }" @click="urlNavigate('/search/album', 3)">
                    专辑
                </li>
                <li :class="{ isSelected: isSelectedIndex === 4 }" @click="urlNavigate('/search/video', 4)">
                    视频
                </li>
                <li :class="{ isSelected: isSelectedIndex === 5 }" @click="urlNavigate('/search/songList', 5)">
                    歌单
                </li>
                <li :class="{ isSelected: isSelectedIndex === 6 }" @click="urlNavigate('/search/lyric', 6)">
                    歌词
                </li>
                <li :class="{ isSelected: isSelectedIndex === 7 }" @click="urlNavigate('/search/podcast', 7)">
                    播客
                </li>
                <li :class="{ isSelected: isSelectedIndex === 8 }" @click="urlNavigate('/search/voice', 8)">
                    声音
                </li>
                <li :class="{ isSelected: isSelectedIndex === 9 }" @click="urlNavigate('/search/user', 9)">
                    用户
                </li>
            </ul>
            <div class="introduce">
                找到 {{ searchResultNum }} {{ searchTypeName }}{{ searchTypeTitle }}
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
import searchApi from "@/api/request/searchApi";
import artistApi from "@/api/request/artistApi"
import { inject, ref, provide, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
let isSelectedIndex = ref(1);
let searchResultNum = ref(0);
let searchTypeName = ref("首");
let searchTypeTitle = ref("单曲");

// 防止用户直接输入网址空字段跳转
if (!route.query.keywords) {
    router.push("/");
}

// 清除侧边栏的高亮显示
const clearSelectedIndex = inject("clearSelectedIndex") as Function;
clearSelectedIndex();

const urlNavigate = (url: string, index: number): void => {
    console.log(url);

    switch (index) {
        case 1:
            searchTypeName.value = "首";
            searchTypeTitle.value = "单曲";
            break;
        case 2:
            searchTypeName.value = "位"
            searchTypeTitle.value = "歌手";
            break;
        case 3:
            searchTypeName.value = "张"
            searchTypeTitle.value = "专辑";
            break;
        case 4:
            searchTypeName.value = "个"
            searchTypeTitle.value = "视频";
            break;
        case 5:
            searchTypeName.value = "个"
            searchTypeTitle.value = "歌单";
            break;
        case 6:
            searchTypeName.value = "首"
            searchTypeTitle.value = "歌词";
            break;
        case 7:
            searchTypeName.value = "个"
            searchTypeTitle.value = "播客";
            break;
        case 8:
            searchTypeName.value = "个"
            searchTypeTitle.value = "声音";
            break;
        case 9:
            searchTypeName.value = "位"
            searchTypeTitle.value = "用户";
            break;
        default:
            break;
    }
    isSelectedIndex.value = index;
    searchResultNum.value = 0;
    router.push({
        path: url,
        query: {
            keywords: route.query?.keywords as string,
        },
    });
};

const changeSearchResultNum = (num: number) => {
    searchResultNum.value = num;
}

provide("changeSearchResultNum", changeSearchResultNum);

let maybeInterestingArtist = ref()
let fansCount = ref(0)
let alias = ref("");
// 格式化粉丝数量
const getFansCount = (fansCount: number): string => {
    if (fansCount > 10000) {
        return Math.floor(fansCount / 10000) + "万";
    }
    else {
        return fansCount + ""
    }
}
// 获取单曲的可能感兴趣,根据单曲的第一首歌的作者
const changeMaybeInteresting = () => {
    searchApi
        .search({ keywords: route.query.keywords as string, limit: 1 })
        .then((res) => {
            let artistId;
            if ((res as any).result.songs) {
                artistId = (res as any).result.songs[0].ar[0].id;
                // 获取歌手别名
                alias.value = (res as any).result.songs[0].ar[0].alias[0];
                // 获取歌手详情
                artistApi.getArtistDetail({ id: artistId }).then(res => {
                    maybeInterestingArtist.value = res.data.artist;
                    maybeInterestingArtist.value.cover += "?param=250y250";
                })
                // 获取歌手粉丝数量
                artistApi.getArtistFansCount({ id: artistId }).then(res => {
                    fansCount.value = res.data.fansCnt;
                })
            }
        });
}

changeMaybeInteresting();

// 监听关键词的变化
watch(() => route.query.keywords, () => {
    changeMaybeInteresting();
})

const errorImg = () => {
    console.log(123);
}
</script>

<style lang="scss" scoped>
@use "@/style/component/searchResult/searchResult.scss";
</style>
