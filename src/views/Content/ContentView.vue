<template>
    <div class="content">
        <div class="navigate customeScroll">
            <div class="recommend">
                <div class="findMusic" :class="{ isSelectedRecommend: isSelectedIndex === 1 }"
                    @click="urlNavigate('/findmusic', 1)">发现音乐</div>
                <div class="podcast" :class="{ isSelectedRecommend: isSelectedIndex === 2 }"
                    @click="urlNavigate('/podcast', 2)">播客</div>
                <div class="video" :class="{ isSelectedRecommend: isSelectedIndex === 3 }"
                    @click="urlNavigate('/video', 3)">视频</div>
                <div class="follow" :class="{ isSelectedRecommend: isSelectedIndex === 4 }"
                    @click="urlNavigate('/follow', 4)">关注</div>
                <div class="broadcast" :class="{ isSelectedRecommend: isSelectedIndex === 5 }"
                    @click="urlNavigate('/broadcast', 5)">直播</div>
                <div class="fm" :class="{ isSelectedRecommend: isSelectedIndex === 6 }" @click="urlNavigate('/fm', 6)">
                    私人FM
                </div>
            </div>

            <div class="myMusicTitle">我的音乐</div>

            <div class="myMusic">
                <div class="myFavouriteMusic" :class="{ isSelected: isSelectedIndex === 7 }"
                    @click="myFavouriteMusicButton">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-aixin"></use>
                        </svg>
                    </div>
                    <div class="titleItem">我喜欢的音乐</div>
                    <div class="iconItem heart">

                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-huaban"></use>
                        </svg>
                    </div>
                </div>
                <div class="localDownload" :class="{ isSelected: isSelectedIndex === 8 }"
                    @click="urlNavigate('/localdownload', 8)">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xiazai1"></use>
                        </svg>
                    </div>
                    <div class="titleItem">本地与下载</div>
                </div>
                <div class="musicLogs" :class="{ isSelected: isSelectedIndex === 9 }"
                    @click="urlNavigate('/musiclogs', 9)">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-clock"></use>
                        </svg>
                    </div>
                    <div class="titleItem">最近播放</div>
                </div>
                <div class="musicCloud" :class="{ isSelected: isSelectedIndex === 10 }"
                    @click="urlNavigate('/musiccloud', 10)" v-if="loginStore.loginStatus">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-cloud"></use>
                        </svg>
                    </div>
                    <div class="titleItem">我的音乐云盘</div>
                </div>
                <div class="myPodcast" :class="{ isSelected: isSelectedIndex === 11 }"
                    @click="urlNavigate('/mypodcast', 11)" v-if="loginStore.loginStatus">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-music_recordplayer"></use>
                        </svg>
                    </div>
                    <div class="titleItem">我的播客</div>
                </div>
                <div class="myCollection" :class="{ isSelected: isSelectedIndex === 12 }"
                    @click="urlNavigate('/mycollection', 12)" v-if="loginStore.loginStatus">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shoucang1"></use>
                        </svg>
                    </div>
                    <div class="titleItem">我的收藏</div>
                </div>
            </div>


            <div class="createMusicListTitle">
                <div class="titleItem">创建的歌单</div>
                <div class="triangle">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sanjiao1"></use>
                    </svg>
                </div>
                <div class="iconItem" title="新建歌单">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jiahao1"></use>
                    </svg>
                </div>
            </div>

            <div class="createMusicList" v-if="loginStore.loginStatus">
                <div class="createMusicListItem" v-for="(item, index) in createMusicList" :key="index"
                    :class="{ isSelected: isSelectedIndex === 13 + index }"
                    @click="urlNavigate(`/songlist/${(item as any)?.id}`, 13 + index)">
                    <!-- 私密歌单 -->
                    <div class="iconItem" v-if="(item as any)?.privacy === 10">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-24gl-lock2"></use>
                        </svg>
                    </div>
                    <!-- 公开歌单 -->
                    <div class="iconItem" v-if="(item as any)?.privacy === 0">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-music_playlist"></use>
                        </svg>
                    </div>
                    <div class="titleItem">{{ (item as any)?.name }}</div>
                </div>
            </div>

            <div class="collectMusicListTitle" v-if="loginStore.loginStatus && collectMusicList.length">
                <div class="titleItem">收藏的歌单</div>
                <div class="triangle" title="新建歌单">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sanjiao1"></use>
                    </svg>
                </div>
            </div>

            <div class="collectMusicList" v-if="loginStore.loginStatus">
                <div class="collectMusicListItem" v-for="(item, index) in collectMusicList" :key="index"
                    :class="{ isSelected: isSelectedIndex === 13 + createMusicList.length + index }"
                    @click="urlNavigate(`/songlist/${(item as any)?.id}`, 13 + createMusicList.length + index)">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-music_playlist"></use>
                        </svg>
                    </div>
                    <div class="titleItem">{{ (item as any)?.name }}</div>
                </div>
            </div>

        </div>

        <div class="show customeScroll">
            <router-view></router-view>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref, provide, watch, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginStore } from '@/stores/login';
import userApi from '@/api/request/userApi';
import emitter from '@/utils/eventBus';

const router = useRouter();
const isSelectedIndex = ref(1);
const loginStore = useLoginStore();

// 我喜欢的音乐
let myFavouriteMusicLsit = ref();
// 创建的歌单
let createMusicList: Ref<object[]> = ref([]);
// 收藏的歌单
let collectMusicList: Ref<object[]> = ref([]);

const clearSelectedIndex = () => {
    isSelectedIndex.value = 0;
}

const urlNavigate = (url: string, index: number): void => {
    isSelectedIndex.value = index;
    router.push(url);
}

provide("clearSelectedIndex", clearSelectedIndex)

// 获取账号信息
const getUserAccount = () => {
    // userApi.getUserAccount(loginStore.cookie).then((res) => {
    //     console.log(res);
    // });
    userApi.getUserSubAccount().then(res => {
        // console.log(res);
    })
    userApi.getUserPlyList({ uid: loginStore.uid }).then(res => {
        const playlist = (res as any).playlist;
        // console.log(res);

        playlist.forEach((item: any) => {
            switch (item.specialType) {
                case 0:
                case 20:
                    if (item.userId === loginStore.uid) {
                        // 创建的歌单
                        createMusicList.value.push(item)
                    } else {
                        // 收藏的歌单
                        collectMusicList.value.push(item)
                    }
                    break;
                case 5:
                    // 我喜欢的音乐
                    if (item.userId === loginStore.uid) {
                        myFavouriteMusicLsit.value = item
                    } else {
                        collectMusicList.value.push(item)
                    }
                    break;
                default:
                    break;
            }
        });

        // console.log(myFavouriteMusicLsit.value);
        // console.log(createMusicList.value);
        // console.log(collectMusicList.value);

    })
};

// 点击了我喜欢的音乐
const myFavouriteMusicButton = () => {
    if (loginStore.cookie) {
        urlNavigate(`/songlist/${myFavouriteMusicLsit.value?.id}`, 7)
    }
    else {
        emitter.emit("setLoginDialogVisible");
    }
}

watch(() => loginStore.loginStatus, () => {
    if (!loginStore.loginStatus) return
    getUserAccount();
})

const exitToClearContent = () => {
    myFavouriteMusicLsit.value = undefined
    createMusicList.value = []
    collectMusicList.value = []
}
emitter.on("exitToClearContent", exitToClearContent);
</script>

<style lang="scss" scoped>
@use "@/style/views/content/content.scss";
</style>