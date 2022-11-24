<template >
    <div class="searchDetailAndMatch">
        <div class="hotSearchDetail" v-if="!props.keywords">
            <div class="history">
                <div class="historyBar">
                    <div id="searchHistory">
                        <div class="historyTitle">
                            搜索历史
                        </div>
                        <div class="rubbish">
                            <div class="iconItem">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-lajitong"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="all">查看全部</div>
                </div>
                <div class="historyDetail">
                    <div class="historyDetailItem">
                        <span class="text">再见</span>
                        <span class="delete">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-guanbi"></use>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div class="hotSearch">
                <div class="hotSearchTitle">热搜榜</div>
                <div id="hotSearch">
                    <div class="hotSearchItem" v-for="(item, index) in hotSearchList"
                        @click="searchKeywords(item.searchWord)">
                        <div class="order" :class="{ theTop: (index + 1) < 4 }">{{ index + 1 }}</div>
                        <div class="detail">
                            <div class="detailItem">
                                <div class="title">{{ item.searchWord }}</div>
                                <div class="hotIcon" v-if="item.iconType === 1">
                                    <img :src="item.iconUrl" width="25">
                                </div>
                                <div class="hotIcon" v-if="item.iconType === 5">
                                    <img :src="item.iconUrl" width="12">
                                </div>
                                <div class="watched">{{ item.score }}</div>
                            </div>
                            <div class="detailInfo" v-if="item.content">{{ item.content }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="searchMatch" v-if="props.keywords">
            <div class="searchMatchItem" v-for="(item, index) in searchMatchValue?.order">
                <div class="title">
                    <div id="songs" v-if="item === 'songs'">
                        <div class="iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-yinle"></use>
                            </svg>
                        </div>
                        <div class="text">单曲</div>
                    </div>
                    <div id="search" v-if="item === 'search'">
                        <div class="iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-sousuo"></use>
                            </svg>
                        </div>
                        <div class="text">猜你想搜</div>
                    </div>
                    <div id="artists" v-if="item === 'artists'">
                        <div class="iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-a-morentouxiang2x"></use>
                            </svg>
                        </div>
                        <div class="text">歌手</div>
                    </div>
                    <div id="albums" v-if="item === 'albums'">
                        <div class="iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-zhuanji"></use>
                            </svg>
                        </div>
                        <div class="text">专辑</div>
                    </div>
                    <div id="playlists" v-if="item === 'playlists'">
                        <div class="iconItem playlists">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gedan"></use>
                            </svg>
                        </div>
                        <div class="text">歌单</div>
                    </div>
                </div>
                <div class="result" v-for="(childItem, childIndex) in searchMatchValue[item]">{{ childItem.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, inject } from "vue";
import searchApi from '@/api/request/searchApi';
import emitter from "@/utils/eventBus";

let hotSearchList = ref()

const props = defineProps({
    keywords: {
        type: String,
        default: "",
        required: false
    }
})

const changeStyleSettingFun = inject("changeStyleSettingFun") as Function

searchApi.hotSearchListDetail().then((res) => {
    hotSearchList.value = res.data;
})

// 搜索匹配的结果
let searchMatchValue = ref();

watch(() => props.keywords, () => {
    if (!props.keywords) {
        changeStyleSettingFun({ "--hotSearchDetailWidth": "350px" })
        return
    }
    changeStyleSettingFun({ "--hotSearchDetailWidth": "400px" })
    searchApi.searchSuggest({ keywords: props.keywords }).then(res => {
        searchMatchValue.value = (res as any).result;
        // console.log(searchMatchValue.value);
    })
}, {
    immediate: true
})

const searchKeywords = (keywords: string) => {
    emitter.emit("changeHeaderSearchValue", {
        value: keywords,
        searchAtOnce: true
    })
}
</script>

<style lang="scss" scoped>
@import "@/style/component/hotSearchDetail.scss"
</style>