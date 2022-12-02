<template >
    <div id="tool">
        <div class="playAll">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shipinbofangshibofang"></use>
                </svg>
            </div>
            <div class="title">播放全部</div>
            <div class="add">
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
                <div class="close">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                </div>
                <div class="warn">
                    <div class="title">替换播放列表</div>
                    <div class="tip">"播放全部"将会替换当前的播放列表，是否继续？</div>
                    <div class="notWarnAgain">
                        <input type="checkbox">
                        <div class="notWarnAgainTitle">不再提醒</div>
                    </div>
                    <div class="button">
                        <div class="continue">继续</div>
                        <div class="cancel">取消</div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<style lang="scss" scoped>
@use "@/style/component/utils/playAllAndDownloadAll.scss";
</style>