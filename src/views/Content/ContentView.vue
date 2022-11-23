<template>
    <div class="content">
        <div class="navigate">
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
                    @click="urlNavigate('/myfavouritemusic', 7)">
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
                    @click="urlNavigate('/musiccloud', 10)">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-cloud"></use>
                        </svg>
                    </div>
                    <div class="titleItem">我的音乐云盘</div>
                </div>
                <div class="myPodcast" :class="{ isSelected: isSelectedIndex === 11 }"
                    @click="urlNavigate('/mypodcast', 11)">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-music_recordplayer"></use>
                        </svg>
                    </div>
                    <div class="titleItem">我的播客</div>
                </div>
                <div class="myCollection" :class="{ isSelected: isSelectedIndex === 12 }"
                    @click="urlNavigate('/mycollection', 12)">
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

            <div class="createMusicList">
                <div class="createMusicListItem">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-24gl-lock2"></use>
                        </svg>
                    </div>
                    <div class="titleItem">纯音乐</div>
                </div>
                <div class="createMusicListItem">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-24gl-lock2"></use>
                        </svg>
                    </div>
                    <div class="titleItem">纯音乐</div>
                </div>
                <div class="createMusicListItem">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-24gl-lock2"></use>
                        </svg>
                    </div>
                    <div class="titleItem">纯音乐</div>
                </div>
            </div>

            <div class="collectMusicListTitle">
                <div class="titleItem">收藏的歌单</div>
                <div class="triangle" title="新建歌单">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sanjiao1"></use>
                    </svg>
                </div>
            </div>

            <div class="collectMusicList">
                <div class="collectMusicListItem">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-music_playlist"></use>
                        </svg>
                    </div>
                    <div class="titleItem">明我长相忆1707喜欢的歌单</div>
                </div>
                <div class="collectMusicListItem">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-music_playlist"></use>
                        </svg>
                    </div>
                    <div class="titleItem">明我长相忆1707喜欢的歌单</div>
                </div>
                <div class="collectMusicListItem">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-music_playlist"></use>
                        </svg>
                    </div>
                    <div class="titleItem">明我长相忆1707喜欢的歌单</div>
                </div>
            </div>

        </div>

        <div class="show">
            <router-view></router-view>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isSelectedIndex = ref(1);

const clearSelectedIndex = () => {
    isSelectedIndex.value = 0;
}

const urlNavigate = (url: string, index: number): void => {
    isSelectedIndex.value = index;
    router.push(url);
}

provide("clearSelectedIndex", clearSelectedIndex)
</script>

<style lang="scss" scoped>
@import "@/style/views/content.scss";
</style>