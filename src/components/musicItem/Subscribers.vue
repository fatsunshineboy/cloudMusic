<template >
    <div id="subscribers">
        <div class="nosubscribers" v-if="!subscribers.length">暂无收藏者</div>

        <div class="subscriber" v-for="(item, index) in subscribers" :key="index"
            @click="router.push(`/user/${item?.userId}`)">
            <img :src="`${item?.avatarUrl}?param=110y110`">
            <div class="userAndIntro">
                <div class="user">
                    <div class="name">{{ item?.nickname }}</div>
                    <div class="gender male" v-show="(item?.gender === 1)">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-nanxing"></use>
                        </svg>
                    </div>
                    <div class="gender female" v-show="(item?.gender === 2)">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-nvxing"></use>
                        </svg>
                    </div>
                </div>
                <div class="intro" v-show="item?.signature">{{ item?.signature }}</div>
            </div>
        </div>
        <div class="pagination">
            <el-pagination small background layout="prev, pager, next" :total="total" :page-size="limit"
                v-model:current-page="offset" :hide-on-single-page="true" class="mt-4" />
        </div>
    </div>
</template>

<script setup lang="ts">
import playListApi from '@/api/request/playListApi';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

// 总的数据数目
let total = ref(0);
// 分页
let offset = ref(1)
// 返回数量
let limit = ref(60)

let subscribers = ref()

const getPlaylistSubscribers = () => {
    subscribers.value = []
    playListApi.getPlaylistSubscribers({
        id: route.params.id as string,
        limit: limit.value,
        offset: (offset.value - 1) * limit.value
    }).then(res => {
        console.log(res);

        total.value = (res as any).total;
        subscribers.value = (res as any).subscribers;
    })
}
getPlaylistSubscribers();

watch(() => offset.value, () => {
    getPlaylistSubscribers();
})

</script>

<style lang="scss" scoped>
@use "@/style/setting.module.scss" as *;

#subscribers {
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;

    .nosubscribers {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: $littleTitleFontSize;
    }

    .subscriber {
        display: flex;
        align-items: center;
        width: 413px;
        margin: 10px 0;
        gap: 10px;
        overflow: hidden;

        img {
            width: 110px;
            height: 110px;
            display: inline-flex;
            align-items: center;
            text-align: center;
            object-fit: contain;
            border-radius: 50%;

            &:hover {
                cursor: pointer;
            }
        }

        .userAndIntro {
            width: 325px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;

            .user {
                display: flex;
                align-items: center;
                gap: 7px;

                .name {
                    max-width: 230px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;

                    &:hover {
                        cursor: pointer;
                    }
                }

                .gender {
                    font-size: 12px;
                }
            }

            .intro {
                width: 80%;
                font-size: 12px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }

    .pagination {
        margin: 20px auto 0;
        display: flex;
        justify-content: center;
        color: $primaryColor;

        :deep(.number) {
            background-color: $contentBackGrondColor;
            border: 1px solid $gapColor;
        }

        :deep(.more) {
            background-color: $contentBackGrondColor;
            border: 1px solid $gapColor;
        }

        :deep(.el-pager) {
            --el-pagination-hover-color: $primaryColor;
        }

        :deep(button) {
            --el-pagination-hover-color: $primaryColor;
            background-color: $contentBackGrondColor;
            border: 1px solid $gapColor;
        }

        :deep(.is-active) {
            background-color: $primaryColor;
        }
    }
}
</style>