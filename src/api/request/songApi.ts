import request from "..";

// 获取音乐 url - 新版
const getMusicUrlNew = (params: { id: string | number; level?: string }) =>
  request({
    url: "/song/url/v1",
    method: "GET",
    params,
  });

// 获取歌曲详情
const getSongDetail = (params: { ids: string }) =>
  request({
    url: "/song/detail",
    method: "GET",
    params,
  });

export default {
  getMusicUrlNew,
  getSongDetail,
};
