<template>

    <div class="footer">
        <div class="introduce">
            <div class="songImg">
                <div class="img">
                    <img id="img" src="@/assets/image/chengdu.jpg">
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
                    <div class="start">
                        <div class="startItem iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shipinbofangshibofang"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="pause" v-if="false"></div>
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
                    <div class="starttime">00:05</div>
                    <div class="progress">
                        <div class="progressItem" style="--progress:90%"></div>
                    </div>
                    <div class="endtime">04:07</div>
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
                <div class="volumeItem iconItem">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shengyin"></use>
                    </svg>
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
import { ref } from "vue"
const isFavourite = ref(true)
</script>

<style lang="scss" scoped>
@import "@/style/footer.scss"
</style>