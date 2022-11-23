<template>
    <div class="searchResult"></div>
</template>

<script lang="ts" setup>
import { inject } from "vue"
import { useRoute } from 'vue-router';
import searchApi from '@/api/request/searchApi';
import search from '@/type/search';


const router = useRoute()
const keywords = router.query?.keywords;

// 默认搜索单曲，默认分页为 30
searchApi.search({ keywords: keywords as string, type: search.searchType.single }).then(res => {
    console.log(res);
})

const clearSelectedIndex = inject("clearSelectedIndex") as Function;
clearSelectedIndex()

</script>

<style lang="scss" scoped>

</style>