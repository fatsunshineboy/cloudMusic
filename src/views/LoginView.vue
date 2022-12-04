<template>
    <el-dialog v-model="dialogVisible" style="width: 350px" align-center center draggable :modal="false"
        :close-on-click-modal="false" :close-on-press-escape="false" :destroy-on-close="true" :show-close="false">
        <div class="root">
            <!-- 关闭 -->
            <div class="close" @click="closeLogin">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </div>

            <!-- 二维码登录 -->
            <div class="scanToLogin" v-if="loginStatus === 1">
                <div class="title">扫码登录</div>

                <div id="QRitem">
                    <div class="qr" v-if="!confirmInPhone">
                        <img class="qrImg" :src="QRImg" width="210" />
                    </div>
                    <div class="outTime" v-if="showOutTimeTip">
                        <div class="outTimeTitle">二维码已失效</div>
                        <div class="outTimeButton" @click="outTimeTip">点击刷新</div>
                    </div>
                    <div class="introduce" v-if="!confirmInPhone">
                        使用<a href="javascript:void(0)" class="link">网易云软件APP</a>扫码登录
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

            <!-- 其它方式登录 -->
            <div class="otherToLogin" v-show="loginStatus === 2">
                <div class="scan">
                    <div class="scanImg" @click="switchQRLogin">
                        <div class="outer">
                            <div class="inner"></div>
                        </div>
                    </div>
                    <span class="tip">扫码登录更安全</span>
                </div>
                <div class="logo">
                    <img src="@/assets/icon/wangyiyunyinle.svg" class="logo" width="50" />
                </div>

                <div class="inputInfo">
                    <div class="code">
                        <div class="phoneIcon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shouji"></use>
                            </svg>
                        </div>
                        <select class="select" value="1" name="select">
                            <option v-for="(item, index) in code" :value="index + 1">
                                {{ item.zh }}&nbsp; {{ "+" + item?.code }}
                            </option>
                        </select>

                        <input type="text" class="inputPhone" v-model="phoneInput" placeholder="请输入手机号"
                            @input="phoneInputValid" />
                    </div>
                    <hr />
                    <div class="passwordIcon">
                        <svg class="icon" aria-hidden="true" v-show="!showCaptchaToLogin">
                            <use xlink:href="#icon-24gl-lock2"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true" v-show="showCaptchaToLogin">
                            <use xlink:href="#icon-yuechi"></use>
                        </svg>
                    </div>
                    <input type="password" class="password" v-model="passwordInput" placeholder="请输入密码"
                        @input="passwordInputValid" v-show="!showCaptchaToLogin" />
                    <input type="text" class="captchaToLoginInput password" v-model="captchaToLoginInput"
                        placeholder="请输入验证码" v-show="showCaptchaToLogin" />
                    <div class="getCaptchaToLogin" v-show="showCaptchaToLogin" @click="getCaptchaToLogin">
                        {{ getCaptchaToLoginTitle }}
                    </div>
                </div>

                <div class="showWarningAndTool">
                    <div class="warning" v-if="showWarning">{{ warningTitle }}</div>
                    <div class="tool">
                        <div class="autoLogin">
                            <input type="checkbox" id="autoLogin" checked ref="autoLoginRef" />
                            <div>自动登录</div>
                        </div>
                        <div class="forgetPassword" @click="forgetPasswordButton" v-show="!showCaptchaToLogin">忘记密码
                        </div>
                        <div class="gap" v-show="!showCaptchaToLogin">|</div>
                        <div class="captchaToLogin" @click="captchaToLoginButton" v-show="!showCaptchaToLogin">验证码登录
                        </div>
                        <div class="passwordToLogin" @click="switchPasswordToLogin" v-show="showCaptchaToLogin">
                            密码登录
                        </div>
                    </div>
                </div>

                <div class="loginAndRegister">
                    <el-button id="login" color="#ff3a3a" :auto-insert-space="true" @click="phoneTologin">登录</el-button>
                    <div id="register" @click="switchRegister">注册</div>

                    <div class="quickToLogin">
                        <div class="weChat">
                            <img src="@/assets/icon/wechat.png" width="30" />
                        </div>
                        <div class="qq">
                            <img src="@/assets/icon/qq.png" width="30" />
                        </div>
                        <div class="weibo">
                            <img src="@/assets/icon/weibo.png" width="30" />
                        </div>
                        <div class="wyEmail">
                            <img src="@/assets/icon/wyemail.png" width="30" />
                        </div>
                    </div>
                    <div class="agree">
                        <input type="checkbox" ref="agreeDocsRef" />
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

            <!-- 注册 -->
            <div class="register" v-show="loginStatus === 3">
                <div class="backToLogin" @click="loginStatus = 2; showFogetPassword = false">
                    &lt;&nbsp;返回登录
                </div>

                <div class="logo">
                    <img src="@/assets/icon/wangyiyunyinle.svg" class="logo" width="50" />
                </div>

                <div class="inputInfo">
                    <div class="code">
                        <div class="phoneIcon">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-shouji"></use>
                            </svg>
                        </div>
                        <select class="select" value="1" name="select">
                            <option v-for="(item, index) in code" :value="index + 1">
                                {{ item.zh }}&nbsp; {{ "+" + item?.code }}
                            </option>
                        </select>

                        <input type="text" class="inputPhone" v-model="registerPhoneInput" placeholder="请输入手机号"
                            @input="registerPhoneInputValid" />
                    </div>
                    <hr />
                    <div class="passwordIcon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-24gl-lock2"></use>
                        </svg>
                    </div>
                    <input type="password" class="password" v-model="registerPasswordInput" placeholder="设置登录密码"
                        @input="registerPasswordInputValid" />
                </div>

                <div class="tip" v-if="!showRegisterWarn">
                    密码8-20位,至少包含字母/数字/字符2种组合
                </div>
                <div class="tip warning" v-if="showRegisterWarn">
                    {{ registerWarnTitle }}
                </div>

                <div class="registerStyle" v-if="!showFogetPassword">
                    <el-button id="registerButton" color="#ff3a3a" :auto-insert-space="true"
                        @click="phoneToRegister">注册</el-button>

                    <div class="divide">
                        <el-divider> 其它注册方式 </el-divider>
                    </div>

                    <div class="quickToLogin">
                        <div class="weChat iconItem">
                            <img src="@/assets/icon/wechat.png" width="30" />
                            <div class="name">微信</div>
                        </div>
                        <div class="qq iconItem">
                            <img src="@/assets/icon/qq.png" width="30" />
                            <div class="name">QQ</div>
                        </div>
                        <div class="weibo iconItem">
                            <img src="@/assets/icon/weibo.png" width="30" />
                            <div class="name">新浪微博</div>
                        </div>
                        <div class="wyEmail iconItem">
                            <img src="@/assets/icon/wyemail.png" width="30" />
                            <div class="name">网易邮箱</div>
                        </div>
                    </div>
                </div>

                <div class="registerStyle" v-if="showFogetPassword">
                    <el-button id="registerButton" color="#ff3a3a" :auto-insert-space="true"
                        @click="phoneToRegister">下一步</el-button>
                </div>
            </div>

            <!-- 注册时的短信验证码 -->
            <div class="registerCaptcha" v-if="loginStatus === 4">
                <div class="backToLogin" @click="loginStatus = 3">
                    &lt;&nbsp;返回登录
                </div>

                <div class="logo">
                    <img src="@/assets/icon/wangyiyunyinle.svg" class="logo" width="50" />
                </div>

                <div class="captchaInput">
                    <div class="tip">为了安全，我们会向你的手机发送短信验证码</div>
                    <div class="textAndTime">
                        <div class="iconItem">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-yuechi"></use>
                            </svg>
                        </div>
                        <input type="text" placeholder="填写验证码" v-model="registerCaptchaValue" />
                        <div class="timeCount" @click="getCaptchaAgain">
                            <div class="time">{{ registerCaptchaTitle }}</div>
                            <!-- <div class="getCaptchaAgain">重新获取</div> -->
                        </div>
                    </div>
                    <div class="warn" v-if="showRegisterCaptchaWarn">{{ registerCaptchaWarnTitle }}</div>
                    <el-button id="registerNextButton" color="#ff3a3a" :auto-insert-space="true"
                        @click="registerCaptchaNext" v-if="!showFogetPassword">下一步</el-button>
                    <el-button id="registerNextButton" color="#ff3a3a" :auto-insert-space="true"
                        @click="registerCaptchaNext(true)" v-if="showFogetPassword">完成</el-button>
                </div>
            </div>

            <!-- 注册成功并且账号是已经绑定的 -->
            <div class="registerSuccessAndHavingBinded" v-if="loginStatus === 5">
                <div class="iconItem">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiaolian"></use>
                    </svg>
                </div>

                <div class="tip">
                    该手机号已与云音乐账号 {{ tempNickname }} 绑定，以后你可以直接使用该手机号+密码登录
                </div>

                <el-button id="nextButton" color="#ff3a3a" :auto-insert-space="true"
                    @click="confirmAndLogin">知道了</el-button>

            </div>

        </div>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, type Ref, onBeforeUnmount, onBeforeMount } from "vue";
