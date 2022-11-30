<template >
    <el-dialog v-model="dialogVisible" style="width: 350px;" align-center center draggable :modal="false"
        :close-on-click-modal="false" :close-on-press-escape="false" :destroy-on-close="true" @close="closeLogin">

        <div class="root">
            <div class="scanToLogin" v-if="loginStatus === 1">
                <div class="title">扫码登录</div>

                <div id="QRitem">
                    <div class="qr" v-if="!confirmInPhone">
                        <img class="qrImg" :src="QRImg" width="210">
                    </div>
                    <div class="outTime" v-if="showOutTimeTip">
                        <div class="outTimeTitle">二维码已失效</div>
                        <div class="outTimeButton" @click="outTimeTip">点击刷新</div>
                    </div>
                    <div class="introduce" v-if="!confirmInPhone">使用<a href="javascript:void(0)"
                            class="link">网易云软件APP</a>扫码登录
                    </div>
                    <div class="other" @click="switchOtherLoginStyle" v-if="!confirmInPhone">
                        选择其它登录方式&nbsp;>
                    </div>
                </div>

                <div class="confirmInPhone" v-if="confirmInPhone">
                    <div class="phone iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shouji1"></use>
                        </svg>
                    </div>
                    <div class="right iconItem">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gou"></use>
                        </svg>
                    </div>
                    <div class="confirmDesc">扫描成功</div>
                    <div class="confirmTip">请在手机上确认登录</div>
                </div>

            </div>

            <div class="otherToLogin" v-if="loginStatus === 2">
                <div class="scan">
                    <div class="scanImg" @click="switchQRLogin">
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
                        <select class="select" value="1" name="select">
                            <option v-for="(item, index) in code" :value="(index + 1)">{{ (item.zh) }}&nbsp; {{ "+" +
                                    item?.code
                            }}
                            </option>
                        </select>
                        <!-- <el-select v-model="code" class="m-2" placeholder="+86" size="small" >
                            <el-option v-for="item in cities" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select> -->
                        <input type="text" class="inputPhone" v-model="phoneInput" placeholder="请输入手机号"
                            @input="phoneInputValid">
                    </div>
                    <hr>
                    <div class="passwordIcon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-24gl-lock2"></use>
                        </svg>
                    </div>
                    <input type="password" class="password" v-model="passwordInput" placeholder="请输入密码"
                        @input="passwordInputValid">
                </div>



                <!-- <el-checkbox v-model="autoLogin" label="自动登录" size="small" /> -->
                <div class="showWarningAndTool">
                    <div class="warning" v-if="showWarning">{{ warningTitle }}</div>
                    <div class="tool">
                        <div class="autoLogin">
                            <input type="checkbox" id="autoLogin" checked ref="autoLoginRef">
                            <div>自动登录</div>
                        </div>
                        <div class="forgetPassword">忘记密码</div>
                        <div class="gap">|</div>
                        <div class="captchaToLogin">验证码登录</div>
                    </div>

                </div>

                <div class="loginAndRegister">
                    <el-button id="login" color="#ff3a3a" :auto-insert-space="true" @click="phoneTologin">登录</el-button>
                    <div id="register">注册</div>

                    <div class="quickToLogin">
                        <div class="weChat">
                            <img src="@/assets/icon/wechat.png" width="30">
                        </div>
                        <div class="qq">
                            <img src="@/assets/icon/qq.png" width="30">
                        </div>
                        <div class="weibo">
                            <img src="@/assets/icon/weibo.png" width="30">
                        </div>
                        <div class="wyEmail">
                            <img src="@/assets/icon/wyemail.png" width="30">
                        </div>
                    </div>
                    <div class="agree">
                        <input type="checkbox" ref="agreeDocsRef">
                        <span>同意</span>
                        <span class="docs">《服务条款》</span>
                        <span class="docs">《隐私政策》</span>
                        <span class="docs">《儿童隐私政策》</span>
                    </div>
                    <div class="notAgreeDocsTip" v-if="notAgreeDocsTip">
                        <div class="tip">
                            请先勾选同意《服务条款》、《隐私政策》、《儿童隐私政策》
                        </div>
                    </div>
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

// 登录框的显示与隐藏
let dialogVisible = ref(false)
const setLoginDialogVisible = () => {
    dialogVisible.value = true;
    getQR();
}
emitter.on("setLoginDialogVisible", setLoginDialogVisible)

const loginStore = useLoginStore();
// 显示二维码已经过期
let showOutTimeTip = ref(false)
// 扫码成功，在手机上确认
let confirmInPhone = ref(false)

