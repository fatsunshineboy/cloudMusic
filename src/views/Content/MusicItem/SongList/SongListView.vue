<template>
    <div id="songList">
        <div class="header">
            <div class="songListImg">
                <img :src="`${playList?.coverImgUrl}?param=300y300`" alt="" srcset="">
            </div>
            <div class="detail">
                <div class="title">
                    <div class="alias">歌单</div>
                    <div class="name">{{ playList?.name }}</div>
                    <div class="edit iconItem"></div>
                </div>
                <div class="creater">
                    <div class="createrImg" v-show="playList?.creator?.avatarUrl">
                        <img :src="`${playList?.creator?.avatarUrl}?param=100y100`"
                            @click="router.push(`/user/${playList?.creator?.userId}`)">
                    </div>
                    <div class="name" v-show="playList?.creator?.nickname"
                        @click="router.push(`/user/${playList?.creator?.userId}`)">{{
                                playList?.creator?.nickname
                        }}</div>
                    <div class="time">{{ formatFullTime(playList?.createTime) }}创建</div>
                </div>
                <div class="tool">
                    <PlayAllAndDownloadAllVue :play-list="formatPlayList(playListAllToPlay)"></PlayAllAndDownloadAllVue>
                </div>
                <div class="introduce">
                    <div class="tags" v-show="(playList?.specialType != 5)">
                        <span class="introduceTitle">标签 : </span>
                        <span class="tagContent" v-show="!playList?.tags?.length">添加标签</span>
                        <span class="tagContent" v-show="playList?.tags?.length">
                            <span class="tagItem" v-for="(item, index) in playList?.tags">
                                <span class="item">{{ item }}</span>
                                <span class="gap" v-show="(index != playList?.tags?.length - 1)">&nbsp;/&nbsp;</span>
                            </span>
                        </span>
                    </div>
                    <div class="songsCount"><span class="introduceTitle">歌曲 : </span>{{ playList?.trackCount }}</div>
                    <div class="playTime"><span class="introduceTitle">播放 : </span>{{ formatCount(playList?.playCount)
                    }}
                    </div>
                    <div class="brief" v-show="(playList?.specialType != 5)">
                        <span class="introduceTitle">简介&nbsp;:&nbsp;</span>
                        <span v-show="!playList?.description">添加简介</span>
                        <div class="moreBrief" :class="{ briefShort: !showLongBrief }" v-show="playList?.description">
                            <span class="briefContent">{{ playList?.description }}</span>
                            <span class="showMore" v-if="(isLongBrief && !showLongBrief)"
                                @click="(showLongBrief = true)"></span>
                            <span class="showLess" v-if="(isLongBrief && showLongBrief)"
                                @click="(showLongBrief = false)"></span>
                        </div>
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
        <SongPlayListVue v-show="(songListStatus === 1)" :play-list-detail="playListAllToPlay"
            :title-setting="titleSetting" :show-tool-title="true"></SongPlayListVue>
        <CommentVue v-if="(songListStatus === 2)" :type="commentType.playlist" ref="commentRef"></CommentVue>
        <CollecterVue v-if="(songListStatus === 3)"></CollecterVue>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import SongPlayListVue from '../../../../components/musicItem/SongPlayList.vue';
import CommentVue from '../../../../components/utils/Comment.vue';
import CollecterVue from '../../../../components/musicItem/Subscribers.vue';
import PlayAllAndDownloadAllVue from '@/components/utils/PlayAllAndDownloadAll.vue';
import playListApi from "@/api/request/playListApi";
import router from '@/router';
import { commentType } from '@/type/comment';
import { formatCount } from "@/utils/format";
import songApi from '@/api/request/songApi';
import { formatTime } from '@/utils/format';
import loginApi from '@/api/request/loginApi';
import { useLoginStore } from '@/stores/login';
import sourceType from '@/type/sourceType';
// import type playList as playListType from '@/type/playList';

const route = useRoute();
const commentRef = ref()
const loginStore = useLoginStore()
let isLongBrief = ref(false)
let showLongBrief = ref(false)

watch(() => route.params.id, () => {
    songListStatus.value = 1;
    playList.value = [];
    playListAllToPlay.value = [];
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
        console.log(res);

        playList.value = (res as any).playlist;
        // 简介超过两行
        if (playList.value?.description?.split("\n").length >= 2 || playList.value?.description?.length > 70) {
            isLongBrief.value = true;
            showLongBrief.value = false;
        }
        // 歌单是自己收藏和创建的
        // if (playList.value?.userId === loginStore.uid) {
        //     console.log(true);
        // }
        // 通过 trackids拿到歌单的全部歌曲
        if (playList.value?.trackIds?.length) {
            let musicIdList = playList.value?.trackIds.map((item: any) => item.id);
            songApi.getSongDetail({
                ids: musicIdList.join(",")
            }).then(res => {
                playListAllToPlay.value = (res as any).songs.map((item: any) => {
                    return {
                        id: item.id,
                        songName: item.name,
                        singer: item.ar.map((singerItem: { name: string }) => singerItem.name),
                        singerId: item.ar.map((singerItem: { id: number }) => singerItem.id),
                        source: route.params.id,
                        sourceType: sourceType.playList,
                        sourceName: playList.value?.name,
                        albumName: item.al.name,
                        albumId: item.al.id,
                        time: formatTime(item.dt / 1000),
                    }
                })
            })
        }
        // console.log((res as any).playlist);
    }).catch(err => {
        console.log(err);
        router.replace("/")
    })
}
getSongListDetail()

// 格式化时间
const formatFullTime = (time: number) => {
    let date = new Date(time)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

// 格式化歌单
const formatPlayList = (playList: any) => {
    return playList.map((item: any) => {
        return {
            id: item.id,
            songName: item.songName,
            singer: item.singer,
            source: item.source,
            sourceType: item.sourceType,
            sourceName: item.playListName,
            time: item.time
        }
    })
}

// 歌单的标题配置
let titleSetting = ref([
    {
        name: "标题",
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
        name: "时间",
        props: "time",
        length: 15
    },
])

</script>

<style lang="scss" scoped>
@use "@/style/views/content/musicItem/songList.scss";
</style>