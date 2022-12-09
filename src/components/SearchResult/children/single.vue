<template>
    <!-- <div class="loading" v-if="isLoading"></div>
    <div class="empty" v-if="isEmpty"></div> -->
    <div id="single">
        <div class="playAllAndDownloadAllVue">
            <PlayAllAndDownloadAllVue :play-list="playListValue">
            </PlayAllAndDownloadAllVue>
        </div>

        <SongPlayListVue :play-list-detail="(playListValue as any)" :title-setting="titleSetting"
            :oreder-base-count="(offset - 1) * limit"></SongPlayListVue>

        <div class="pagination">
            <el-pagination small background layout="prev, pager, next" :total="total" :page-size="limit"
                v-model:current-page="offset" :hide-on-single-page="true" class="mt-4" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, onBeforeMount, ref, watch, type Ref } from "vue";
import { useRoute } from "vue-router";
import searchApi from "@/api/request/searchApi";
import search from "@/type/search";
import emitter from "@/utils/eventBus";
import { formatTime } from "@/utils/format";
import PlayAllAndDownloadAllVue from "@/components/utils/PlayAllAndDownloadAll.vue";
import { usePlayListStore } from "@/stores/playList";
import type playList from "@/type/playList";
import SongPlayListVue from "@/components/musicItem/SongPlayList.vue";
import sourceType from "@/type/sourceType";

const route = useRoute();
const changeSearchResultNum = inject("changeSearchResultNum") as Function;
// 歌单
const playListStore = usePlayListStore()
// 传递给组件的歌单
let playListValue: Ref<Array<playList>> = ref([])
// 单曲列表
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
    playListValue.value = []
    searchApi
        .search({ keywords: route.query.keywords as string, type: search.searchType.single, limit: limit.value, offset: (offset.value - 1) * limit.value })
        .then((res) => {
            console.log(res);
            let data = (res as any).result
            if (data) {
                data.songs.forEach((item: any) => {
                    playListValue.value.push({
                        id: item.id,
                        songName: item.name,
                        singer: item.ar.map((singerItem: { name: string }) => singerItem.name),
                        singerId: item.ar.map((singerItem: { id: number }) => singerItem.id),
                        source: route.query.keywords as string,
                        sourceType: sourceType.search,
                        time: formatTime(item.dt / 1000),
                        albumName: item.al.name,
                        albumId: item.al.id,
                        pop: item.pop
                    })
                });
                total.value = data?.songCount > 300 ? 300 : data?.songCount;
                changeSearchResultNum(total.value);
                singleList.value = data.songs;
            }
        });
}
searchSingleList();

// let showPlayAllAndDownloadAllVue = ref(true)
// 监听关键词的变化
watch(() => route.query.keywords, () => {
    // 刷新组件，以防止上次的数据残留
    // showPlayAllAndDownloadAllVue.value = false;
    // showPlayAllAndDownloadAllVue.value = true;
    searchSingleList();
    offset.value = 1;
})

// 标题配置
const titleSetting = ref([
    {
        name: "音乐标题",
        props: "songName",
        length: 220
    },
    {
        name: "歌手",
        props: "singer",
        length: 75
    },
    {
        name: "专辑",
        props: "albumName",
        length: 75
    },
    {
        name: "时长",
        props: "time",
        length: 15
    },
    {
        name: "热度",
        props: "pop",
        length: 40
    },
])

onBeforeMount(() => {
    emitter.emit("changeHeaderSearchValue", {
        value: route.query.keywords,
        searchAtOnce: false,
    });
});
</script>

<style lang="scss" scoped>
@use "@/style/component/searchResult/children/single.scss";
</style>
