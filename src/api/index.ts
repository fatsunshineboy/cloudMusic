import axios from "axios";

const baseURL = "http://localhost:3000";
// const baseURL = "https://music-eight-black.vercel.app/"

const request = axios.create({
  baseURL,
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    console.log(err);
  }
);

request.interceptors.response.use((res) => {
  return res;
});

export default request;
