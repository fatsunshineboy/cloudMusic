import { useLoginStore } from "@/stores/login";
import axios from "axios";
import { ElMessage } from "element-plus";

const baseURL = import.meta.env.PROD
  ? "http://1.117.75.142:3000/"
  : "http://localhost:3000";

const request = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true,
});

request.interceptors.request.use(
  (config) => {
    const loginStore = useLoginStore();
    let cookie = loginStore.cookie;
    if (cookie) {
      // 判断请求的类型：如果是post请求就把默认参数拼到data里面；如果是get请求就拼到params里面
      if (config.method === "post") {
        config.data = {
          cookie,
          ...config.data,
        };
      } else if (config.method === "get") {
        config.params = {
          cookie: encodeURIComponent(cookie),
          ...config.params,
        };
      }
    }
    return config;
  },
  (err) => {
    console.log(err);
  }
);

request.interceptors.response.use(
  (res): any => {
    // console.log(res);
    let code = res.data.code;
    if (!code) {
      return res;
    }
    switch (code) {
      case 200:
        return res.data;
      // 当天发送验证码的条数超过限制
      case 400:
        return res.data;
      // 手机登录账号或密码错误
      case 502:
        return res.data;
      // 验证码错误
      case 503:
        return res;
      // 密码错误超过限制
      case 509:
        return res;
      // 二维码返回的 code
      case 800:
      case 801:
      case 802:
      case 803:
        return res.data;
      default:
        return ElMessage({
          message: res.data,
          type: "warning",
        });
    }
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default request;
