<template>
    <div id="songList">
        <div class="header">
            <div class="songListImg">
                <img :src="playList?.coverImgUrl" alt="" srcset="">
            </div>
            <div class="detail">
                <div class="title">
                    <div class="alias">歌单</div>
                    <div class="name">{{ playList?.name }}</div>
                    <div class="edit iconItem"></div>
                </div>
                <div class="creater">
                    <div class="createrImg" v-show="playList?.creator?.avatarUrl">
                        <img :src="`${playList?.creator?.avatarUrl}?param=100y100`" alt="" srcset="">
                    </div>
                    <div class="name" v-show="playList?.creator?.nickname">{{ playList?.creator?.nickname }}</div>
                    <div class="time">{{ formateTime(playList?.createTime) }}创建</div>
                </div>
                <div class="tool">
                    <PlayAllAndDownloadAllVue :play-list="playListAllToPlay"></PlayAllAndDownloadAllVue>
                </div>
                <div class="introduce">
                    <div class="tags">
                        <span class="introduceTitle">标签 : </span>
                        <span v-show="!playList?.tags?.length">添加标签</span>
                        <span v-show="playList?.tags?.length">{{ playList?.tags }}</span>
                    </div>
                    <div class="songsCount"><span class="introduceTitle">歌曲 : </span>{{ playList?.trackCount }}</div>
                    <div class="playTime"><span class="introduceTitle">播放 : </span>{{ playList?.playCount }}</div>
                    <div class="brief">
                        <span class="introduceTitle">简介 : </span>
                        <span v-show="!playList?.description">添加简介</span>
                        <span v-show="playList?.description">{{ playList?.description }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="navigate">
            <div class="songPlayList" :class="{ isSelected: songListStatus === 1 }" @click="(songListStatus = 1)">歌曲列表
            </div>
            <div class="comment" :class="{ isSelected: songListStatus === 2 }" @click="(songListStatus = 2)">评论({{
                    playList?.commentCount || 0
            }})</div>
            <div class="collecter" :class="{ isSelected: songListStatus === 3 }" @click="(songListStatus = 3)">收藏者
            </div>
        </div>
        <SongPlayListVue v-show="(songListStatus === 1)" :play-list-detail="playList?.tracks"></SongPlayListVue>
        <CommentVue v-if="(songListStatus === 2)" :type="commentType.playlist" ref="commentRef"></CommentVue>
        <CollecterVue v-if="(songListStatus === 3)"></CollecterVue>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import SongPlayListVue from './children/SongPlayList.vue';
import CommentVue from './children/Comment.vue';
import CollecterVue from './children/Subscribers.vue';
import PlayAllAndDownloadAllVue from '@/components/utils/PlayAllAndDownloadAll.vue';
import playListApi from "@/api/request/playListApi";
import router from '@/router';
import { commentType } from '@/type/comment';

const route = useRoute();
const commentRef = ref()

watch(() => route.params.id, () => {
    songListStatus.value = 1;
    playList.value = []
    getSongListDetail();
    commentRef.value?.getComment();
})

// 当前点击状态栏
// 1 表示歌曲列表
// 2 表示评论
// 3 表示收藏者 
let songListStatus = ref(1)

// 歌单
let playList = ref()

// 播放全部歌单
let playListAllToPlay = ref([])

// 获取歌单详情
const getSongListDetail = () => {
    playListApi.getPlaylistDetail({ id: route.params.id as string }).then(res => {
        playList.value = (res as any).playlist;
        console.log((res as any).playlist);
    }).catch(err => {
        console.log(err);
        router.replace("/")
    })
}
getSongListDetail()

// 格式化时间
const formateTime = (time: number) => {
    let date = new Date(time)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

</script>

<style lang="scss" scoped>
@use "@/style/views/content/musicItem/songlist/songList.scss";
</style>