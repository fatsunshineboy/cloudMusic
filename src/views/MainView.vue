<template>
    <div id="root">
        <div class="root" :style="styleSetting">
            <HeaderViewVue></HeaderViewVue>
            <ContentViewVue></ContentViewVue>
            <FooterViewVue></FooterViewVue>
        </div>
        <LoginViewVue></LoginViewVue>
    </div>
</template>

<script setup lang="ts">
import HeaderViewVue from "@/views/Header/HeaderView.vue";
import ContentViewVue from "@/views/Content/ContentView.vue";
import FooterViewVue from "@/views/Footer/FooterView.vue";
import LoginViewVue from "./LoginView.vue";
import config from "@/style/setting.module.scss";

import {
    reactive,
    provide,
    type StyleValue,
    onBeforeUnmount,
    onMounted,
    nextTick,
} from "vue";
import emitter from "@/utils/eventBus";

// 修改样式的方法,并将方法提供给子组件
let styleSetting: StyleValue = reactive({
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
    "--placeHolderColor": "#ccc",
    "--contentMinHeight": "1000px",
    "--hotSearchDetailMinHeight": "580px",
    "--hotSearchDetailWidth": "350px"
});

const changeStyleSetting: Function = (styleSettingObject: object): void => {
    // 保持响应性
    Object.assign(styleSetting, { ...styleSettingObject });
};

provide("changeStyleSettingFun", changeStyleSetting);

let headerheight = Number.parseFloat(config.headerHeight.split("px")[0])
let footerheigth = Number.parseFloat(config.footerHeigth.split("px")[0])
let contentBetweenHeight = Number.parseFloat(config.contentBetweenHeight.split("px")[0])
let playlistheaderheight = Number.parseFloat(config.playListHeaderHeight.split("px")[0])
// 监听屏幕尺寸变化
const getWindowInfo = () => {
    const windowInfo = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    // 改变内容区域的高度
    let contentMinHeight = windowInfo.height - headerheight - footerheigth - contentBetweenHeight;
    let hotSearchDetailMinHeight = windowInfo.height - headerheight - footerheigth - 20;
    hotSearchDetailMinHeight = hotSearchDetailMinHeight > 1235 ? 1235 : hotSearchDetailMinHeight;
    let playListMinHeight = windowInfo.height - headerheight - footerheigth - playlistheaderheight;
    changeStyleSetting({
        "--contentMinHeight": contentMinHeight + "px",
        "--hotSearchDetailMinHeight": hotSearchDetailMinHeight + "px",
        "--playListMinHeight": playListMinHeight + "px"
    });
    // 限制大小变换
    if (windowInfo.width < 1022 || windowInfo.height < 380) {
        // console.log(123);
        window.resizeTo(800, 600)
        // window.open("", "myname", "width=400, height=400");
    }
};

const debounce = (fn: Function, delay: number) => {
    let timer: number;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay);
    };
};

const cancalDebounce = debounce(getWindowInfo, 200);

window.addEventListener("resize", cancalDebounce);

// if (import.meta.env.PROD) {
alert("本网站仅为个人学习所用，调用网易云音乐官方接口，本站不会保存用户任何个人信息，推荐扫码登录，如有损失，本站不负任何责任！");
if (localStorage.getItem("cookie") === null) {
    nextTick(() => {
        emitter.emit("setLoginDialogVisible")
    })
}
// }

onMounted(() => {
    getWindowInfo();
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", cancalDebounce);
});
</script>

<style scoped lang="scss">
// @use "@/style/setting.module.scss";
</style>