import loginApi from "@/api/request/loginApi";
import { useLoginStore } from "@/stores/login";
import emitter from "@/utils/eventBus";
import randomString from "@/utils/randomString";

// 登录框的显示与隐藏
let dialogVisible = ref(false);
const setLoginDialogVisible = () => {
    dialogVisible.value = true;
    loginStatus.value = 1;
    getQR();
};
emitter.on("setLoginDialogVisible", setLoginDialogVisible);

const loginStore = useLoginStore();
// 显示二维码已经过期
let showOutTimeTip = ref(false);
// 扫码成功，在手机上确认
let confirmInPhone = ref(false);

// 二维码登录
// 计时器
let timer: number;
// 二维码 key
let key: number;

// 国家编码
let code: Ref<
    Array<{
        code?: string;
        [args: string]: string | undefined;
    }>
> = ref([]);
let cities = ref();

// 判断有没有勾选自动登录
const autoLoginRef = ref();

// 警告提示
let showWarning = ref(false);
let warningTitle = ref("");

let phoneInput = ref("");
let passwordInput = ref("");

// 同意条款
const agreeDocsRef = ref();
// 没有同意条款时显示提示
const notAgreeDocsTip = ref(false);

// 目前的状态（登录、注册）
// 1 表示二维码登录
// 2 表示手机号码登录
// 3 表示注册账号
// 4 表示注册账号的验证码
// 5 表示注册成功并且账号是已经绑定的
let loginStatus = ref(1);

