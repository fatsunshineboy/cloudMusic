import request from "..";

// 获取音乐 url - 新版
const getMusicUrlNew = (params: { id: number; level?: string }) =>
  request({
    url: "/song/url/v1",
    method: "GET",
    params,
  });

export default {
  getMusicUrlNew,
};
