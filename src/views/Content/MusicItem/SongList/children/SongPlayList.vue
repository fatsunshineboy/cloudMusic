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
            :class="{ bgColor: index % 2 === 0 }" @dblclick="playSong(index)">
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
                <div class="title">{{ item.songName }}</div>
                <div class="songer">{{ item.singer }}</div>
                <div class="album">{{ item.albumName }}</div>
                <div class="time">{{ item.time }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePlayListStore } from '@/stores/playList';

const props = defineProps(["playListDetail"])
const playListStore = usePlayListStore()

// 格式化序号
const countOrder = (index: number): string => {
    return index < 10 ? 0 + "" + (index + 1) : index + "";
}

const playSong = (index: number) => {
    playListStore.setPlayList(props.playListDetail.map((item: any) => {
        return {
            id: item.id,
            songName: item.songName,
            singer: item.singer,
            source: item.source,
            sourceType: item.sourceType,
            playListName: item.playListName,
            time: item.time
        }
    }))
    playListStore.setNowToPlayId(index);
}

</script>

<style lang="scss" scoped>
@use "@/style/views/content/musicItem/songlist/children/songPlayList.scss";
</style>