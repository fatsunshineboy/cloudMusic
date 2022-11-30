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

import {
    reactive,
    provide,
    type StyleValue,
    onBeforeUnmount,
    onMounted,
} from "vue";

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

// 监听屏幕尺寸变化
const getWindowInfo = () => {
    const windowInfo = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    // 改变内容区域的高度
    // 60为顶部高度,73为底部高度,21为中间局域间隔（顶部padding加上部padding）
    let contentMinHeight = windowInfo.height - 60 - 73 - 21;
    // 60为顶部高度,73为底部高度,20为距离底部的间隔
    let hotSearchDetailMinHeight = windowInfo.height - 60 - 73 - 20;
    hotSearchDetailMinHeight = hotSearchDetailMinHeight > 1235 ? 1235 : hotSearchDetailMinHeight;
    changeStyleSetting({
        "--contentMinHeight": contentMinHeight + "px",
        "--hotSearchDetailMinHeight": hotSearchDetailMinHeight + "px",
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

onMounted(() => {
    getWindowInfo();
    // alert("本网站仅为个人学习所用，调用网易云音乐官方接口，本站不会保存用户任何个人信息，推荐扫码登录，如有损失，本站不负任何责任！");
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", cancalDebounce);
});
</script>

<style scoped lang="scss">
@import "@/style/setting.scss";
</style>
