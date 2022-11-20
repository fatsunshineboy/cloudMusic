<template>
    <div class="notShowDiv" style="height: 73px"></div>
    <div class="footer">
        <div class="introduce">
            <div class="songImg">
                <div class="img">
                    <img id="img" src="@/assets/image/chengdu.jpg" />
                </div>
            </div>
            <div class="detail">
                <div class="songAndLove">
                    <div class="songname">成都但是空格分开萨非</div>
                    <div class="vip">VIP</div>
                    <div class="favourite" v-if="isFavourite">
                        <div class="iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xiai"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="notFavourite" v-if="!isFavourite">
                        <div class="iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-aixin"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="singer">赵雷</div>
            </div>
        </div>

        <!-- <audio class="audio" ref="audio" preload="auto" :src=songUrl @timeupdate="timeUpdate"
            @loadedmetadata="loadedmetadata" @ended="endMusic">
            <source :src=songUrl type="audio/mp3" />
            <source src="song.ogg" type="audio/ogg" />
            <embed height="100" width="100" :src=songUrl />
        </audio> -->

        <div class="player">
            <div class="playerItem">
                <div class="control">
                    <div class="order">
                        <div class="repeatItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xunhuanbofang"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="last">
                        <div class="lastItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shangyishouweidianji"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="start" @click="startPlaySong" v-if="!isStart">
                        <div class="startItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shipinbofangshibofang"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="pause" @click="pauseMusic" v-if="isStart">
                        <div class="pauseItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-weibiaoti519"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="next">
                        <div class="nextItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xiayishouweidianji"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="song">
                        <div class="songItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-geciweidianji"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="time">
                    <div class="starttime">{{ isNaN(startTime as number) ? "--:--" : formatTime(startTime as number) }}
                    </div>
                    <!-- <div class="progress">
                        <div class="progressItem" style="--progress: 90%"></div>
                    </div> -->
                    <div class="timeProgress">
                        <div class="timeProgressItem" id="timeProgressItem">
                            <el-slider v-model="startTime" :min=0 :max="endTime" :show-tooltip=false size="small"
                                @change="changeTime" />
                        </div>
                        <!-- <div class="triangle"></div> -->
                    </div>
                    <div class="endtime">{{ isNaN(endTime as number) ? "--:--" : formatTime(endTime as number) }}</div>
                </div>
            </div>
        </div>

        <div class="other">
            <div class="quality">
                <div class="option">无损</div>
            </div>
            <div class="effect">
                <div class="effectItem iconItem">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-yinxiao"></use>
                    </svg>
                </div>
            </div>
            <div class="volume">
                <div class="volumeItem iconItem" v-if="volumeValue != 0" @click="mute">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shengyin"></use>
                    </svg>
                </div>

                <!-- 静音图标 -->
                <div class="mutedItem iconItem" v-if="volumeValue === 0" @click="recoverVolume">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shengyinguanbi"></use>
                    </svg>
                </div>
                <!-- 音量进度条 -->
                <div class="volumeProgress">
                    <div class="slider-demo-block">
                        <el-slider v-model="volumeValue" vertical height="85px" :show-tooltip=false
                            @change="changeVolume" />
                    </div>
                    <!-- <div class="triangle"></div> -->
                </div>
            </div>
            <div class="together">
                <div class="togetherItem iconItem">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-renqun"></use>
                    </svg>
                </div>
            </div>
            <div class="playList">
                <div class="playListItem iconItem">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-liebiao"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, inject, type Ref } from "vue";
import songApi from "@/api/request/songApi";
import useMusicStore from "@/stores/music"
import type AudioItem from "@/class/AudioItem";

// 音频时间进度
let timeValue = ref(0)
// 音频起始时间
let startTime: Ref<number | undefined> = ref()
// 音频结束时间
let endTime: Ref<number | undefined> = ref(0)
// 判断是否在拖到进度条
let isDragProgress = ref(false)

