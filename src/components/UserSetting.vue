<template>
    <div class="userSetting">
        <div class="userInfo">
            <div class="post userInfoItem">
                <div class="num">{{ props.userInfo?.profile?.eventCount }}</div>
                <div class="title">动态</div>
            </div>
            <div class="follow userInfoItem">
                <div class="num">{{ props.userInfo?.profile?.follows }}</div>
                <div class="title">关注</div>
            </div>
            <div class="fans userInfoItem">
                <div class="num">{{ props.userInfo?.profile?.followeds }}</div>
                <div class="title">粉丝</div>
            </div>
        </div>
        <div class="signIn">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-qiandao_o"></use>
                </svg>
            </div>
            <div class="title">签到</div>
        </div>
        <hr>
        <div class="myVip settingItem">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-huiyuan"></use>
                </svg>
            </div>
            <div class="title">我的会员</div>
            <div class="dueTime">2022.12.05到期</div>
            <div class="triangle"></div>
        </div>
        <div class="level settingItem">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-dengji"></use>
                </svg>
            </div>
            <div class="title">等级</div>
            <div class="levelNum">LV.{{ props.userInfo?.level }}</div>
            <div class="triangle"></div>
        </div>
        <div class="shop settingItem">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye"></use>
                </svg>
            </div>
            <div class="title">商城</div>
            <div class="triangle"></div>
        </div>
        <hr>
        <div class="userInfoSetting settingItem">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gerenxinxi1"></use>
                </svg>
            </div>
            <div class="title">个人信息设置</div>
            <div class="triangle"></div>
        </div>
        <div class="bind settingItem">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bangding-"></use>
                </svg>
            </div>
            <div class="title">绑定社交账号</div>
            <div class="bindIconItem"></div>
            <div class="triangle"></div>
        </div>
        <hr>
        <div class="myCustomer settingItem">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-kefu"></use>
                </svg>
            </div>
            <div class="title">我的客服</div>
            <div class="triangle"></div>
        </div>
        <hr>
        <div class="exit settingItem" @click="exit">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shinshoptuichudenglu"></use>
                </svg>
            </div>
            <div class="title">退出登录</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import loginApi from "@/api/request/loginApi";
import { useLoginStore } from "@/stores/login";
import emitter from "@/utils/eventBus";

const props = defineProps({
    userInfo: {
        type: Object,
        required: true,
    }
})

const emit = defineEmits(["hideUserInfoWhenExit"]);

const loginStore = useLoginStore();

// 退出登录
const exit = () => {
    emit("hideUserInfoWhenExit");
    loginApi.logout().then(res => {
        loginStore.exit();
        // 显示登录框
        emitter.emit("setLoginDialogVisible");
        console.log(res);
    })

}
</script>

<style lang="scss" scoped>
@use "@/style/component/userSetting.scss";
</style>