// 二维码图片的base64地址
let QRImg = ref("");

// 获取二维码
const getQR = () => {
    if (!dialogVisible.value) {
        return;
    }
    loginApi.getQRKey().then((res) => {
        key = res.data.unikey;
        if (!key) {
            return;
        }
        loginApi.getQRCreate({ key, qrimg: true }).then((res) => {
            // 获取二维码的base64
            QRImg.value = res.data.qrimg;
            timer = setInterval(() => {
                console.log(456);

                loginApi.getQRCheck({ key }).then((res) => {
                    const statusRes = res as any;
                    // 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
                    switch (statusRes.code) {
                        case 800:
                            clearInterval(timer);
                            confirmInPhone.value = false;
                            showOutTimeTip.value = true;
                            break;
                        case 802:
                            // clearInterval(timer)
                            confirmInPhone.value = true;
                            break;
                        case 803:
                            // 这一步会返回cookie
                            clearInterval(timer);
                            loginStore.setCookie(statusRes.cookie);
                            closeLogin();
                            break;
                        default:
                            break;
                    }
                });
            }, 3000);
        });
    });
};

// 超时
const outTimeTip = () => {
    showOutTimeTip.value = false;
    getQR();
};

// 选择其它方式登录
const switchOtherLoginStyle = () => {
    clearInterval(timer);
    loginStatus.value = 2;
};

// 选择二维码登录
const switchQRLogin = () => {
    loginStatus.value = 1;
    getQR();
};

