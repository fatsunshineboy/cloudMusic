import { useLoginStore } from "@/stores/login";
import axios from "axios";
import { ElMessage } from "element-plus";

const baseURL = "http://localhost:3000";
// const baseURL = "https://music-eight-black.vercel.app/";
// const baseURL = "http://1.117.75.142:3000/";

const request = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true,
});

request.interceptors.request.use(
  (config) => {
    const loginStore = useLoginStore();
    let cookie = loginStore.token;
    if (cookie) {
      // 判断请求的类型：如果是post请求就把默认参数拼到data里面；如果是get请求就拼到params里面
      if (config.method === "post") {
        config.data = {
          cookie,
          ...config.data,
        };
      } else if (config.method === "get") {
        config.params = {
          cookie,
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

request.interceptors.response.use((res): any => {
  let code = res.data.code;
  if (!code) {
    return res;
  }
  switch (code) {
    case 200:
      return res.data;
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
});

export default request;
