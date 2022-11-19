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

        <audio class="audio" ref="audio" preload="auto" @timeupdate="timeUpdate">
            <source :src=songUrl type="audio/mp3" />
            <!-- <source src="song.ogg" type="audio/ogg" /> -->
            <embed height="100" width="100" :src=songUrl />
        </audio>

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
                    <div class="start" @click="startPlaySong" v-if="!playMusic">
                        <div class="startItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shipinbofangshibofang"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="pause" @click="pauseMusic" v-if="playMusic">
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
                    <div class="starttime">{{ isNaN(startTime) ? "--:--" : formatTime(startTime) }}</div>
                    <!-- <div class="progress">
                        <div class="progressItem" style="--progress: 90%"></div>
                    </div> -->
                    <div class="timeProgress">
                        <div class="timeProgressItem" id="timeProgressItem">
                            <el-slider v-model="startTime" :min=0 :max="endTime || 100" :show-tooltip=false size="small"
                                @change="changeTime" />
                        </div>
                        <!-- <div class="triangle"></div> -->
                    </div>
                    <div class="endtime">{{ isNaN(endTime) ? "--:--" : formatTime(endTime) }}</div>
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
import { onBeforeMount, onBeforeUnmount, onMounted, ref, watch, type Ref } from "vue";
import songApi from "@/api/request/songApi";
import useMusicStore from "@/stores/music"

// 音量
const musicStore = useMusicStore();
// 喜欢
const isFavourite = ref(true);
// 播放音乐
const playMusic = ref(false)
// 音乐播放器
const audio = ref()
// 音量,默认是30,在store中修改
const volumeValue = ref()
// 音乐 url
let songUrl = ref("http://m7.music.126.net/20221118104439/e9181695ac4bf6ce7f74c3ba9c4955a9/ymusic/c48c/fb99/1950/a0634034446f904929e37dc2686ba91b.mp3");
// 开始播放
const startPlaySong = () => {
    playMusic.value = true;
    // songApi.getMusicUrlNew({ id: 33894312, level: "standard" }).then((res) => {
    //     // http://m7.music.126.net/20221118104439/e9181695ac4bf6ce7f74c3ba9c4955a9/ymusic/c48c/fb99/1950/a0634034446f904929e37dc2686ba91b.mp3
    //     console.log((res as any)[0].url);
    // });
    console.log(audio.value.play);
    audio.value.play();

};
// 暂停播放
const pauseMusic = () => {
    playMusic.value = false;
    audio.value.pause();
}

// 调节音量
const changeVolume = () => {
    // 存储到本地
    musicStore.setVolume(volumeValue.value);
    audio.value.volume = volumeValue.value / 100;
}

// 静音后恢复音量
const recoverVolume = () => {
    if (musicStore.volumeValue === 0) {
        volumeValue.value = musicStore.defaultVolume;
        musicStore.setVolume(volumeValue.value);
    }
    else {
        volumeValue.value = musicStore.volumeValue;
    }
    audio.value.volume = volumeValue.value / 100;

}

// 静音
const mute = () => {
    volumeValue.value = 0;
    audio.value.volume = 0;
}

// watch(volumeValue, (newVal) => {
//     musicStore.setVolume(newVal)
// })

// setInterval(() => {
//     console.log(1, audio.value.played);
//     console.log(2, audio.value.paused);
//     console.log(3, audio.value.ended);
//     console.log(3, audio.value.error);

// }, 1000)

// 音频时间进度
let timeValue = ref(0)
// 音频起始时间
let startTime = ref(0)
// 音频结束时间
let endTime = ref(0)
// 判断是否在拖到进度条
let isDragProgress = ref(false)
// 初始化音频
const initSong = () => {
    endTime.value = audio.value?.duration
    // console.log(endTime.value);
}

// 监听音频播放
const timeUpdate = () => {
    // 优化：自己写个进度条组件，监听拖拽
    if (isDragProgress.value) {
        return
    }
    startTime.value = audio.value.currentTime;
    musicStore.setPauseTime(startTime.value)
}
// 监听切换歌曲
watch(songUrl, () => {
    initSong();
    musicStore.setMusicUrl(songUrl.value)
}, {
    immediate: true
})
// 改变时间
const changeTime = () => {
    audio.value.currentTime = startTime.value;
}

// 格式化时间
const formatTime = (time: number): string => {
    let minute = Math.floor(time / 60) > 9 ? Math.floor(time / 60) : 0 + "" + Math.floor(time / 60);
    let second = Math.floor(time % 60) > 9 ? Math.floor(time % 60) : 0 + "" + Math.floor(time % 60);
    return minute + ":" + second
}

onMounted(() => {
    // 获取本地存储的值
    volumeValue.value = musicStore.volumeValue;
    audio.value.volume = volumeValue.value / 100;

    // 获取上一次听到的进度
    startTime.value = musicStore.pauseTime

    // 组件一开始获取一次音频长度
    setTimeout(() => {
        initSong()
    }, 500)
})

// onBeforeUnmount(() => {
//     if (volumeValue.value === 0) {
//         alert("静音")
//         musicStore.setVolume(0);
//     }
// })

</script>

<style lang="scss" scoped>
@import "@/style/footer.scss";
</style>