// 手机号注册登录
// 获取国家编码列表
const getCountriesList = () => {
    loginApi.getCountriesList().then((res) => {
        let result: Array<{
            code?: string;
            [args: string]: string | undefined;
        }> = [];
        for (let i = 0; i < res.data.length; i++) {
            const item = res.data[i];
            // code.value.concat(item.countryList)
            // console.log(item.countryList);
            result = result.concat(item.countryList);
        }
        code.value = result;
        // console.log(code.value);
    });
};
getCountriesList();

// 验证手机号和密码的格式
const showWarningAndTitle = (value: string) => {
    showWarning.value = true;
    warningTitle.value = value;
};

// 手机号码验证
const phoneInputValid = (): boolean => {
    if (phoneInput.value && phoneInput.value.match(/^[\d]{11}$/g)) {
        showWarning.value = false;
        return true;
    } else {
        showWarningAndTitle("请输入11位数字的手机号");
        return false;
    }
};

// 密码输入的验证
const passwordInputValid = (): boolean => {
    if (passwordInput.value) {
        showWarning.value = false;
        return true;
    } else {
        showWarningAndTitle("请输入登录密码");
        return false;
    }
};

// 显示没有同意条款的提示，一秒后关闭
const showNotAgreeDocsTip = () => {
    notAgreeDocsTip.value = true;
    setTimeout(() => {
        notAgreeDocsTip.value = false;
    }, 1500);
};

// 开始登录
const phoneTologin = () => {
    // 判断有没有同意条款
    if (!agreeDocsRef.value.checked) {
        showNotAgreeDocsTip();
        return;
    }
    // 验证码登录
    if (showCaptchaToLogin.value) {
        // 验证码为空
        if (!captchaToLoginInput.value) {
            showWarningAndTitle("请输入验证码");
            return;
        }
        loginApi.captchaVerify({ phone: phoneInput.value, captcha: captchaToLoginInput.value }).then(res => {
            // 返回的 res.data 为布尔值
            if (!res.data) {
                return
            }
            // 验证成功
            loginApi.loginByCellphone({
                phone: phoneInput.value,
                password: "",
                captcha: captchaToLoginInput.value,
            }).then(res => {
                // 登录成功,会返回 cookie 和 token
                loginStore.setCookie((res as any).cookie, autoLoginRef.value.checked);
                closeLogin();
                return;
            })
        }).catch(err => {
            showWarningAndTitle(err.response.data.message);
            return;
        })
    }
    // 判断手机号和密码的格式
    else if (phoneInputValid() && passwordInputValid()) {
        // 判断手机号是否被注册过
        loginApi
            .checkCellphoneExistence({ phone: phoneInput.value as string })
            .then((res) => {
                // 手机号没有注册
                let exist = (res as any)?.exist;
                if (exist === -1) {
                    showWarningAndTitle("该手机号尚未注册");
                    return;
                } else if (exist === 1) {
                    loginApi
                        .loginByCellphone({
                            phone: phoneInput.value as string,
                            password: passwordInput.value as string,
                        })
                        .then(
                            (res) => {
                                if ((res as any)?.code != 200) {
                                    showWarningAndTitle((res as any).msg);
                                    return;
                                }
                                // 登录成功,会返回 cookie 和 token
                                loginStore.setCookie(
                                    (res as any).cookie,
                                    autoLoginRef.value.checked
                                );
                                closeLogin();
                                return;
                            },
                            (err) => {
                                // 密码错误超过限制
                                showWarningAndTitle((err as any).response.data.msg);
                                // (res as any).response.data.msg
                                console.log(err);
                            }
                        );
                }
            });
    }
};

// 切换到注册
const switchRegister = () => {
    if (!agreeDocsRef.value.checked) {
        showNotAgreeDocsTip();
        return;
    }
    loginStatus.value = 3;
};

// 注册的手机号码和密码
let registerPhoneInput = ref();
let registerPasswordInput = ref();

// 注册时账号或者密码有误
let showRegisterWarn = ref(false);
// 有误时的提示信息
let registerWarnTitle = ref("");
// 显示错误信息
const showRegisterWarnAndTitle = (title: string) => {
    showRegisterWarn.value = true;
    registerWarnTitle.value = title;
};

