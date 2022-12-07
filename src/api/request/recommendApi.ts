import request from "..";

// 获取每日推荐歌单
const getRecommendResource = () =>
  request({
    url: "/recommend/resource",
    method: "GET",
  });

// 推荐歌单
const getPlaylistPersonalized = (params: { limit?: number }) =>
  request({
    url: "/personalized",
    method: "GET",
    params,
  });

// 获取每日推荐歌曲
const getRecommendSongs = () =>
  request({
    url: "/recommend/songs",
    method: "GET",
  });

export default {
  getRecommendResource,
  getPlaylistPersonalized,
  getRecommendSongs,
};
