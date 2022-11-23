import axios from "axios";
import { ElMessage } from "element-plus";

const baseURL = "http://localhost:3000";
// const baseURL = "https://music-eight-black.vercel.app/";

const request = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: true,
});

request.interceptors.request.use(
  (config) => {
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
