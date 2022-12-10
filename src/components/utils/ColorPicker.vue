<template>
    <div id="colorPicker">
        <div class="subject">
            <div class="subjectItem" v-for="(item, index) in colorList" :key="index" @click="changeTheme(item)">
                <div class="color" :style="`--customeColor:${item.color}`"></div>
                <div class="title">{{ item.text }}</div>
            </div>
        </div>
        <div class="pureColor"></div>
    </div>
</template>
  
<script lang="ts" setup>
import darkTheme from '@/utils/darkTheme';
import getDefaultTheme from '@/utils/defaultTheme';
import { inject, ref } from 'vue';

let colorList = [{
    color: "#212124",
    text: "酷炫黑"
}, {
    color: "#ec4141",
    text: "官方红"
}, {
    color: "#ff87b4",
    text: "可爱粉"
}, {
    color: "#66b7ff",
    text: "天际蓝"
}, {
    color: "#5dc78a",
    text: "清新绿"
}, {
    color: "#faac62",
    text: "土豪金"
}]

const changeStyleSetting = inject("changeStyleSettingFun") as Function;

const changeTheme = (item: { text: string, color: string }) => {
    localStorage.setItem("color", item.color)
    if (item.color != "#212124") {
        changeStyleSetting(getDefaultTheme())
        return;
    }
    changeStyleSetting(darkTheme)
}

</script>
  

<style lang="scss" scoped>
@use "@/style/component/utils/colorPicker.scss";
</style>