<template >
    <div id="comment">
        <textarea class="textarea customeScroll" name="saysths" rows="3" wrap="soft"></textarea>
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
            <div class="sendComment">评论</div>
        </div>
        <div class="content">
            <div class="noComment" v-if="(!comments?.length && !hotComments?.length)">
                还没有评论，快来抢沙发~
            </div>

            <div class="hotComment" v-if="(hotComments?.length)">
                <div class="title">精彩评论</div>
                <div class="contentItem borderBottom" v-for="(item, index) in hotComments" :key="index">
                    <CommentVue :comment-item="item" :like-comment-button="likeCommentButton"></CommentVue>
                </div>
            </div>

            <div class="moreHotComment" v-if="(hotComments?.length && moreHot)">
                更多精彩评论 >
            </div>

            <div class="latestComment" v-if="comments?.length">
                <div class="title">最新评论({{ total }})</div>
                <div class="contentItem" v-for="(item, index) in comments" :key="index"
                    :class="{ borderBottom: index != comments?.length - 1 }">
                    <CommentVue :comment-item="item" :like-comment-button="likeCommentButton"></CommentVue>
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
    }
});

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

// 点赞评论
const likeCommentButton = (cid: string, t: 0 | 1) => {
    commentApi.likeComment({
        id: route.params.id as string,
        cid,
        t,
        type: props.type
    }).then(res => {
        getComment();
    })
}

// 获取评论
const getComment = () => {
    switch (props.type) {
        case commentType.playlist:
            getPlayListComment(limit.value, (offset.value - 1) * limit.value);
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
        console.log(res);
    })
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
@use "@/style/views/content/musicItem/songlist/children/comment.scss";
</style>