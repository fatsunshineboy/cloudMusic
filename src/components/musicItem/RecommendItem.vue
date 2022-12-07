<template>
    <div id="recommendItem" :style="{ '--itmeLineCount': props.itmeLineCount }">
        <div class="item" v-for="(item, index) in props.playList"
            :class="{ clearMarginRight: (index + 1) % props.itmeLineCount === 0 }"
            @click="router.push(`/songlist/${(item as any)?.id}`)">
            <div class="img">
                <img :src="`${(item as any)?.picUrl}?param=300y300`">
                <div class="playCount">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bofang"></use>
                        </svg>
                    </div>
                    <div class="count">{{ (item as any)?.playcount }}</div>
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

<script lang="ts" setup>
import { useRouter } from "vue-router";

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
    }
})

</script>

<style lang="scss" scoped>
#recommendItem {
    $itmeLineCount: var(--itmeLineCount);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .item {
        $marginWidth: 15px;
        flex: 1;
        margin: 0 $marginWidth 20px 0; // 间隙为5px
        $itemWidth: calc((100% - ($itmeLineCount - 1)* $marginWidth) / $itmeLineCount); // 10px = (分布个数-1)*间隙5px
        width: $itemWidth;
        min-width: $itemWidth;
        max-width: $itemWidth;
        height: $itemWidth;

        .img {
            width: 100%;
            height: 100%;
            margin-bottom: 3px;
            overflow: hidden;
            position: relative;

            &:hover {
                cursor: pointer;

                .playIcon {
                    opacity: 1;
                }
            }

            img {
                width: 100%;
                height: 100%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                object-fit: contain;
                border-radius: 10px;
                overflow: hidden;
                // background-color: red;
            }

            .playCount {
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                right: 6px;
                color: white;
                font-size: 12px;

                .iconItem {
                    font-size: 16px;
                }
            }

            .playIcon {
                position: absolute;
                right: 10px;
                bottom: 10px;
                width: 30px;
                height: 30px;
                background-color: white;
                border-radius: 50%;
                line-height: 30px;
                text-align: center;
                opacity: 0;
                transition: opacity 1s ease;
            }
        }

        .title {
            &:hover {
                cursor: pointer;
            }
        }
    }

    .clearMarginRight {
        // 去除第n行数个的margin-right
        margin-right: 0;
    }
}
</style>