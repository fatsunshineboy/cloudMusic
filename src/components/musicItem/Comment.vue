<template>
    <div class="contentItem">
        <img :src="`${(commentItem)?.user?.avatarUrl}?param=60y60`"
            @click="router.push(`/user/${commentItem?.user?.userId}`)">
        <div class="detail">
            <div class="nameAndText">
                <span class="name" @click="router.push(`/user/${commentItem?.user?.userId}`)">{{
                        commentItem?.user?.nickname
                }}</span>
                <span class="text">&nbsp;:&nbsp;{{ commentItem?.content }}</span>
            </div>
            <div id="reply" v-if="commentItem?.beReplied?.length">
                <div class="name" @click="router.push(`/user/${commentItem?.beReplied[0]?.user?.userId}`)">@{{
                        commentItem?.beReplied[0]?.user?.nickname
                }}</div>
                <div class="text">&nbsp;:&nbsp;{{ commentItem?.beReplied[0]?.content }}</div>
            </div>
            <div class="timeAndTool">
                <div class="time">{{ commentItem?.timeStr }}</div>
                <div class="commentTool">
                    <div class="supportAndCount"
                        @click="likeCommentButton(commentItem?.commentId, commentItem?.liked ? 0 : 1)">
                        <div class="support">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-dianzan"></use>
                            </svg>
                        </div>
                        <span class="supportCount">{{ commentItem?.likedCount }}</span>
                    </div>
                    <div class="gap">|</div>
                    <div class="share">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-fenxiang"></use>
                        </svg>
                    </div>
                    <div class="gap">|</div>
                    <div class="reply">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-pinglun"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    commentItem: {
        type: Object,
        required: true
    },
    likeCommentButton: {
        type: Function,
        required: true
    }
})

</script>

<style lang="scss" scoped>
@use "@/style/setting.module.scss" as *;

.contentItem {
    display: flex;
    padding: 15px 0;

    img {
        $contentImgHeight: 38px;
        width: $contentImgHeight;
        height: $contentImgHeight;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        object-fit: contain;
        // z-index: -1;
        border-radius: 50%;
        margin-right: 14px;
        margin-top: 3px;

        &:hover {
            cursor: pointer;
        }
    }

    .detail {
        width: 100%;
        display: flex;
        gap: 7px;
        flex-direction: column;
        justify-content: center;
        font-size: 13px;

        .nameAndText {
            .name {
                &:hover {
                    cursor: pointer;
                }
            }
        }

        #reply {
            width: 100%;
            display: flex;
            background-color: $littleTitleColor;
            padding: 8px;
            border-radius: 5px;
            box-sizing: border-box;

            .name {
                &:hover {
                    cursor: pointer;
                }
            }
        }

        .timeAndTool {
            display: flex;
            justify-content: space-between;

            .time {
                color: $littleTitleColor;
                font-size: $littleTitleFontSize;
            }

            .commentTool {
                display: flex;
                gap: 8px;
                color: $littleTitleColor;

                .supportAndCount,
                .share,
                .reply {
                    &:hover {
                        cursor: pointer;
                    }
                }

                .supportAndCount {
                    .support {
                        float: left;
                    }
                }
            }
        }
    }
}
</style>