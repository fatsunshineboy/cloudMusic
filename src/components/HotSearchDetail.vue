<template >
    <div class="searchDetailAndMatch">
        <div class="hotSearchDetail" v-if="!props.keywords">
            <div class="history" v-if="searchHistoryStore.history.length">
                <div class="historyBar">
                    <div id="searchHistory">
                        <div class="historyTitle">
                            搜索历史
                        </div>
                        <div class="rubbish" @click="dialogVisible = true;">
                            <div class="iconItem">
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-lajitong"></use>
                                </svg>
                            </div>
                        </div>
                        <el-dialog v-model="dialogVisible" align-center center draggable :modal="false"
                            :close-on-click-modal="false" :close-on-press-escape="false" :destroy-on-close="true"
                            :show-close="false" class="elDialog">
                            <div class="content">
                                <div class="close" @click="dialogVisible = false;">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-guanbi"></use>
                                    </svg>
                                </div>
                                <div class="tip">确定删除历史记录？</div>
                                <div class="button" @click="searchHistoryStore.clearHistory(); dialogVisible = false;">
                                    确定
                                </div>
                            </div>
                        </el-dialog>
                    </div>
                    <div class="all" @click="showAllSearchHistory" v-if="!isShowAllSearchHistory">查看全部</div>
                </div>
                <div class="historyDetail " :class="{ notShowAll: !isShowAllSearchHistory }">
                    <div class="historyDetailItem" v-for="(item, index) in searchHistoryStore.history" key="index"
                        @click="searchHotKeywords(item)">
                        <span class="text">{{ item }}</span>
                        <span class="delete" @click.stop="searchHistoryStore.removeHistory(index)">
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
                    <div class="hotSearchItem" v-for="(item, index) in hotSearchList" :key="index"
                        @click="searchHotKeywords(item.searchWord)">
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
            <div class="searchMatchItem" v-for="(item, index) in searchMatchValue?.order" :key="index">
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
                <div class="result" v-for="(childItem, childIndex) in searchMatchValue[item]" :key="childIndex">{{
                        childItem.name
                }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, inject } from "vue";
import searchApi from '@/api/request/searchApi';
import emitter from "@/utils/eventBus";
import { useSearchHistoryStore } from "@/stores/searchHistory";

// 搜索历史记录
const searchHistoryStore = useSearchHistoryStore();
// 热搜表
let hotSearchList = ref()
// 是否展示全部搜索记录
let isShowAllSearchHistory = ref(false)
// 展示全部
const showAllSearchHistory = () => {
    isShowAllSearchHistory.value = true;
}
// 有待优化，无法准确地将记录控制在两行之内
// 根据历史记录的长度来决定是否显示全部
watch(() => searchHistoryStore.countHistoryLength, () => {
    if (searchHistoryStore.countHistoryLength > 22) {
        isShowAllSearchHistory.value = false
    }
    else {
        isShowAllSearchHistory.value = true
    }
}, {
    immediate: true
})
// 输出全部搜索历史记录的提示框
let dialogVisible = ref(false)

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

// 判断是显示热搜榜还是推荐歌单
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

// 点击热搜
const searchHotKeywords = (keywords: string) => {
    emitter.emit("changeHeaderSearchValue", {
        value: keywords,
        searchAtOnce: true
    })
}
</script>

<style lang="scss" scoped>
@import "@/style/component/hotSearchDetail.scss"
</style>