// 二维码登录
// 计时器
let timer: number;
// 二维码 key
let key: number;

// 国家编码
let code: Ref<Array<{
    code?: string,
    [args: string]: string | undefined
}>> = ref([]);
let cities = ref();

// 判断有没有勾选自动登录
const autoLoginRef = ref()

// 警告提示
let showWarning = ref(false);
let warningTitle = ref("")

let phoneInput: Ref<string | undefined> = ref();
let passwordInput: Ref<string | undefined> = ref();
let autoLogin: Ref<boolean | undefined> = ref();

// 同意条款
const agreeDocsRef = ref();
// 没有同意条款时显示提示
const notAgreeDocsTip = ref(false);

// 目前的状态（登录、注册）
// 1 表示二维码登录
// 2 表示手机号码登录
let loginStatus = ref(1)

// 二维码图片的base64地址
let QRImg = ref("");

// 获取二维码
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
                    // 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
                    switch (statusRes.code) {
                        case 800:
                            clearInterval(timer)
                            confirmInPhone.value = false;
                            showOutTimeTip.value = true;
                            break;
                        case 802:
                            // clearInterval(timer)
                            confirmInPhone.value = true;
                            break;
                        case 803:
                            // 这一步会返回cookie
                            clearInterval(timer)
                            loginStore.setToken(statusRes.cookie)
                            dialogVisible.value = false
                            break;
                        default:
                            break;
                    }
                })
            }, 3000);
        })
    })
}

// 超时
const outTimeTip = () => {
    showOutTimeTip.value = false;
    getQR();
}

// 选择其它方式登录
const switchOtherLoginStyle = () => {
    clearInterval(timer);
    loginStatus.value = 2;
}

// 选择二维码登录
const switchQRLogin = () => {
    loginStatus.value = 1;
    getQR();
}

// 手机号注册登录
// 获取国家编码列表
const getCountriesList = () => {
    loginApi.getCountriesList().then(res => {
        let result: Array<{
            code?: string,
            [args: string]: string | undefined
        }> = []
        for (let i = 0; i < res.data.length; i++) {
            const item = res.data[i];
            // code.value.concat(item.countryList)
            // console.log(item.countryList);
            result = result.concat(item.countryList)
        }
        code.value = result;
        // console.log(code.value);
    })
}
getCountriesList()

// 验证手机号和密码的格式
const showWarningAndTitle = (value: string) => {
    showWarning.value = true;
    warningTitle.value = value;
}

// 手机号码验证
const phoneInputValid = (): boolean => {
    if (phoneInput.value && phoneInput.value.match(/^[\d]{11}$/g)) {
        showWarning.value = false;
        return true;
    }
    else {
        showWarningAndTitle("请输入11位数字的手机号")
        return false;
    }
}

// 密码输入的验证
const passwordInputValid = (): boolean => {
    if (passwordInput.value) {
        showWarning.value = false;
        return true;
    }
    else {
        showWarningAndTitle("请输入登录密码")
        return false;
    }
}

// 显示没有同意条款的提示，一秒后关闭
const showNotAgreeDocsTip = () => {
    notAgreeDocsTip.value = true;
    setTimeout(() => {
        notAgreeDocsTip.value = false;
    }, 1500)
}

const phoneTologin = () => {
    // 判断有没有同意条款
    if (!agreeDocsRef.value.checked) {
        showNotAgreeDocsTip();
        return;
    };
    // 判断手机号和密码的格式
    if (phoneInputValid() && passwordInputValid()) {
        // 判断手机号是否被注册过
        loginApi.checkCellphoneExistence({ phone: (phoneInput.value as string) }).then(res => {
            // 手机号没有注册
            let exist = (res as any)?.exist
            if (exist === -1) {
                showWarningAndTitle("请手机号尚未注册")
                return
            }
            else if (exist === 1) {
                loginApi.loginByCellphone({
                    phone: phoneInput.value as string,
                    password: passwordInput.value as string
                }).then(res => {
                    if ((res as any)?.code != 200) {
                        showWarningAndTitle((res as any).msg)
                        return
                    }
                    // 登录成功,会返回 cookie 和 token
                    loginStore.setToken((res as any).cookie, autoLoginRef.value.checked)
                    dialogVisible.value = false
                    return
                }, err => {
                    // 密码错误超过限制
                    showWarningAndTitle((err as any).response.data.msg);
                    // (res as any).response.data.msg
                    console.log(err);
                })
            }
        })
    }
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