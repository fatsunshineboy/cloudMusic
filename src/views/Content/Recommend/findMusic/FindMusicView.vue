<template>
    <div id="findMusic">
        <div class="navigate">
            <div class="personalRecommend" :class="{ isSelected: isSelectedIndex === 1 }"
                @click="urlNavigate('/findmusic/personalrecommend', 1)">个性推荐</div>
            <div class="exclusiveCustome" :class="{ isSelected: isSelectedIndex === 2 }"
                @click="urlNavigate('/findmusic/exclusivecustome', 2)">专属推荐</div>
            <div class="playList" :class="{ isSelected: isSelectedIndex === 3 }"
                @click="urlNavigate('/findmusic/playlist', 3)">歌单</div>
            <div class="rank" :class="{ isSelected: isSelectedIndex === 4 }" @click="urlNavigate('/findmusic/rank', 4)">
                排行榜
            </div>
            <div class="singer" :class="{ isSelected: isSelectedIndex === 5 }"
                @click="urlNavigate('/findmusic/singer', 5)">
                歌手</div>
            <div class="latestMusic" :class="{ isSelected: isSelectedIndex === 6 }"
                @click="urlNavigate('/findmusic/latestmusic', 6)">最新音乐</div>
        </div>
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script lang="ts" setup>
import { inject, provide, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
let isSelectedIndex = ref(1);

const urlNavigate = (url: string, index: number): void => {
    isSelectedIndex.value = index;
    router.push(url);
}

// 暴露给子组件，修改当前的导航栏
const changeFindMusicIsSelectedIndex = (index: number) => {
    isSelectedIndex.value = index;
}
provide("changeFindMusicIsSelectedIndex", changeFindMusicIsSelectedIndex);

// 修改当前导航栏
const changeContentIsSelectedIndex = inject("changeContentIsSelectedIndex") as Function;
changeContentIsSelectedIndex(route.meta.selectedIndex);
</script>

<style lang="scss" scoped>
@use "@/style/views/content/recommend/findMusic/findMusic.scss";
</style>