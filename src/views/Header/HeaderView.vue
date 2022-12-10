<template>
    <div class="notShowDiv" style="height: 60px"></div>
    <div class="header">
        <div class="musictitle" @click="goHome">
            <div class="iconItem">
                <img src="@/assets/icon/wangyiyunyinle.svg" class="svg" width="15" />
            </div>
            <div class="title">网易云音乐</div>
        </div>
        <div class="shift">
            <div class="left" @click="router.go(-1)">
                <div class="leftItem"></div>
            </div>
            <div class="right" @click="router.go(1)">
                <div class="rightItem"></div>
                <!-- isNotSelected -->
            </div>
        </div>
        <div class="search">
            <div class="searchIcon" @click="startSearch">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
            </div>
            <input class="searchBox" type="text" v-model="searchValue" :placeholder="defaultKeywords"
                @click="showHotSearchOrMatch" @keydown.enter="startSearch" />
            <HotSearchDetail v-if="showHotSearchDetail" class="hotSearchDetail" :keywords="searchValue"
                @click="isClickHotSearchOrMatchSelf">
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
                        <img :src="userProfile?.profile.avatarUrl" />
                    </div>
                    <div class="name" @click="showUserSetting">
                        {{ userProfile?.profile.nickname }}
                    </div>
                    <div class="vip" @click="showUserSetting">
                        <div class="iconItem" :class="{
                            isVIP: loginStore.loginStatus && userProfile?.profile.vipType === 1,
                        }">
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

                <UserSetting id="userSetting" v-if="isShowUserSetting" @click="isClickUserSettingSelf"
                    :user-info="userProfile" @hideUserInfoWhenExit="hideUserInfoWhenExit"></UserSetting>

                <div class="color" @click="showColorPicker">
                    <div class="iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-clothes"></use>
                        </svg>
                    </div>
                </div>

                <ColorPickerVue class="colorPickerVue" @click="showColorPickerSelf" v-if="isShowColorPicker">
                </ColorPickerVue>

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
                <div class="close" @click="closeWebPage">
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
import { ref, watch, provide, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import emitter from "@/utils/eventBus";
import searchApi from "@/api/request/searchApi";
import userApi from "@/api/request/userApi";
import HotSearchDetail from "@/components/HotSearchDetail.vue";
import UserSetting from "@/components/UserSetting.vue";
import { useLoginStore } from "@/stores/login";
import { useSearchHistoryStore } from "@/stores/searchHistory";
import ColorPickerVue from "@/components/utils/ColorPicker.vue";

// 搜索历史记录
const searchHistoryStore = useSearchHistoryStore();
// 路由
const router = useRouter();
// 登录状态管理
const loginStore = useLoginStore();
let searchValue = ref("");
let showHotSearchDetail = ref(false);
let isShowUserSetting = ref(false);
let defaultKeywords = ref("搜索");
// 默认搜索关键词
let defaultRealkeyword = ref("");

// 判断是否点击了热搜弹出框
let popShowHotSearchDetailFlag = ref(true);
// 判断是否点击了个人信息
let popShowUserSettingFlag = ref(true);

// 获取默认搜索关键词
const getDefaultKetwords = () => {
    searchApi.searchDefaultKeywords().then((res) => {
        defaultKeywords.value = res.data.showKeyword;
        defaultRealkeyword.value = res.data.realkeyword;
    });
};
// 一加载就显示默认关键词
getDefaultKetwords();

// 开始搜索
const startSearch = () => {
    // 如果没有输入搜素关键词，就用默认关键词
    searchValue.value = searchValue.value
        ? searchValue.value
        : defaultRealkeyword.value;
    // 存储到搜索历史记录
    searchHistoryStore.addHistory(searchValue.value);
    // 关闭热搜榜
    showHotSearchDetail.value = false;
    router.push({
        path: "/search/single",
        query: {
            keywords: searchValue.value,
        },
    });
};

// changeValue 位一个对象，value 表示的是要改变的值，searchAtOnce 表示是否要跳转
// 暴露出去,防止用户刷新浏览器丢失输入框的值
const changeHeaderSearchValue = (changeValue: any) => {
    // console.log(changeValue);
    searchValue.value = changeValue.value;
    if (changeValue.searchAtOnce) {
        startSearch();
    }
};
emitter.on("changeHeaderSearchValue", changeHeaderSearchValue);

// 处理弹出框
// 点击输入框时显示热搜榜
const showHotSearchOrMatch = () => {
    showHotSearchDetail.value = true;
    popShowHotSearchDetailFlag.value = false;
};

const isClickHotSearchOrMatchSelf = () => {
    popShowHotSearchDetailFlag.value = false;
}

// 显示个人信息
const showUserSetting = () => {
    isShowUserSetting.value = true;
    popShowUserSettingFlag.value = false;
};

const isClickUserSettingSelf = () => {
    popShowUserSettingFlag.value = false;
}

// 显示颜色选择器
let isShowColorPicker = ref(false)
let popShowColorPickerFlag = ref(true)
const showColorPicker = () => {
    isShowColorPicker.value = true;
    popShowColorPickerFlag.value = false;
}
const showColorPickerSelf = () => {
    popShowColorPickerFlag.value = false;
}

// 捕获阶段
let captureListener = () => {
    popShowHotSearchDetailFlag.value = true;
    popShowUserSettingFlag.value = true;
    popShowColorPickerFlag.value = true;
}
document.body.addEventListener('click', captureListener, true)

// 冒泡阶段
let propagationListener = () => {
    if (popShowHotSearchDetailFlag.value) {
        showHotSearchDetail.value = false
    }
    if (popShowUserSettingFlag.value) {
        isShowUserSetting.value = false;
    }
    if (popShowColorPickerFlag.value) {
        isShowColorPicker.value = false;
    }
}
document.body.addEventListener('click', propagationListener)

// 用户点击退出后，隐藏个人信息表
const hideUserInfoWhenExit = () => {
    popShowUserSettingFlag.value = true;
    isShowUserSetting.value = false;
}

// 跳转首页
const goHome = () => {
    router.push("/");
};

let userProfile = ref();
// 获取用户信息
watch(
    () => loginStore.loginStatus,
    () => {
        if (!loginStore.loginStatus) {
            userProfile.value = {};
            return;
        }
        userApi.getUserDetail({ uid: loginStore.uid }).then((res) => {
            userProfile.value = res;
            userProfile.value.profile.avatarUrl += "?param=100y100";
        });
    }
);

// 显示登录框
const startLogin = () => {
    emitter.emit("setLoginDialogVisible");
};

const closeWebPage = () => {
    if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1) {
        window.location.href = "about:blank";
        window.close();
    } else {
        window.opener = null;
        window.open("", "_self");
        window.close();
    }
}

onBeforeUnmount(() => {
    document.body.removeEventListener('click', captureListener, true)
    document.body.removeEventListener('click', propagationListener)
})
</script>

<style scoped lang="scss">
@use "@/style/views/header.scss";
</style>
