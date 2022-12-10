<template >
    <div id="comment">
        <div id="textarea">
            <textarea v-model="commentContent" class="textarea customeScroll" name="saysths" rows="3" wrap="soft"
                @input="inputComment" ref="textareaRef"></textarea>
            <span class="commentTextCount" :class="{ outLimit: commentTextCount < 0 }">{{ commentTextCount }}</span>
        </div>
        <div class="tool">
            <div class="iconItem">
                <div class="topic ">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-hashjinghao"></use>
                    </svg>
                </div>
                <div class="at">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-aite1"></use>
                    </svg>
                </div>
                <div class="emoji">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiaolian1"></use>
                    </svg>
                </div>
            </div>
            <div class="noContentTip" :class="{ showNoContentTip: isShowTip }">
                <div class="iconItem">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-chahao"></use>
                    </svg>
                </div>
                <div class="text">{{ tipContent }}</div>
            </div>
            <div class="sendComment" @click="sendCommentButton()">评论</div>
        </div>
        <div class="content">
            <div class="noComment" v-if="(!comments?.length && !hotComments?.length)">
                还没有评论，快来抢沙发~
            </div>

            <div class="hotComment" v-if="(hotComments?.length)">
                <div class="title">精彩评论</div>
                <div class="contentItem borderBottom" v-for="(item, index) in hotComments" :key="index">
                    <CommentVue :comment-item="item" :like-comment-button="likeCommentButton"
                        :reply-comment="replyComment" :delete-comment="deleteComment"></CommentVue>
                </div>
            </div>

            <div class="moreHotComment" v-if="(hotComments?.length && moreHot)">
                更多精彩评论 >
            </div>

            <div class="latestComment" v-if="comments?.length">
                <div class="title">最新评论({{ total }})</div>
                <div class="contentItem" v-for="(item, index) in comments" :key="index"
                    :class="{ borderBottom: index != comments?.length - 1 }">
                    <CommentVue :comment-item="item" :like-comment-button="likeCommentButton"
                        :reply-comment="replyComment" :delete-comment="deleteComment"></CommentVue>
                </div>
            </div>

            <div class="pagination">
                <el-pagination small background layout="prev, pager, next" :total="total" :page-size="limit"
                    v-model:current-page="offset" :hide-on-single-page="true" class="mt-4" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import commentApi from '@/api/request/commentApi';
import { commentType } from '@/type/comment';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import CommentVue from '@/components/musicItem/Comment.vue';

const route = useRoute();
const props = defineProps({
    type: {
        type: Number,
        required: true
    },
    changeCommentCount: {
        type: Function,
        required: true
    }
});

// 输入文本框
const textareaRef = ref()
// 评论
let commentContent = ref("")
// 最新评论 
let comments = ref()
// 热评
let hotComments = ref()
// 更多的热评
let moreHot = ref()
// 总的数据数目
let total = ref(0);
// 分页
let offset = ref(1)
// 返回数量
let limit = ref(100)
// 评论错误的提示
let isShowTip = ref(false)
// 评论错误的提示文本
let tipContent = ref("")
// 默认文本字数
const defaultCount = 140
// 文本框的字数
let commentTextCount = ref(defaultCount)
// 判断是否正在回复评论
let isReplyComment = ref(false)
// 当前的回复对象
let nowToReplyName = ref("");
// 当前的回复id
let nowToReplyId = ref();

// 点赞评论
const likeCommentButton = (cid: string, t: 0 | 1) => {
    commentApi.likeComment({
        id: route.params.id as string,
        cid,
        t,
        type: props.type
    }).then(res => {
        setTimeout(() => {
            getComment();
        }, 500)
    })
}

// 点击了发送评论按钮
const sendCommentButton = () => {
    if (!commentContent.value) {
        showTipAndSetText("写点东西吧，内容不能为空哦！");
        return;
    }
    if (commentTextCount.value < 0) {
        showTipAndSetText("字数超过限制");
        return;
    }
    if (isReplyComment.value && nowToReplyId.value) {
        sendComment(2, nowToReplyId.value)
    }
    else {
        sendComment(1)
    }
}

// 发送评论
const sendComment = (t: 0 | 1 | 2, commentId?: string) => {
    commentApi.sendComment({
        id: (route.params.id as string),
        t,
        content: isReplyComment.value ? commentContent.value.slice(nowToReplyName.value.length) : commentContent.value,
        commentId: commentId || "",
        type: props.type
    }).then(res => {
        commentContent.value = "";
        nowToReplyId.value = undefined;
        isReplyComment.value = false;
        nowToReplyName.value = "";
        commentTextCount.value = defaultCount;
        setTimeout(() => {
            getComment();
        }, 500)
    })
}

// 获取评论
const getComment = () => {
    switch (props.type) {
        case commentType.playlist:
            getPlayListComment(limit.value, (offset.value - 1) * limit.value);
            break;
        case commentType.album:
            getAlbumComment(limit.value, (offset.value - 1) * limit.value);
            break;
        default:
            break;
    }
}

// 获取歌单评论
const getPlayListComment = (limit?: number, offset?: number, before?: number) => {
    commentApi.getPlaylistComment({
        id: (route.params.id as string),
        limit,
        offset
    }).then(res => {
        comments.value = (res as any)?.comments
        total.value = (res as any).total
        hotComments.value = (res as any)?.hotComments?.slice(0, 10)
        moreHot.value = (res as any)?.moreHot
        props.changeCommentCount((res as any).total)
        // console.log(res);
    })
}

// 获取专辑评论
const getAlbumComment = (limit?: number, offset?: number, before?: number) => {
    commentApi.getAlbumComment({
        id: (route.params.id as string),
        limit,
        offset
    }).then(res => {
        comments.value = (res as any)?.comments
        total.value = (res as any).total
        hotComments.value = (res as any)?.hotComments?.slice(0, 10)
        moreHot.value = (res as any)?.moreHot
        props.changeCommentCount((res as any).total)
        console.log(res);
    })
}

// 展示错误提示和文字
const showTipAndSetText = (text: string) => {
    isShowTip.value = true;
    tipContent.value = text;
    setTimeout(() => {
        isShowTip.value = false;
        // tipContent.value = "";
    }, 1000)
}

// 输入评论
const inputComment = () => {
    if (isReplyComment.value) {
        if (commentContent.value.slice(0, nowToReplyName.value.length) != nowToReplyName.value) {
            isReplyComment.value = false
            commentTextCount.value = defaultCount - commentContent.value.length;
        } else {
            commentTextCount.value = defaultCount - commentContent.value.length + nowToReplyName.value.length;
        }
    }
    else {
        commentTextCount.value = defaultCount - commentContent.value.length;
    }
}

// 点击了回复评论
const replyComment = (item: any) => {
    console.log(item);
    isReplyComment.value = true;
    commentContent.value = "回复" + item.user.nickname + "：";
    commentTextCount.value = defaultCount;
    nowToReplyName.value = commentContent.value;
    nowToReplyId.value = item.commentId
    textareaRef.value.focus();
}

// 点击了删除评论
const deleteComment = (item: any) => {
    sendComment(0, item.commentId)
}

watch(() => offset.value, () => {
    comments.value = []
    hotComments.value = []
    getComment()
}, {
    immediate: true
})

// 暴露方法给父组件
defineExpose({ getComment })
</script>

<style lang="scss" scoped>
@use "@/style/component/utils/comment.scss";
</style>