// 注册时的手机号码验证
const registerPhoneInputValid = (): boolean => {
    if (
        registerPhoneInput.value &&
        registerPhoneInput.value.match(/^[\d]{11}$/g)
    ) {
        showRegisterWarn.value = false;
        return true;
    } else {
        showRegisterWarnAndTitle("请输入11位数字的手机号");
        return false;
    }
};

// 注册时的密码验证
const registerPasswordInputValid = (): boolean => {
    if (
        registerPasswordInput.value.length < 8 ||
        registerPasswordInput.value.length > 20
    ) {
        showRegisterWarnAndTitle("请输入8-20位的密码");
        return false;
    } else {
        if (
            !registerPasswordInput.value.match(
                /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,20}$/
            )
        ) {
            showRegisterWarnAndTitle("至少包含字母/数字/字符2种组合");
            return false;
        } else {
            showRegisterWarn.value = false;
            return true;
        }
    }
};

// 开始注册
const phoneToRegister = () => {
    // 判断手机号和密码的格式
    if (registerPhoneInputValid() && registerPasswordInputValid()) {
        // 切换到验证码界面
        loginStatus.value = 4;
        // 开始倒计时
        countTimeAnimation();
        // 发送验证码
        loginApi.sendCaptcha({ phone: registerPhoneInput.value }).then(res => {
            if ((res as any).code === 400) {
                showRegisterCaptchaWarnAndTitle((res as any).message)
            }
        });
    }
};

// 验证码
let registerCaptchaValue = ref()

// 注册时的验证码倒计时
let registerCaptchaTitle = ref("获取验证码");
// 验证码倒计时的动画
let intervalTimer: number;
const countTimeAnimation = () => {
    let registerCaptchaCountTime = 59;
    let stringfOfCountTime: string
    intervalTimer = setInterval(() => {
        registerCaptchaCountTime -= 1;
        if (registerCaptchaCountTime === 0) {
            clearInterval(intervalTimer);
            registerCaptchaTitle.value = "重新获取";
            return;
        }
        stringfOfCountTime = registerCaptchaCountTime < 10 ? "0" + registerCaptchaCountTime : `${registerCaptchaCountTime}`
        registerCaptchaTitle.value = `00:${stringfOfCountTime}`;
    }, 1000);
};

// 重新获取验证码
const getCaptchaAgain = () => {
    if (registerCaptchaTitle.value != "重新获取") {
        return;
    }
    // 开始倒计时
    countTimeAnimation();
    // 发送验证码
    loginApi.sendCaptcha({ phone: registerPhoneInput.value }).then(res => {
        if ((res as any).code === 400) {
            showRegisterCaptchaWarnAndTitle((res as any).message)
        }
    });
};

// 注册输入验证码的警告
let showRegisterCaptchaWarn = ref(false)
let registerCaptchaWarnTitle = ref("")
const showRegisterCaptchaWarnAndTitle = (value: string) => {
    showRegisterCaptchaWarn.value = true;
    registerCaptchaWarnTitle.value = value;
}

// 用户点击知道了才会登录，否则只是修改密码
let tempNickname = ref("")
let tempCookie = ref("")

// 输入验证码的下一步
const registerCaptchaNext = (forgetPassword = false) => {
    // 验证码为空
    if (!registerCaptchaValue.value) {
        showRegisterCaptchaWarnAndTitle("请输入验证码");
        return;
    }
    loginApi.captchaVerify({ phone: registerPhoneInput.value, captcha: registerCaptchaValue.value }).then(res => {
        // 返回的 res.data 为布尔值
        if (!res.data) {
            return
        }
        // 验证成功
        // 判断手机号是否被注册过
        loginApi
            .checkCellphoneExistence({ phone: registerPhoneInput.value as string })
            .then((res) => {
                let exist = (res as any)?.exist;
                if (exist === 1) {
                    // 手机号已经注册，相当于修改密码,直接登录并且修改密码
                    tempNickname.value = ""
                    registerAndLogin(forgetPassword);
                } else if (exist === -1) {
                    // 手机号没有注册，创建一个新号
                    // 由于没有新号，不知道网易云的操作，这里我直接采用一个随机昵称
                    loginApi.nicknameCheck({ nickname: "用户" + randomString(6) }).then(res => {
                        let result = res as any
                        if (!result.duplicated) {
                            tempNickname.value = result.nickname
                        }
                        else {
                            tempNickname.value = result.candidateNicknames[0]
                        }
                        registerAndLogin(forgetPassword);
                    })
                }

            });
    }).catch(err => {
        showRegisterCaptchaWarnAndTitle(err.response.data.message);
        return;
    })
}

