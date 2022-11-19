<template>
    <div class="content">
        <div class="navigate">
            <div class="recommend">
                <div class="findMusic" @click="urlNavigate('/findmusic')">发现音乐</div>
                <div class="podcast" @click="urlNavigate('/podcast')">播客</div>
                <div class="video" @click="urlNavigate('/video')">视频</div>
                <div class="follow" @click="urlNavigate('/follow')">关注</div>
                <div class="broadcast" @click="urlNavigate('/broadcast')">直播</div>
                <div class="fm" @click="urlNavigate('/fm')">私人FM</div>
            </div>

            <div class="myMusicTitle">我的音乐</div>

            <div class="myMusic">
                <div class="myFavouriteMusic" @click="urlNavigate('/myfavouritemusic')">
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
                <div class="localDownload" @click="urlNavigate('/localdownload')">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xiazai1"></use>
                        </svg>
                    </div>
                    <div class="titleItem">本地与下载</div>
                </div>
                <div class="musicLogs" @click="urlNavigate('/musiclogs')">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-clock"></use>
                        </svg>
                    </div>
                    <div class="titleItem">最近播放</div>
                </div>
                <div class="musicCloud" @click="urlNavigate('/musiclogs')">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-cloud"></use>
                        </svg>
                    </div>
                    <div class="titleItem">我的音乐云盘</div>
                </div>
                <div class="myPodcast" @click="urlNavigate('/musiclogs')">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-music_recordplayer"></use>
                        </svg>
                    </div>
                    <div class="titleItem">我的播客</div>
                </div>
                <div class="myCollection" @click="urlNavigate('/musiclogs')">
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

            <div class="collectMusicListTitle">收藏的歌单</div>

            <div class="collectMusicList">
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
import { useRouter } from 'vue-router';

const router = useRouter();

const urlNavigate = (url: string): void => {
    router.push(url)
}
</script>

<style lang="scss" scoped>
@import "@/style/content.scss";
</style>