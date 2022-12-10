<template >
    <div id="playList">

        <div class="header">
            <div class="title">当前播放</div>
            <div class="tool">
                <div class="sum">{{ `总${playListStore.playList.length}首` }}</div>
                <div class="clear" @click="playListStore.clearPlayList()">清空列表</div>
                <div class="collect">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shoucang2"></use>
                        </svg>
                    </div>
                    <div class="collectTitle">收藏全部</div>
                </div>
            </div>
        </div>

        <div class="content customeScroll" ref="playListScrollRef">
            <div class="songItem" v-for="(item, index) in playListStore.playList" :key="index"
                :class="{ bgColor: index % 2 === 0, nowToPlay: playListStore.nowToPlayId === index }"
                @dblclick="playSong(index)">
                <div class="songName" :title="item.songName">{{ item.songName }}</div>
                <div class="singer" :title="item?.singer?.join(',')">
                    <span class="artistItem" v-for="(artistItem, artistIndex) in item?.singer">
                        <span class="nameItem" @click="router.push('/singer/' + item.singerId[artistIndex])">{{ artistItem
                        }}</span>
                        <span v-show="artistIndex != item?.singer?.length - 1">&nbsp;/&nbsp;</span>
                    </span>
                </div>
                <div class="source iconItem" :title="`来源:&nbsp;${formatSource(item)}`" @click.stop="goToSource(item)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-lianjie"></use>
                    </svg>
                </div>
                <div class="time">{{ item.time }}</div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { usePlayListStore } from '@/stores/playList';
import type playList from '@/type/playList';
import sourceType from '@/type/sourceType';
import emitter from '@/utils/eventBus';
import { onMounted, ref, watch, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
// 歌单
const playListStore = usePlayListStore()

const playSong = (index: number) => {
    if (playListStore.nowToPlayId === index) {
        emitter.emit("startPlaySongToPlayList");
        return
    }
    playListStore.setNowToPlayId(index)
}

const playListScrollRef: Ref<HTMLDivElement | undefined> = ref()
const playListScroll = () => {
    playListScrollRef.value?.scrollTo(0, (playListStore.nowToPlayId - 6) * 34)
}

// 点击了来源
const goToSource = (item: playList) => {
    switch (item.sourceType) {
        case sourceType.search:
            router.push({ path: '/search', query: { keywords: item.source } })
            break;
        case sourceType.playList:
            router.push('/songlist/' + item.source);
            break;
        case sourceType.banner:
            router.push({ path: '/' })
            break;
        case sourceType.dailySongs:
            router.push({ path: '/dailysongs' })
            break;
        case sourceType.album:
            router.push('/album/' + item.source)
            break;
        default:
            break;
    }
    emitter.emit("hidePlayList");
}
// 格式化来源
const formatSource = (item: playList): string => {
    switch (item.sourceType) {
        case sourceType.search:
            return "搜索页"
        case sourceType.playList:
            return item.sourceName as string;
        case sourceType.banner:
            return "banner"
        case sourceType.dailySongs:
            return "每日歌曲推荐"
        case sourceType.album:
            return item.sourceName as string;
        default:
            break;
    }
    return ""
}

watch(() => playListStore.nowToPlayId, () => {
    playListScroll();
}, {
    immediate: true
})
onMounted(() => {
    playListScroll();
})
</script>

<style lang="scss" scoped>
@use "@/style/component/musicItem/playList.scss";
</style>