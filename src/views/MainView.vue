<template>
    <div class="root" :style=styleSetting as any>
        <HeaderViewVue></HeaderViewVue>
        <ContentViewVue></ContentViewVue>
        <FooterViewVue></FooterViewVue>
    </div>
</template>

<script setup lang="ts">
import HeaderViewVue from "@/views/Header/HeaderView.vue";
import ContentViewVue from "@/views/Content/ContentView.vue";
import FooterViewVue from "@/views/Footer/FooterView.vue";

import { reactive, provide, type StyleValue } from "vue";

import type { styleSetting } from "@/type/styleSetting";

// 修改样式的方法,并将方法提供给子组件

let styleSetting: styleSetting = reactive({
    // 主要颜色
    "--primaryColor": "#ec4141",
    // 字体颜色
    "--fontColor": "#fff",
    // svg 图标字体颜色
    "--svgColor": "#ec4141",
    // 图标颜色
    "--iconColor": "#fff",
    // 图标背景颜色
    "--iconBackColor": "black",
    // placeHolder颜色
    "--placeHolderColor": "#ccc"
})

const changeStyleSetting: Function = (styleSettingObject: styleSetting): void => {
    // 保持响应性
    Object.assign(styleSetting, { ...styleSettingObject })
}

provide("changeStyleSettingFun", changeStyleSetting);
</script>

<style scoped lang="scss">
@import "@/style/setting.scss";
</style>