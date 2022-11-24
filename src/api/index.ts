import axios from "axios";
import { ElMessage } from "element-plus";

// const baseURL = "http://localhost:3000";
const baseURL = "https://music-eight-black.vercel.app/";

const request = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true,
});

request.interceptors.request.use(
  (config) => {
    //判断请求的类型：如果是post请求就把默认参数拼到data里面；如果是get请求就拼到params里面
    if (config.method === "post") {
      config.data = {
        ...config.data,
      };
    } else if (config.method === "get") {
      config.params = {
        realIP: "116.25.146.177",
        ...config.params,
      };
    }
    return config;
  },
  (err) => {
    console.log(err);
  }
);

request.interceptors.response.use((res): any => {
  let code = res.data.code;
  switch (code) {
    case 200:
      return res.data;
    default:
      return ElMessage({
        message: res.data,
        type: "warning",
      });
  }
});

export default request;
