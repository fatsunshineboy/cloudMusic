<template>
    <div class="userSetting">
        <!-- <div class="userInfo">
            <div class="post">
                <div class="num">0</div>
                <div class="title">动态</div>
            </div>
            <div class="follow">
                <div class="num">1</div>
                <div class="title">关注</div>
            </div>
            <div class="fans">
                <div class="num">0</div>
                <div class="title">粉丝</div>
            </div>
        </div>
        <div class="signIn">
            <div class="iconItem"></div>
            <div class="title">签到</div>
        </div>
        <hr>
        <div class="myVip">
            <div class="iconItem"></div>
            <div class="title">我的会员</div>
            <div class="dueTime">2022.12.05到期</div>
            <div class="triangle"></div>
        </div>
        <div class="level">
            <div class="iconItem"></div>
            <div class="title">等级</div>
            <div class="dueTime">LV.5</div>
            <div class="triangle"></div>
        </div>
        <div class="shop">
            <div class="iconItem"></div>
            <div class="title">商城</div>
            <div class="triangle"></div>
        </div>
        <hr>
        <div class="userInfoSetting">
            <div class="iconItem"></div>
            <div class="title">个人信息设置</div>
            <div class="triangle"></div>
        </div>
        <div class="bind">
            <div class="iconItem"></div>
            <div class="title">绑定社交账号</div>
            <div class="iconItem"></div>
            <div class="triangle"></div>
        </div>
        <hr>
        <div class="myCustomer">
            <div class="iconItem"></div>
            <div class="title">我的客服</div>
            <div class="triangle"></div>
        </div> -->
        <div class="exit" @click="exit">
            <div class="iconItem"></div>
            <div class="title">退出登录</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLoginStore } from "@/stores/login";

const loginStore = useLoginStore();

const exit = () => {
    loginStore.exit();
}
</script>

<style lang="scss" scoped>
@use "@/style/component/userSetting.scss";
</style>