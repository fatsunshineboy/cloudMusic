<template >
    <div id="songPlayList">
        <div id="title">
            <div class="action">操作</div>
            <div class="title">标题</div>
            <div class="songer">歌手</div>
            <div class="album">专辑</div>
            <div class="time">时间</div>
        </div>
        <div class="singleItem " v-for="(item, index) in props.playListDetail" :key="index"
            :class="{ bgColor: index % 2 === 0 }" @dblclick="playSong(item)">
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
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePlayListStore } from '@/stores/playList';
import type playList from '@/type/playList';
import formatTime from '@/utils/formatTime';

const props = defineProps(["playListDetail"])
const playListStore = usePlayListStore()

// 格式化序号
const countOrder = (index: number): string => {
    return index < 10 ? 0 + "" + (index + 1) : index + "";
}

const playSong = (single: any) => {
    console.log(single);
    let signleItem: playList = {
        id: single.id,
        songName: single.name,
        singer: single.ar[0].name,
        source: "搜索页",
        time: formatTime(single.dt / 1000)
    }
    playListStore.appendSongToPlayLsit([signleItem])
}

</script>

<style lang="scss" scoped>
@use "@/style/views/content/musicItem/songlist/children/songPlayList.scss";
</style>