// 音量
const musicStore = useMusicStore();
// 喜欢
const isFavourite = ref(true);
// 播放音乐
const isStart = ref(false)
// 音量,默认是30,在store中修改
const volumeValue = ref()

// 音乐播放器
const audioItem: AudioItem = inject("audioItem") as AudioItem;
// 初始化音频
const initSong = () => {
    endTime.value = audioItem.duration
}
// 暂停播放
const pauseMusic = () => {
    isStart.value = false;
    audioItem.pauseMusic();
}
// 调节音量
const changeVolume = () => {
    if (volumeValue.value === 0) {
        musicStore.setIsMuted(true)
    }
    // 存储到本地
    musicStore.setVolume(volumeValue.value);
    audioItem.volume = volumeValue.value / 100;
}
// 静音
const mute = () => {
    musicStore.setIsMuted(true);
    volumeValue.value = 0;
    audioItem.volume = 0;
}
// 静音后恢复音量
const recoverVolume = () => {
    volumeValue.value = musicStore.volumeValue === 0 ? musicStore.defaultVolume : musicStore.volumeValue;
    musicStore.setIsMuted(false);
    audioItem.volume = volumeValue.value / 100;
}

// 音频播放器事件
// 监听音频播放
const timeUpdate = () => {
    // 优化：自己写个进度条组件，监听拖拽
    if (isDragProgress.value) {
        return
    }
    musicStore.setPauseTime(startTime.value as number)
    startTime.value = audioItem.currentTime;
}
audioItem.addEvent_timeupdate(timeUpdate)

// 音频数据加载后
const loadedmetadata = (e: any) => {
    musicStore.setMusicUrl(e.target.src)
    initSong()
}
audioItem.addEvent_loadedmetadata(loadedmetadata)

// 音频播放完
const endMusic = () => {
    startTime.value = undefined;
    musicStore.setPauseTime(0)
    endTime.value = undefined;
    audioItem.src = "http://m802.music.126.net/20221119160324/64f86a8be46bac148aecddd5dbb9eb2b/jd-musicrep-ts/4b29/49a4/74b2/16ac0b6b3f53134ff6ad16f4f41d21eb.mp3";
}
audioItem.addEvent_ended(endMusic)


// 开始播放
const startPlaySong = () => {
    isStart.value = true;
    // songApi.getMusicUrlNew({ id: 405998841, level: "standard" }).then((res) => {
    //     // http://m702.music.126.net/20221119152729/30c2c3e85a2b76873020d4707a188e1d/jd-musicrep-ts/4b29/49a4/74b2/16ac0b6b3f53134ff6ad16f4f41d21eb.mp3
    //     // http://m7.music.126.net/20221118104439/e9181695ac4bf6ce7f74c3ba9c4955a9/ymusic/c48c/fb99/1950/a0634034446f904929e37dc2686ba91b.mp3
    //     console.log((res as any)[0].url);
    // });
    audioItem.startPlaySong(startTime.value as number);
};

const changeTime = () => {
    audioItem.currentTime = startTime.value as number;
}

// 格式化时间
const formatTime = (time: number): string => {
    let minute = Math.floor(time / 60) > 9 ? Math.floor(time / 60) : 0 + "" + Math.floor(time / 60);
    let second = Math.floor(time % 60) > 9 ? Math.floor(time % 60) : 0 + "" + Math.floor(time % 60);
    return minute + ":" + second
}

onMounted(() => {
    if (musicStore.isMuted) {
        volumeValue.value = 0;
        audioItem.volume = volumeValue.value / 100;
        musicStore.setVolume(musicStore.defaultVolume);
    }
    else {
        volumeValue.value = musicStore.volumeValue;
        audioItem.volume = volumeValue.value / 100;
    }

    audioItem.src = musicStore.musicUrl === undefined ? "" : musicStore.musicUrl;
    // 组件一开始获取一次音频长度
    setTimeout(() => {
        // 获取上一次听到的进度
        // console.log(songUrl.value);
        startTime.value = musicStore.pauseTime;
    }, 500)
})

</script>

<style lang="scss" scoped>
@import "@/style/footer.scss";
</style>