<template>
    <div>
        歌手
    </div>
</template>

<script setup lang="ts">
import { inject, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import searchApi from '@/api/request/searchApi';
import search from '@/type/search';
import emitter from '@/utils/eventBus';

const route = useRoute()
const keywords = route.query?.keywords;
const changeSearchResultNum = inject("changeSearchResultNum") as Function;

// 默认搜索单曲，默认分页为 30
searchApi.search({ keywords: keywords as string, type: search.searchType.singer }).then(res => {
    changeSearchResultNum((res as any).result.artistCount)
    console.log(res);
})

onBeforeMount(() => {
    emitter.emit("changeHeaderSearchValue", {
        value: keywords,
        searchAtOnce: false
    })
})
</script>

<style lang="scss" scoped>

</style>