// 注册并且登录
const registerAndLogin = (forgetPassword = false) => {
    loginApi.registerCellphone({
        captcha: registerCaptchaValue.value,
        phone: registerPhoneInput.value,
        password: registerPasswordInput.value,
        nickname: tempNickname.value
    }).then(res => {
        tempNickname.value = (res as any).profile.nickname || "";
        loginApi.loginByCellphone({
            phone: registerPhoneInput.value,
            password: registerPasswordInput.value,
            captcha: registerCaptchaValue.value,
        }).then(res => {
            // 登录成功,会返回 cookie 和 token
            tempCookie.value = (res as any).cookie;
            if (forgetPassword) {
                confirmAndLogin()
                return;
            }
            loginStatus.value = 5;
            return;
        })
    })
}

// 注册时账号存在，修改密码,点击知道了，关闭登录框，登录成功
const confirmAndLogin = () => {
    loginStore.setCookie(tempCookie.value);
    closeLogin();
}

// 忘记密码
let showFogetPassword = ref(false);
const forgetPasswordButton = () => {
    registerPasswordInput.value = ""
    registerPhoneInput.value = ""
    showRegisterWarn.value = false
    loginStatus.value = 3;
    showFogetPassword.value = true;
}

// 验证码登录
let showCaptchaToLogin = ref(false)
let captchaToLoginInput = ref("")
let getCaptchaToLoginTitle = ref("获取验证码")
// 获取验证码
const getCaptchaToLogin = () => {
    if (getCaptchaToLoginTitle.value != "重新获取" && getCaptchaToLoginTitle.value != "获取验证码") {
        return;
    }
    if (phoneInputValid()) {
        // 验证码倒计时
        getCountTime();
        // 发送验证码
        loginApi.sendCaptcha({ phone: phoneInput.value }).then(res => {
            console.log(res);
            if ((res as any).code === 400) {
                showWarningAndTitle((res as any).message)
            }
            showWarningAndTitle("验证码已通过短信发送")
        });

    }
}
// 选择验证码登录
const captchaToLoginButton = () => {
    showWarning.value = false
    showCaptchaToLogin.value = true;
}
// 切换到密码登录
const switchPasswordToLogin = () => {
    if (captchaToLoginTimer) {
        clearInterval(captchaToLoginTimer)
    }
    getCaptchaToLoginTitle.value = "获取验证码";
    showWarning.value = false
    showCaptchaToLogin.value = false;
}
// 验证码倒计时
let captchaToLoginTimer: number;
const getCountTime = () => {
    let countTime = 59;
    let stringfOfCountTime: string
    captchaToLoginTimer = setInterval(() => {
        countTime -= 1;
        if (countTime === 0) {
            clearInterval(captchaToLoginTimer);
            getCaptchaToLoginTitle.value = "重新获取";
            return;
        }
        stringfOfCountTime = countTime < 10 ? "0" + countTime : `${countTime}`
        getCaptchaToLoginTitle.value = `00:${stringfOfCountTime}`;
    }, 1000);
}

// 关闭登录框
const closeLogin = () => {
    if (timer) {
        clearInterval(timer);
    }
    phoneInput.value = ""
    passwordInput.value = ""
    registerPasswordInput.value = ""
    registerPhoneInput.value = ""
    captchaToLoginInput.value = ""
    showRegisterWarn.value = false
    dialogVisible.value = false;
};

onBeforeUnmount(() => {
    closeLogin();
});
</script>

<style lang="scss" scoped>
@use "@/style/views/login.scss";
</style>
8
