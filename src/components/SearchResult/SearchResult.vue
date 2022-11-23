<template>
    <div class="searchResult">
        <div class="searchValue">
            <div class="title">搜索&nbsp;{{ route.query?.keywords }}</div>
        </div>
        <div class="maybeInteresting">
            <div class="title">你可能感兴趣</div>
            <div class="content">
                <div class="interestingItem">
                    <div class="img"></div>
                    <div class="text">
                        <div id="title">歌手：米津玄师</div>
                        <div id="introduce">粉丝：544万，歌曲：180</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navigate">
            <ul>
                <li :class="{ isSelected: isSelectedIndex === 1 }" @click="urlNavigate('/search/single', 1)">单曲</li>
                <li :class="{ isSelected: isSelectedIndex === 2 }" @click="urlNavigate('/search/singer', 2)">歌手</li>
                <li :class="{ isSelected: isSelectedIndex === 3 }" @click="urlNavigate('/search/album', 3)">专辑</li>
                <li :class="{ isSelected: isSelectedIndex === 4 }" @click="urlNavigate('/search/video', 4)">视频</li>
                <li :class="{ isSelected: isSelectedIndex === 5 }" @click="urlNavigate('/search/songList', 5)">歌单</li>
                <li :class="{ isSelected: isSelectedIndex === 6 }" @click="urlNavigate('/search/lyric', 6)">歌词</li>
                <li :class="{ isSelected: isSelectedIndex === 7 }" @click="urlNavigate('/search/podcast', 7)">播客</li>
                <li :class="{ isSelected: isSelectedIndex === 8 }" @click="urlNavigate('/search/voice', 8)">声音</li>
                <li :class="{ isSelected: isSelectedIndex === 9 }" @click="urlNavigate('/search/user', 9)">用户</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
import { inject, ref } from "vue"
import { useRoute, useRouter } from 'vue-router';
import searchApi from '@/api/request/searchApi';
import search from '@/type/search';

const route = useRoute()
const router = useRouter()
const isSelectedIndex = ref(1)
const keywords = route.query?.keywords;

// 默认搜索单曲，默认分页为 30
searchApi.search({ keywords: keywords as string, type: search.searchType.single }).then(res => {
    console.log(res);
})

// 清除侧边栏的高亮显示
const clearSelectedIndex = inject("clearSelectedIndex") as Function;
clearSelectedIndex()

const urlNavigate = (url: string, index: number): void => {
    isSelectedIndex.value = index;
    router.push(url);
}

</script>

<style lang="scss" scoped>
@import "@/style/component/searchResult/searchResult.scss";
</style>