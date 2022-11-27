<template>
    <!-- <div class="loading" v-if="isLoading"></div>
    <div class="empty" v-if="isEmpty"></div> -->
    <div id="single">
        <div class="tool"></div>
        <div id="title">
            <div class="title">音乐标题</div>
            <div class="songer">歌手</div>
            <div class="album">专辑</div>
            <div class="time">时长</div>
            <div class="hot">热度</div>
        </div>
        <div class="singleItem " v-for="(item, index) in singleList" :key="index" :class="{ bgColor: index % 2 === 0 }"
            @dblclick="playSong(item.id)">
            <div class="tool">
                <div class="order">{{ countOrder(index) }}</div>
                <div class="favourite">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-aixin"></use>
                        </svg>
                    </div>
                </div>
                <div class="download">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xiazai1"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="title">{{ item.name }}</div>
                <div class="songer">{{ item.ar[0].name }}</div>
                <div class="album">{{ item.al.name }}</div>
                <div class="time">{{ formatTime(item.dt / 1000) }}</div>
                <div class="hot">
                    <meter min="0" max="100" :value="item.pop" color="red"></meter>
                    <!-- <progress value="20" max="100"></progress> -->
                </div>
            </div>
        </div>
        <div class="pagination">
            <el-pagination small background layout="prev, pager, next" :total="total" :page-size="100"
                v-model:current-page="offset" class="mt-4" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, onBeforeMount, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import searchApi from "@/api/request/searchApi";
import search from "@/type/search";
import emitter from "@/utils/eventBus";
import formatTime from "@/utils/formatTime";

const route = useRoute();
const changeSearchResultNum = inject("changeSearchResultNum") as Function;
let singleList = ref()
// 分页
let offset = ref(1)
// 返回数量
let limit = ref(100)
// 正在加载中
// let isLoading = ref(false)
// 判断数据是否为空
// let isEmpty = ref(true)
// 总的数据数目
let total = ref(0)

watch(() => offset.value, () => {
    searchSingleList()
})

// 默认搜索单曲，默认分页为 30
const searchSingleList = () => {
    singleList.value = []
    searchApi
        .search({ keywords: route.query.keywords as string, type: search.searchType.single, limit: limit.value, offset: (offset.value - 1) * limit.value })
        .then((res) => {
            // console.log(res);
            let data = (res as any).result
            if (data) {
                total.value = data?.songCount;
                changeSearchResultNum(data?.songCount);
                singleList.value = data.songs;
            }
        });
}
searchSingleList();

// 监听关键词的变化
watch(() => route.query.keywords, () => {
    searchSingleList();
})

const playSong = (songId: number) => {
    emitter.emit("switchSong", {
        songId,
        playAtOnce: true
    })
    // console.log(item);
}

// 格式化序号
const countOrder = (index: number): string => {
    let num = index + (offset.value - 1) * limit.value + 1;
    return num < 10 ? 0 + "" + num : num + "";
}

onBeforeMount(() => {
    emitter.emit("changeHeaderSearchValue", {
        value: route.query.keywords,
        searchAtOnce: false,
    });
});
</script>

<style lang="scss" scoped>
@import "@/style/component/searchResult/children/single.scss";
</style>
