<template>
    <div class="notShowDiv" style="height: 60px;"></div>
    <div class="header">
        <div class="musictitle" @click="goHome">
            <div class="iconItem">
                <img src="@/assets/icon/wangyiyunyinle.svg" class="svg" width="15">
            </div>
            <div class="title">网易云音乐</div>
        </div>
        <div class="shift">
            <div class="left">
                <div class="leftItem"></div>
            </div>
            <div class="right">
                <div class="rightItem isNotSelected"></div>
            </div>
        </div>
        <div class="search">
            <div class="searchIcon" @click="startSearch">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
            </div>
            <input class="searchBox" type="text" v-model="searchValue" :placeholder="defaultKeywords"
                @input="inputSearchValue" @focus="focusSearch" @blur="hideSearch" @keydown.enter="startSearch">
            <HotSearchDetail v-if="showHotSearchDetail" class="hotSearchDetail" :keywords="searchValue">
            </HotSearchDetail>
        </div>
        <div class="identify">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-maikefeng"></use>
                </svg>
            </div>
        </div>
        <div class="right">
            <div class="user">

                <!-- 登录 -->
                <div class="isLogin" v-if="loginStore.loginStatus">
                    <div id="userImg">
                        <img :src="userProfile?.avatarUrl">
                    </div>
                    <div class="name" @click="showUserSetting">{{
                            userProfile?.nickname
                    }}
                    </div>
                    <div class="vip" @click="showUserSetting">
                        <div class="iconItem" :class="{ isVIP: loginStore.loginStatus && userProfile?.vipType === 1 }">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-VIP"></use>
                            </svg>
                        </div>
                        <div class="triangleIcon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-sanjiao1"></use>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- 非登录 -->
                <div class="isNotLogin" v-if="!loginStore.loginStatus" @click="startLogin">
                    <div class="img">
                        <div class="iconItem notLogin">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-a-morentouxiang2x"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="name">未登录</div>
                    <div class="vip">
                        <div class="iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-VIP"></use>
                            </svg>
                        </div>
                    </div>

                </div>


                <UserSetting id="userSetting" v-if="isShowUserSetting"></UserSetting>

                <div class="color">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-clothes"></use>
                        </svg>
                    </div>
                </div>
                <div class="setting">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shezhi"></use>
                        </svg>
                    </div>
                </div>
                <div class="email">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-email"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="gap">
                <div class="iconItem">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-vertical_line"></use>
                    </svg>
                </div>
            </div>
            <div class="sys">
                <div class="mini">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-neibusuoxiao2"></use>
                        </svg>
                    </div>
                </div>
                <div class="small">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-zuixiaohua"></use>
                        </svg>
                    </div>
                </div>
                <div class="large">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-zuidahua"></use>
                        </svg>
                    </div>
                </div>
                <div class="close">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-guanbi"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, provide } from 'vue';
import { useRouter } from 'vue-router';
import emitter from '@/utils/eventBus';
import searchApi from '@/api/request/searchApi';
import userApi from '@/api/request/userApi';
import HotSearchDetail from "@/components/HotSearchDetail.vue";
import UserSetting from "@/components/UserSetting.vue";
import { useLoginStore } from '@/stores/login';

const router = useRouter();
const loginStore = useLoginStore();
let searchValue = ref("")
let showHotSearchDetail = ref(false)
let defaultKeywords = ref("搜索")
// 默认搜索关键词
let defaultRealkeyword = ref("")

// 获取默认搜索关键词
const getDefaultKetwords = () => {
    searchApi.searchDefaultKeywords().then(res => {
        defaultKeywords.value = res.data.showKeyword;
        defaultRealkeyword.value = res.data.realkeyword;
    })
}

getDefaultKetwords();

// 监听输入事件
const inputSearchValue = () => {
    // 给出搜索建议
    // searchApi.searchSuggest({ keywords: searchValue.value }).then(res => {
    //     console.log(res);
    // })
    // searchApi.search({ keywords: searchValue.value }).then(res => {
    //     console.log(res);
    // })
}

// watch(searchValue, (newVal) => {
//     console.log(newVal);
// })

// 搜索
const startSearch = () => {
    // 如果没有输入搜素关键词，就用默认关键词
    searchValue.value = searchValue.value ? searchValue.value : defaultRealkeyword.value;
    window.removeEventListener("click", listener);
    showHotSearchDetail.value = false;
    router.push({
        path: "/search/single",
        query: {
            keywords: searchValue.value
        }
    })
}

// changeValue 位一个对象，value 表示的是要改变的值，searchAtOnce 表示是否要跳转
// 暴露出去,防止用户刷新浏览器丢失输入框的值
const changeHeaderSearchValue = (changeValue: any) => {
    // console.log(changeValue);
    searchValue.value = changeValue.value;
    if (changeValue.searchAtOnce) {
        startSearch();
    }
}
emitter.on("changeHeaderSearchValue", changeHeaderSearchValue);

// 聚焦输入框时显示热搜榜
const focusSearch = () => {
    showHotSearchDetail.value = true;
}
// 有待优化
// 隐藏热搜榜
let listener = (e: any) => {
    e.preventDefault();
    let composedPath = e.composedPath();
    for (let i = 0; i < composedPath.length; i++) {
        let className = composedPath[i].className
        if (typeof className === "string" && className?.indexOf("searchDetailAndMatch") != -1) {
            return
        }
    }
    showHotSearchDetail.value = false;
    window.removeEventListener("click", listener);
}

const hideSearch = () => {
    window.addEventListener("click", listener)
}

// 跳转首页
const goHome = () => {
    router.push("/")
};

let userProfile = ref()
// 获取用户信息
watch(() => loginStore.loginStatus, () => {
    if (!loginStore.loginStatus) {
        return
    }
    userApi.getUserDetail({ uid: loginStore.uid }).then(res => {
        // console.log(res);
        userProfile.value = (res as any).profile
    })
})

let isShowUserSetting = ref(false)
// 显示个人信息
const showUserSetting = () => {
    isShowUserSetting.value = true;
}
// 隐藏个人信息
// const hideUserSetting = () => {
//     isShowUserSetting.value = false;
// }

const startLogin = () => {
    emitter.emit("setLoginDialogVisible")
}

</script>

<style scoped lang="scss">
@import "@/style/views/header.scss";
</style>