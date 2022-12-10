<template>
    <div class="contentItem" @contextmenu.prevent="contentmenuButton">
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
                        <div class="support" :class="{ supportOverOne: commentItem?.likedCount > 0 }">
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
                    <div class="reply" @click="props.replyComment(commentItem)">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-pinglun"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="commentDelete" :style="`--deleteX:${deleteX}px;--deleteY:${deleteY}px;`" v-show="showDeleteButton">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-lajitong"></use>
            </svg>
        </div>
        <div class="text" @click="isShowCommentDialog = true; showDeleteButton = false">删除(Delete)</div>
    </div>
    <div id="commentDialog" v-if="isShowCommentDialog">
        <div class="iconItem" @click="isShowCommentDialog = false">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-guanbi"></use>
            </svg>
        </div>
        <div class="text">确定删除该评论？</div>
        <div class="confirmButton" @click="props.deleteComment(props.commentItem); isShowCommentDialog = false">确定</div>
    </div>
</template>

<script lang="ts" setup>
import { useLoginStore } from '@/stores/login';
import { onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const loginStore = useLoginStore();

const props = defineProps({
    commentItem: {
        type: Object,
        required: true
    },
    likeCommentButton: {
        type: Function,
        required: true
    },
    replyComment: {
        type: Function,
        required: true
    },
    deleteComment: {
        type: Function,
        required: true
    }
})

// 删除评论确认框
let isShowCommentDialog = ref(false)

let deleteX = ref(-200)
let deleteY = ref(-200)
let showDeleteButton = ref(false)
const contentmenuButton = (e: MouseEvent) => {
    if (props.commentItem.user.userId != loginStore.uid) {
        return
    }
    showDeleteButton.value = true
    deleteX.value = e.clientX;
    deleteY.value = e.clientY;
}
const contextmenuListener = (e: MouseEvent) => {
    e.preventDefault();
    showDeleteButton.value = false;
}
document.addEventListener("contextmenu", contextmenuListener, true)
const clickListener = (e: MouseEvent) => {
    e.preventDefault();
    showDeleteButton.value = false;
}
document.addEventListener("click", clickListener)
onBeforeUnmount(() => {
    document.removeEventListener("contextmenu", contextmenuListener, true)
    document.removeEventListener("click", clickListener)
})
</script>

<style lang="scss" scoped>
@use "@/style/component/musicItem/comment.scss";
</style>