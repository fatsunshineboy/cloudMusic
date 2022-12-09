<template>
    <div>歌手{{ route.params.id }}</div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style lang="scss" scoped>
@use "@/style/views/content/musicItem/singer.scss";
</style>