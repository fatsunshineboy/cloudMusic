<template>
    <div class="content">
        <div class="navigate">
            <div class="recommend">
                <div class="findMusic" @click="urlNavigate('/findmusic')">发现音乐</div>
                <div class="podcast" @click="urlNavigate('/podcast')">播客</div>
                <div class="video" @click="urlNavigate('/video')">视频</div>
                <div class="follow" @click="urlNavigate('/follow')">关注</div>
                <div class="broadcast" @click="urlNavigate('/broadcast')">直播</div>
                <div class="fm" @click="urlNavigate('/fm')">私人FM</div>
            </div>

            <div class="myMusic">
                <div class="myFavouriteMusic" @click="urlNavigate('/myfavouritemusic')">我喜欢的音乐</div>
                <div class="localDownload" @click="urlNavigate('/localdownload')">本地与下载</div>
                <div class="musicLogs" @click="urlNavigate('/musiclogs')">最近播放</div>
            </div>

            <div class="musicList">我的歌单</div>

        </div>

        <div class="show">
            <router-view></router-view>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const urlNavigate = (url: string): void => {
    router.push(url)
}
</script>

<style lang="scss" scoped>
@import "@/style/content.scss";
</style>