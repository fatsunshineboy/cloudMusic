<template>
    <div id="personalRecommend">
        <div class="banner">
            <el-carousel :interval="3500" type="card" height="204px">
                <el-carousel-item v-for="(item, index) in bannerList" :key="index">
                    <img class="bannerImg" :src="`${(item as any).imageUrl}?param=1100y408`" height="204"
                        @click="clickBanner(item)">
                    <span class="bannerTitle" :style="`background-color:${(item as any).titleColor}`">{{ (item as
                            any).typeTitle
                    }}</span>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="recommendPlayList recommendChildren">
            <div class="title" @click="router.push('/findmusic/playlist')">推荐歌单</div>
            <div class="playList">
                <RecommendItemVue :itme-line-count="5" :play-list="recommendResource" :show-daily-recommend="true">
                </RecommendItemVue>
            </div>
        </div>
        <!-- <div class="hotPodcast recommendChildren">
            <div class="title" @click="router.push('/podcast')">热门播客</div>
            <div class="podcast">

            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts" >
import utilsApi from '@/api/request/utilsApi';
import recommendApi from '@/api/request/recommendApi';
import RecommendItemVue from '@/components/musicItem/RecommendItem.vue';
import { inject, ref } from 'vue';
import { usePlayListStore } from '@/stores/playList';
import songApi from '@/api/request/songApi';
import { formatTime } from '@/utils/format';
import { useRoute, useRouter } from 'vue-router';
import djApi from '@/api/request/djApi';
import { useLoginStore } from '@/stores/login';
import sourceType from '@/type/sourceType';

const playListStore = usePlayListStore();
const router = useRouter();
const route = useRoute();

const loginStore = useLoginStore();

let recommendResource = ref([])

// 获取每日推荐歌单
const getRecommendResource = () => {
    recommendApi.getRecommendResource().then(res => {
        recommendResource.value = (res as any).recommend?.slice(0, 9);
        // console.log(recommendResource.value)
    })
    djApi.getDJPersonalizedRecommend().then(res => {
        console.log(res);
    })
}
getRecommendResource()

let bannerList = ref([])
// 获取banner
const getBanner = () => {
    utilsApi.getBanner().then(res => {
        // console.log(res);
        bannerList.value = (res as any).banners
    })
}
getBanner();
// 点击了banner
const clickBanner = (item: any) => {
    console.log(item);

    switch (item.targetType) {
        // 播放单曲
        case 1:
            songApi.getSongDetail({ ids: item.targetId }).then(res => {
                console.log((res as any).songs[0]);
                let song = (res as any).songs[0]
                playListStore.appendSongToPlayLsit([{
                    id: song.id,
                    songName: song.name,
                    singer: song.ar[0].name,
                    sourceType: sourceType.banner,
                    source: "banner",
                    time: formatTime(song.dt / 1000)
                }], true)
            })
            break;
        // 跳转到专辑页面
        case 10:
            router.push(`/album/${item.targetId}`)
            break;
        // 歌单
        case 1000:
            router.push(`/songlist/${item.targetId}`)
            break;
        // 跳转到数字专辑购买页面
        case 3000:
            window.open(`${item.url}`);
            break;
        default:
            break;
    }
}

const changeFindMusicIsSelectedIndex = inject("changeFindMusicIsSelectedIndex") as Function;
changeFindMusicIsSelectedIndex(route.meta.selectedIndex);
</script>

<style lang="scss" scoped>
@use "@/style/views/content/recommend/findMusic/children/personalRecommend.scss";
</style>