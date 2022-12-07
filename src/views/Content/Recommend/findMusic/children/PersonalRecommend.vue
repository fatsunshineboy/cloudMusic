<template>
    <div id="personalRecommend">
        <div class="banner"></div>
        <div class="recommendPlayList">
            <div class="title">推荐歌单 ></div>
            <div class="playList">
                <RecommendItemVue :itme-line-count="5" :play-list="recommendResource"></RecommendItemVue>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts" >
import recommendApi from '@/api/request/recommendApi';
import RecommendItemVue from '@/components/musicItem/RecommendItem.vue';
import { ref } from 'vue';

let recommendResource = ref([])

// 获取每日推荐歌单
const getRecommendResource = () => {
    recommendApi.getRecommendResource().then(res => {
        recommendResource.value = (res as any).recommend?.slice(0, 9)
        console.log(recommendResource.value);
    })
    // recommendApi.getPlaylistPersonalized({}).then(res => {
    //     console.log(res);
    // })
    // recommendApi.getRecommendSongs().then(res => {
    //     console.log(res);
    // })
}
getRecommendResource()

</script>

<style lang="scss" scoped>

</style>