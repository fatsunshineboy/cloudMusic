<template>
    <div>专属订制</div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
// 修改当前导航栏
const changeFindMusicIsSelectedIndex = inject("changeFindMusicIsSelectedIndex") as Function;
changeFindMusicIsSelectedIndex(route.meta.selectedIndex);
</script>

<style lang="scss" scoped>

</style>