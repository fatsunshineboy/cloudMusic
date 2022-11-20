<template>
    <div class="notShowDiv" style="height: 60px;"></div>
    <div class="header">
        <div class="musictitle" @click="goHome">
            <div class="iconItem">
                <img src="@/assets/icon/wangyiyunyinle.svg" class="svg" width="15">
            </div>
            <div class="title">网易云音乐</div>
        </div>
        <div class="shift">
            <div class="left" @click="request">
                <div class="leftItem"></div>
            </div>
            <div class="right">
                <div class="rightItem isNotSelected"></div>
            </div>
        </div>
        <div class="search">
            <div class="searchIcon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
            </div>
            <input class="searchBox" type="text" placeholder="毛不易" @focus="focusSearch" @blur="hideSearch">
            <HotSearchDetail v-if="showHotSearchDetail" class="hotSearchDetail"></HotSearchDetail>
        </div>
        <div class="identify">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-maikefeng"></use>
                </svg>
            </div>
        </div>
        <div class="right">
            <div class="user">
                <div class="img">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-a-morentouxiang2x"></use>
                        </svg>
                    </div>
                </div>
                <div class="name">用户空间分割后的开始反攻</div>
                <div class="vip">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-VIP"></use>
                        </svg>
                    </div>
                    <div class="triangleIcon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-sanjiao1"></use>
                        </svg>
                    </div>
                </div>
                <div class="color">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-clothes"></use>
                        </svg>
                    </div>
                </div>
                <div class="setting">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shezhi"></use>
                        </svg>
                    </div>
                </div>
                <div class="email">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-email"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="gap">
                <div class="iconItem">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-vertical_line"></use>
                    </svg>
                </div>
            </div>
            <div class="sys">
                <div class="mini">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-neibusuoxiao2"></use>
                        </svg>
                    </div>
                </div>
                <div class="small">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-zuixiaohua"></use>
                        </svg>
                    </div>
                </div>
                <div class="large">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-zuidahua"></use>
                        </svg>
                    </div>
                </div>
                <div class="close">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-guanbi"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import emitter from '@/utils/eventBus';
import searchApi from '@/api/request/searchApi';
import HotSearchDetail from "@/components/HotSearchDetail.vue";

const router = useRouter();
let showHotSearchDetail = ref(false)

const request = () => {
    // emitter.emit("switchSong", { songId: 405998841, playAtOnce: true })
    searchApi.hotSearchListDetail().then((res) => {
        console.log(res.data);
    })
}
// 聚焦输入框时显示热搜榜
const focusSearch = () => {
    showHotSearchDetail.value = true;
}
// 有待优化
// 隐藏热搜榜
const hideSearch = () => {
    let listener = (e: any) => {
        e.preventDefault();
        for (let i = 0; i < e.path.length; i++) {
            if (e.path[i].className === "hotSearchDetail") {
                return
            }
        }
        showHotSearchDetail.value = false;
        window.removeEventListener("click", listener);
    }
    window.addEventListener("click", listener)
}

// 跳转首页
const goHome = () => {
    router.push("/")
};

</script>

<style scoped lang="scss">
@import "@/style/views/header.scss";
</style>