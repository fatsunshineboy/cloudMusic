<template>
    <div class="notShowDiv" style="height: 73px"></div>
    <div class="footer">
        <div class="introduce" v-if="playListStore.playList.length">
            <div class="songImg">
                <div class="img">
                    <img id="img" :src="songDetail?.al.picUrl" @error="imgError" />
                </div>
            </div>
            <div class="detail">
                <div class="songAndLove">
                    <div class="songname">{{ songDetail?.name || "" }}</div>
                    <div class="vip" v-if="songDetail?.fee === 1">VIP</div>
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
                <div class="singer">{{ songDetail?.ar[0].name || "" }}</div>
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
                <div class="control" :class="{ exitAudioSrc: playListStore.playList.length }">
                    <div class="order">
                        <div class="repeatItem iconItem" title="列表循环">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xunhuanbofang"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="last" title="上一首">
                        <div class="lastItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shangyishouweidianji"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="start controlItem" @click="playListStore.playList.length && startPlaySong()"
                        v-if="!isStart" title="播放">
                        <div class="startItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shipinbofangshibofang"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="pause controlItem" @click="playListStore.playList.length && pauseMusic()" v-if="isStart"
                        title="暂停">
                        <div class="pauseItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-weibiaoti519"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="next" title="下一首">
                        <div class="nextItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xiayishouweidianji"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="song" title="打开歌词">
                        <div class="songItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-geciweidianji"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="time">
                    <div class="starttime" v-if="playListStore.playList.length">{{ isNaN(startTime as number) ? "--:--"
                            :
                            formatTime(startTime as number)
                    }}
                    </div>
                    <div class="timeProgress">
                        <div class="timeProgressItem" id="timeProgressItem">
                            <el-slider v-model="startTime" :min=0 :max="endTime" :show-tooltip=false size="small"
                                @change="changeTime" />
                        </div>
                        <!-- <div class="triangle"></div> -->
                    </div>
                    <div class="endtime" v-if="playListStore.playList.length">
                        {{ isNaN(endTime as number) ? "--:--" : formatTime(endTime as number) }}
                    </div>
                </div>
            </div>
        </div>

        <div class="other" v-if="playListStore.playList.length">
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
            <div class="playList" title="播放列表" @click="showPlayListButton">
                <div class="playListItem iconItem">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-liebiao"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <PlayListVue v-if="isShowPlayList" @click="isShowPlayListFlag = false"></PlayListVue>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch, type Ref } from "vue";
import songApi from "@/api/request/songApi";
import useMusicStore from "@/stores/music"
import AudioItem from "@/class/AudioItem";
import formatTime from "@/utils/formatTime";
import emitter from "@/utils/eventBus"
import PlayListVue from "@/components/musicItem/PlayList.vue";
import { usePlayListStore } from "@/stores/playList";

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
const isFavourite = ref(false);
// 播放音乐
const isStart = ref(false)
// 音量,默认是30,在store中修改
const volumeValue = ref()

// 音乐播放器
const audioItem: AudioItem = new AudioItem();
// 初始化音频
const initSong = () => {
    endTime.value = audioItem.duration
}
// 开始播放
const startPlaySong = () => {
    isStart.value = true;
    audioItem.startPlaySong(startTime.value as number);
};
// 暂停时，双击歌单正在播放的歌，开始播放
const startPlaySongToPlayList = () => {
    if (isStart.value) {
        return
    }
    startPlaySong();
}
emitter.on("startPlaySongToPlayList", startPlaySongToPlayList)
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
    // musicStore.setSongId(e.target.src)
    initSong()
}
audioItem.addEvent_loadedmetadata(loadedmetadata)

// 音频播放完
const endMusic = () => {
    startTime.value = undefined;
    musicStore.setPauseTime(0)
    endTime.value = undefined;
    // nextSong();
}
audioItem.addEvent_ended(endMusic)

// 事件进度条改变
const changeTime = () => {
    if (typeof startTime.value === "number") {
        audioItem.currentTime = startTime.value as number;
    }
}

