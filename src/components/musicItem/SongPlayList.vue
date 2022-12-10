<template >
    <div id="songPlayList">
        <div id="title" :class="{ titleWithTool: props.showToolTitle }">
            <div class="action" v-if="props.showToolTitle">操作</div>
            <div class="titlename" v-for="(item, index) in props.titleSetting" :key="index"
                :style="`flex:1 1 ${item.length}px;`">
                {{ item.name }}</div>
        </div>
        <div class="singleItem " v-for="(item, index) in props.playListDetail" :key="index"
            :class="{ bgColor: index % 2 === 0 }" @dblclick="playSong(index)">
            <div class="tool">
                <div class="nowToPlayIcon" v-if="item.id === playListStore.playList[playListStore.nowToPlayId].id">
                    <svg class="icon" aria-hidden="true" v-if="musicStore.musicIsPlaying">
                        <use xlink:href="#icon-shengyin"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true" v-else>
                        <use xlink:href="#icon-shengyin1"></use>
                    </svg>
                </div>
                <div class="order" v-else>{{ countOrder(index + props.orederBaseCount) }}</div>
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
                <div class="contentItem" v-for="(settingItem, settingIndex) in props.titleSetting" :key="settingIndex"
                    :class="settingItem.props" :style="`flex:1 1 ${settingItem.length}px;`">

                    <span v-if="settingItem.props === 'pop'">
                        <meter class="meter" min="0" max="100" :value="item[settingItem.props]" color="red"></meter>
                    </span>
                    <span v-else-if="settingItem.props === 'singer'"
                        v-for="(singerItem, singerIndex) in item[settingItem.props]" :key="singerIndex">
                        <span class="singer" @click="goToSinger(item, singerIndex)">{{ singerItem
                        }}</span>
                        <span v-show="singerIndex != (item[settingItem.props] as any)?.length - 1">&nbsp;/&nbsp;</span>
                    </span>
                    <span v-else-if="settingItem.props === 'albumName'">
                        <span class="albumName" @click="router.push(`/album/${item?.albumId}`)
                        ">{{ item[settingItem.props] }}</span>
                    </span>
                    <span v-else :class="settingItem.props">{{
                            item[settingItem.props]
                    }}</span>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import useMUsicStore from '@/stores/music';
import { usePlayListStore } from '@/stores/playList';
import type sourceType from "@/type/sourceType";

const props = defineProps({
    playListDetail: {
        type: Array<{
            id?: String,
            songName?: String,
            singer?: Array<String>,
            singerId?: Array<String>,
            source?: String,
            sourceType?: sourceType,
            sourceName?: string,
            time?: string,
            albumName?: string,
            albumId?: string,
            pop?: string,
            [x: string]: string
        }>,
        required: true
    },
    titleSetting: {
        type: Array<{
            name: string | undefined,
            length: number,
            props: string
        }>,
        required: true
    },
    showToolTitle: {
        type: Boolean,
        default: false
    },
    // 页码计数的基数
    orederBaseCount: {
        type: Number,
        default: 0
    }
})
const playListStore = usePlayListStore()
const musicStore = useMUsicStore();

// 格式化序号
const countOrder = (index: number): string => {
    return index < 9 ? 0 + "" + (index + 1) : index + 1 + "";
}

// 双击播放歌曲
const playSong = (index: number) => {
    console.log(props.playListDetail);

    playListStore.setPlayList(props.playListDetail.map((item: any) => {
        return {
            id: item.id,
            songName: item.songName,
            singer: item.singer,
            source: item.source,
            sourceType: item.sourceType,
            sourceName: item.sourceName,
            time: item.time
        }
    }))
    playListStore.setNowToPlayId(index);
}

// 点击了歌手
const goToSinger = (item: any, index: number) => {
    if (item.singerId[index] != undefined) {
        router.push(`/singer/${item.singerId[index]}`)
    }
}
</script>

<style lang="scss" scoped>
@use "@/style/component/musicItem/songPlayList.scss";
</style>