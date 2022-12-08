<template>
    <div id="recommendItem" :style="{ '--itmeLineCount': props.itmeLineCount }">
        <div class="item dailyRecommend" v-if="showDailyRecommend" @click="router.push('/dailysongs')">
            <div class="img">
                <img src="@/assets/image/dailyRecommend.jpg">
                <div class="calendar">
                    <div class="body">
                        <div class="header left"></div>
                        <div class="header right"></div>
                        <div class="gap"></div>
                        <div class="date">{{ new Date().getDate() }}</div>
                    </div>
                </div>
                <div class="playIcon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shipinbofangshibofang"></use>
                    </svg>
                </div>
                <div class="tip">根据你的音乐口味生成每日更新</div>
            </div>
            <div class="title">每日歌曲推荐</div>
        </div>
        <div class="item" v-for="(item, index) in finalPlayList"
            :class="{ clearMarginRight: countClearMarginRight(index) }"
            @click="router.push(`/songlist/${(item as any)?.id}`)">
            <div class="img">
                <img :src="`${(item as any)?.picUrl || (item as any)?.coverImgUrl}?param=300y300`">
                <div class="playCount">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bofang"></use>
                        </svg>
                    </div>
                    <div class="count">{{ formatCount(((item as any)?.playcount || (item as any)?.playCount) || 0) }}
                    </div>
                </div>
                <div class="playIcon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shipinbofangshibofang"></use>
                    </svg>
                </div>
            </div>
            <div class="title">{{ (item as any)?.name }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import playListApi from "@/api/request/playListApi";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { formatCount } from "@/utils/format";

const router = useRouter();

const props = defineProps({
    // 一行显示几个
    itmeLineCount: {
        type: Number,
        required: true,
        default: 5
    },
    playList: {
        type: Array,
        required: true
    },
    showDailyRecommend: {
        type: Boolean,
        default: false
    }
})

let officialId = [1287293193, 1463586082]

let finalPlayList = ref();

watch(() => props.playList, async () => {
    let result = props.playList;
    for (let i = 0; i < result?.length; i++) {
        let item = result[i];
        if (officialId.indexOf((item as any).userId) != -1) {
            await playListApi.getPlaylistDetail({
                id: (item as any).id
            }).then(res => {
                result.splice(i, 1, (res as any).playlist)
            })
        }
    }
    finalPlayList.value = result
    // console.log(result);
}, {
    immediate: true
})

const countClearMarginRight = (index: number) => {
    let other = props.showDailyRecommend ? 1 : 0;
    return (index + +1 + other) % props.itmeLineCount === 0 ? true : false;
}
</script>

<style lang="scss" scoped>
@use "@/style/component/musicItem/recommendItem.scss";
</style>