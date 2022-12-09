<template>
    <div id="songList">
        <div class="header">
            <div class="albumImg">
                <img :src="`${albumInfo?.picUrl}?param=300y300`">
            </div>
            <div class="detail">
                <div class="title">
                    <div class="alias">专辑</div>
                    <div class="name">{{ albumInfo?.name }}</div>
                    <div class="edit iconItem"></div>
                </div>
                <div class="tool">
                    <PlayAllAndDownloadAllVue :play-list="formatPlayList(playListAllToPlay)"></PlayAllAndDownloadAllVue>
                </div>
                <div class="info">
                    <div class="artist">
                        <span>歌手：&nbsp;</span>
                        <span class="name" v-for="(artistItem, artistIndex) in albumInfo?.artists"
                            @click="router.push(`/singer/${albumInfo?.artist?.id}`)">
                            <span class="nameItem">{{ artistItem?.name }}</span>
                            <span v-show="artistIndex != albumInfo?.artists?.length - 1">&nbsp;/&nbsp;</span>
                        </span>
                    </div>
                    <div class="time">
                        <span>时间：&nbsp;</span>
                        <span class="timeItem">{{ formatFullTime(albumInfo?.publishTime) }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="navigate">
            <div class="songPlayList" :class="{ isSelected: albumStatus === 1 }" @click="(albumStatus = 1)">歌曲列表
            </div>
            <div class="comment" :class="{ isSelected: albumStatus === 2 }" @click="(albumStatus = 2)">评论({{
                    albumInfo?.info?.commentCount || 0
            }})</div>
            <div class="collecter" :class="{ isSelected: albumStatus === 3 }" @click="(albumStatus = 3)">专辑详情
            </div>
        </div>
        <SongPlayListVue v-show="(albumStatus === 1)" :play-list-detail="playListAllToPlay"
            :title-setting="titleSetting" :show-tool-title="false"></SongPlayListVue>
        <CommentVue v-if="(albumStatus === 2)" :type="commentType.album" ref="commentRef"></CommentVue>
        <div class="ablbumDetail" v-if="(albumStatus === 3)">
            <div class="intro">专辑介绍</div>
            <p class="text" v-for="(detailItem, detailIndex) in albumDetail" :key="detailIndex">{{ detailItem }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import SongPlayListVue from '@/components/musicItem/SongPlayList.vue';
import CommentVue from '@/components/utils/Comment.vue';
import PlayAllAndDownloadAllVue from '@/components/utils/PlayAllAndDownloadAll.vue';
import router from '@/router';
import { commentType } from '@/type/comment';
import { formatTime } from '@/utils/format';
import albumApi from '@/api/request/albumApi';
import sourceType from '@/type/sourceType';
// import type playList as playListType from '@/type/playList';

const route = useRoute();
const commentRef = ref()

watch(() => route.params.id, () => {
    console.log(123);

    albumInfo.value = undefined
    albumStatus.value = 1;
    playListAllToPlay.value = [];
    getAlbumDetail();
    commentRef.value?.getComment();
})

// 当前点击状态栏
// 1 表示歌曲列表
// 2 表示评论
// 3 表示收藏者 
let albumStatus = ref(1)
// 专辑信息
let albumInfo = ref()
// 专辑详情
let albumDetail = ref()
// 播放全部歌单
let playListAllToPlay = ref([])

// 获取专辑详情
const getAlbumDetail = () => {
    albumApi.getAlbumDetail({ id: route.params.id as string }).then(res => {
        console.log(res);
        albumInfo.value = (res as any).album

        albumDetail.value = albumInfo.value.description.split("\n");

        playListAllToPlay.value = (res as any).songs.map((item: any) => {
            return {
                id: item.id,
                songName: item.name,
                singer: item.ar.map((singerItem: { name: string }) => singerItem.name),
                singerId: item.ar.map((singerItem: { id: number }) => singerItem.id),
                source: route.params.id,
                sourceType: sourceType.album,
                sourceName: item.al.name,
                albumName: item.al.name,
                albumId: item.al.id,
                time: formatTime(item.dt / 1000),
                pop: item.pop
            }
        })

    }).catch(err => {
        console.log(err);
        router.replace("/")
    })
}
getAlbumDetail()

// 格式化时间
const formatFullTime = (time: number) => {
    let date = new Date(time)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

// 格式化歌单
const formatPlayList = (playList: any) => {
    console.log(playList);

    return playList.map((item: any) => {
        return {
            id: item.id,
            songName: item.songName,
            singer: item.singer,
            source: item.source,
            sourceType: item.sourceType,
            sourceName: item.albumName,
            time: item.time
        }
    })
}

// 专辑的标题配置
let titleSetting = ref([
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

</script>

<style lang="scss" scoped>
@use "@/style/views/content/musicItem/album.scss";
</style>