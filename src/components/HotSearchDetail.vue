<template >
    <div class="hotSearchDetail">
        <div class="history">
            <div class="historyBar">
                <div class="historyTitle">
                    搜索历史
                </div>
                <div class="rubbish">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-lajitong"></use>
                        </svg>
                    </div>
                </div>
                <div class="all">查看全部</div>
            </div>
            <div class="historyDetail">
                <div class="historyDetailItem">
                    <span class="text">再见</span>
                    <span class="delete">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-guanbi"></use>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
        <div class="hotSearch">
            <div class="hotSearchTitle">热搜榜</div>
            <div id="hotSearch">
                <div class="hotSearchItem" v-for="(item, index) in hotSearchList"
                    @click="searchKeywords(item.searchWord)">
                    <div class="order" :class="{ theTop: (index + 1) < 4 }">{{ index + 1 }}</div>
                    <div class="detail">
                        <div class="detailItem">
                            <div class="title">{{ item.searchWord }}</div>
                            <div class="hotIcon" v-if="item.iconType === 1">
                                <img :src="item.iconUrl" width="25">
                            </div>
                            <div class="hotIcon" v-if="item.iconType === 5">
                                <img :src="item.iconUrl" width="12">
                            </div>
                            <div class="watched">{{ item.score }}</div>
                        </div>
                        <div class="detailInfo" v-if="item.content">{{ item.content }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import searchApi from '@/api/request/searchApi';
import { useRouter } from "vue-router";

let hotSearchList = ref()
const router = useRouter();

searchApi.hotSearchListDetail().then((res) => {
    hotSearchList.value = res.data;
})

const searchKeywords = (keywords: string) => {
    // router.push(`/search/${keywords}`)
    router.push({
        path: "/search",
        query: {
            keywords
        }
    })
}

</script>

<style lang="scss" scoped>
@import "@/style/component/hotSearchDetail.scss"
</style>