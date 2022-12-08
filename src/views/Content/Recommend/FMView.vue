<template>
    <div>私人FM</div>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
// 修改当前导航栏
const changeContentIsSelectedIndex = inject("changeContentIsSelectedIndex") as Function;
changeContentIsSelectedIndex(route.meta.selectedIndex);
</script>

<style lang="scss" scoped>
    
</style>