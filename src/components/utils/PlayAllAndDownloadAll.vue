<template >
    <div id="tool">
        <div class="playAll">
            <div class="iconItem" @click="playAllButton">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shipinbofangshibofang"></use>
                </svg>
            </div>
            <div class="title" @click="playAllButton">播放全部</div>
            <div class="add" @click="addAllPlayButton">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiahao1"></use>
                </svg>
            </div>
        </div>
        <div class="downloadAll">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai1"></use>
                </svg>
            </div>
            <div class="download">下载全部</div>
        </div>
        <el-dialog v-model="dialogVisible" align-center center draggable :modal="false" :close-on-click-modal="false"
            :close-on-press-escape="false" :destroy-on-close="true" :show-close="false" class="elDialog">

            <div class="content">
                <div class="close" @click="(dialogVisible = false)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                </div>
                <div class="warn">
                    <div class="title">替换播放列表</div>
                    <div class="tip">"播放全部"将会替换当前的播放列表，是否继续？</div>
                    <div class="notWarnAgain">
                        <input type="checkbox" ref="noConfirmWarnRef">
                        <div class="notWarnAgainTitle">不再提醒</div>
                    </div>
                    <div class="button">
                        <div class="continue" @click="confirmPlayAll">
                            继续</div>
                        <div class="cancel" @click="(dialogVisible = false)">取消</div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import type playList from '@/type/playList';
import { usePlayListStore } from '@/stores/playList';

const props = defineProps({
    playList: {
        type: Array<playList>,
        required: true
    }
})

const noConfirmWarnRef = ref()
const playListStore = usePlayListStore();

const dialogVisible = ref(false)

// 添加全部到歌单
const addAllPlayButton = () => {
    // 歌单没有歌的时候直接播放
    if (playListStore.playList.length === 0) {
        playListStore.setPlayList(props.playList);
        return;
    }
    // console.log(props.playList);

    playListStore.appendSongToPlayLsit(props.playList, false);
}

// 播放全部
const playAllButton = () => {
    // 播放列表没有歌曲就直接替换
    console.log(props.playList);

    if (playListStore.playList.length === 0 || JSON.parse(localStorage.getItem("replacePlayListWithoutWarn") || "false")) {
        playListStore.setPlayList(props.playList);
    }
    else {
        dialogVisible.value = true
    }
}
// 播放全部的确认框
const confirmPlayAll = () => {
    playListStore.setPlayList(props.playList);
    dialogVisible.value = false;
    localStorage.setItem("replacePlayListWithoutWarn", noConfirmWarnRef.value.checked)
}

</script>

<style lang="scss" scoped>
@use "@/style/component/utils/playAllAndDownloadAll.scss";
</style>