// 歌曲详情
let songDetail = ref();

// 获取歌单
const playListStore = usePlayListStore();

// 切歌,传入对象，对象的 songid 为 number 类型的数组
// playAtOnce 是否立刻开始播放音乐，初次不加载
// interface songInfo {
//     songId: string,
//     playAtOnce: boolean
// }

const switchSong = (songInfo: any) => {
    startTime.value = 0;
    endTime.value = undefined;
    if (songInfo.songId) {
        songApi.getSongDetail({
            ids: songInfo.songId
        }).then(res => {
            if ((res as any).songs) {
                songDetail.value = (res as any).songs[0]
                songDetail.value.al.picUrl += "?param=250y250";
            }

        })
        getSongUrlBySongId({ songId: songInfo.songId }).then((res) => {
            let songUrl = (res as any).url
            if (songUrl) {
                audioItem.src = songUrl
            }
            else {
                // 错误
                nextSong();
            }
            if (songInfo.playAtOnce) {
                startPlaySong()
            }
        });
    }
};
// 事件总线，切歌
// emitter.on("switchSong", switchSong);

watch(() => playListStore.playList[playListStore.nowToPlayId], () => {
    if (playListStore.playList.length === 0) {
        audioItem.src = ""
        return
    }
    if (playListStore.playList[playListStore.nowToPlayId]?.id) {
        switchSong({
            songId: playListStore.playList[playListStore.nowToPlayId].id,
            playAtOnce: true
        })
    }
})

// 通过 songId 拿到歌曲，传入对象，对象只有一个 songId 和 level
const getSongUrlBySongId = (songInfo: { songId: string, level?: string }) =>
    new Promise((resolve, reject) => {
        {
            // 本地存储以记录最后一次听的歌
            // musicStore.setSongId(songInfo.songId)
            songApi.getMusicUrlNew({ id: songInfo.songId, level: songInfo.level || "standard" }).then((res) => {
                resolve((res as any).data[0])
            })
        }
    })

// 切换下一首歌
const nextSong = () => {
    alert("切换下一首歌");
}

// 显示歌单列表
let isShowPlayList = ref(false)
// 判断有没有点到playList
let isShowPlayListFlag = ref(true)
// 显示歌单按钮
const showPlayListButton = () => {
    isShowPlayList.value = !isShowPlayList.value;
    isShowPlayListFlag.value = false;
}
// 捕获阶段
let captureListener = () => {
    isShowPlayListFlag.value = true;
}
document.body.addEventListener('click', captureListener, true)

// 冒泡阶段
let propagationListener = () => {
    if (isShowPlayListFlag.value) {
        isShowPlayList.value = false
    }
}
document.body.addEventListener('click', propagationListener)

onMounted(() => {
    // 加载时如果是静音，统一恢复到默认音量
    // 否则按照最后一次调节的音量
    if (musicStore.isMuted) {
        volumeValue.value = 0;
        audioItem.volume = volumeValue.value / 100;
        musicStore.setVolume(musicStore.defaultVolume);
    }
    else {
        volumeValue.value = musicStore.volumeValue;
        audioItem.volume = volumeValue.value / 100;
    }

    // if (musicStore.songId) {
    //     switchSong({ songId: musicStore.songId, playAtOnce: false })
    // }
    // 恢复上次听的最后一首歌
    if (playListStore.playList.length > 0) {
        if (playListStore.playList[playListStore.nowToPlayId]?.id) {
            switchSong({ songId: playListStore.playList[playListStore.nowToPlayId].id, playAtOnce: false })
        }
    }

    // 组件一开始获取一次音频长度
    setTimeout(() => {
        // 获取上一次听到的进度
        // console.log(songUrl.value);
        startTime.value = musicStore.pauseTime;
    }, 500)
})

onBeforeUnmount(() => {
    document.body.removeEventListener('click', captureListener, true)
    document.body.removeEventListener('click', propagationListener)
})

const imgError = (e: any) => {
    console.log(e);
}
</script>

<style lang="scss" scoped>
@use "@/style/views/footer.scss";
</style>