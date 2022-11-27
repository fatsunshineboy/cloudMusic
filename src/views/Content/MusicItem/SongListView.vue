<template>
    <div>歌单</div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(() => route.params.id, () => {
    console.log(route.params.id);
})

</script>

<style lang="scss" scoped>

</style>