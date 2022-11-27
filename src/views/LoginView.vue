<template >
    <el-dialog v-model="dialogVisible" width="26%" align-center center draggable :modal="false"
        :close-on-click-modal="false" :close-on-press-escape="false" :destroy-on-close="true" @close="closeLogin">

        <div class="root">
            <div class="scanToLogin" v-if="loginStatus === 1">
                <div class="title" @click="getQR">扫码登录</div>
                <div class="qr">
                    <img class="qrImg" :src="QRImg" width="170">
                </div>
                <div class="introduce">使用<a href="javascript:void(0)" class="link">网易云软件APP</a>扫码登录
                </div>
                <!-- <div class="other" @click="loginStatus = 2"> -->
                <div class="other">
                    选择其它登录方式&nbsp;>
                </div>
            </div>

            <div class="otherToLogin" v-if="loginStatus === 2">
                <div class="scan">
                    <div class="scanImg" @click="loginStatus = 1">
                        <div class="outer">
                            <div class="inner"></div>
                        </div>
                    </div>
                    <span class="tip">扫码登录更安全</span>
                </div>
                <div class="logo">
                    <img src="@/assets/icon/wangyiyunyinle.svg" class="logo" width="50">
                </div>

                <div class="inputInfo">
                    <div class="code">
                        <div class="phoneIcon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shouji"></use>
                            </svg>
                        </div>
                        <select class="select" value="1">
                            <option value="1">+86</option>
                            <option value="2">+87</option>
                            <option value="3">+88</option>
                        </select>
                        <!-- <el-select v-model="code" placeholder="+86" class="select">
                        <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
                            <span style="float: left">{{ item.label }}</span>
                        </el-option>
                    </el-select> -->
                        <input type="text" class="inputPhone" v-model="phoneInput" placeholder="请输入手机号">
                    </div>

                    <input type="password" class="password" v-model="passwordInput" placeholder="请输入密码">
                </div>


                <el-checkbox v-model="autoLogin" label="自动登录" size="small" />
                <div class="tool">
                    <div class="forgetPassword">忘记密码</div>
                    <div class="gap">|</div>
                    <div class="captchaToLogin">验证码登录</div>
                </div>
                <el-button type="primary">登录</el-button>
                <div class="register">注册</div>

                <div class="quickToLogin">
                    <div class="weChat"></div>
                    <div class="qq"></div>
                    <div class="weibo"></div>
                    <div class="wyEmail"></div>
                </div>
                <div class="agree">
                    <input type="checkbox" id="">同意
                    <span class="docs">《服务条款》</span>
                    <span class="docs">《隐私政策》</span>
                    <span class="docs">《儿童隐私政策》</span>
                </div>
            </div>
        </div>

    </el-dialog>
</template>

<script setup lang="ts">
import { ref, type Ref, onBeforeUnmount, onBeforeMount } from 'vue';
import loginApi from "@/api/request/loginApi";
import { useLoginStore } from '@/stores/login';
import emitter from '@/utils/eventBus';

const loginStore = useLoginStore();

let dialogVisible = ref(false)
const setLoginDialogVisible = () => {
    dialogVisible.value = true;
    getQR();
}
emitter.on("setLoginDialogVisible", setLoginDialogVisible)

// 二维码登录
// 计时器
let timer: number;
// 二维码 key
let key: number;

let code = ref();
let cities = ref();
let phoneInput: Ref<number | undefined> = ref();
let passwordInput: Ref<number | undefined> = ref();
let autoLogin: Ref<boolean | undefined> = ref();

// 目前的状态（登录、注册）
// 1 表示二维码登录
// 2 表示手机号码登录
let loginStatus = ref(1)

// 二维码图片的base64地址
let QRImg = ref("");

const getQR = () => {
    if (!dialogVisible.value) {
        return
    }
    loginApi.getQRKey().then(res => {
        key = res.data.unikey
        if (!key) {
            return
        }
        loginApi.getQRCreate({ key, qrimg: true }).then(res => {
            // 获取二维码的base64
            QRImg.value = res.data.qrimg;
            timer = setInterval(() => {
                console.log(456);

                loginApi.getQRCheck({ key }).then(res => {
                    const statusRes = res as any;
                    if (statusRes.code === 800) {
                        clearInterval(timer)
                        console.log('二维码已过期,请重新获取');
                        dialogVisible.value = false
                    }
                    if (statusRes.code === 803) {
                        // 这一步会返回cookie
                        clearInterval(timer)
                        loginStore.setToken(statusRes.cookie)
                        dialogVisible.value = false
                    }
                })
            }, 3000);
        })
    })
}

const closeLogin = () => {
    if (timer) {
        clearInterval(timer)
    }
}

onBeforeUnmount(() => {
    closeLogin();
})
</script>

<style lang="scss" scoped>
@import "@/style/views/login.scss"
</style>8