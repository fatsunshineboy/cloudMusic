<template>
    <div id="dailySongs">
        <div class="tool">
            <div class="header">
                <div class="calendar">
                    <div class="body">
                        <div class="header left"></div>
                        <div class="header right"></div>
                        <div class="gap"></div>
                        <div class="date">{{ new Date().getDate() }}</div>
                    </div>
                </div>
                <div class="text">
                    <div class="title">每日歌曲推荐</div>
                    <div class="intro">根据你的音乐口味生成，每天6：00更新</div>
                </div>
            </div>
            <PlayAllAndDownloadAllVue :play-list="dailySongs"></PlayAllAndDownloadAllVue>
        </div>
        <SongPlayListVue :play-list-detail="dailySongs" :title-setting="titleSetting"></SongPlayListVue>
    </div>
</template>

<script lang="ts" setup>
import recommendApi from '@/api/request/recommendApi';
import { formatTime } from '@/utils/format';
import SongPlayListVue from '@/components/musicItem/SongPlayList.vue';
import { inject, ref } from 'vue';
import PlayAllAndDownloadAllVue from "@/components/utils/PlayAllAndDownloadAll.vue";
import sourceType from '@/type/sourceType';

let dailySongs = ref([])
recommendApi.getRecommendSongs().then(res => {
    console.log(res);
    dailySongs.value = res.data.dailySongs.map((item: any) => {
        return {
            id: item.id,
            songName: item.name,
            singer: item.ar.map((singerItem: { name: string }) => singerItem.name),
            singerId: item.ar.map((singerItem: { id: number }) => singerItem.id),
            sourceType: sourceType.dailySongs,
            source: "每日歌曲推荐",
            time: formatTime(item.dt / 1000),
            albumName: item.al.name,
            albumId: item.al.id,
        }
    })
    console.log(dailySongs.value);

})

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
])

const clearSelectedIndex = inject("clearSelectedIndex") as Function;
clearSelectedIndex();

</script>

<style lang="scss" scoped>
@use "@/style/views/content/musicItem/dailySongs.scss";
</style>