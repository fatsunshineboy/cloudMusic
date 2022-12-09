import request from "..";

// 最近播放-播客
const getRecentRecordDJ = (params: { limit?: number }) =>
  request({
    url: `/record/recent/dj?timerstamp=${Date.now()}`,
    method: "GET",
    params,
  });

// 推荐电台
const getPersonalizedDJProgram = () =>
  request({
    url: `/personalized/djprogram?timerstamp=${Date.now()}`,
    method: "GET",
  });

// 热门电台
const getHotDJ = (params: { limit?: number; offset?: number }) =>
  request({
    url: "/dj/hot",
    method: "GET",
    params,
  });

// 推荐节目
const getProgramRecommend = () =>
  request({
    url: "/program/recommend",
    method: "GET",
  });

// 电台个性推荐
const getDJPersonalizedRecommend = () =>
  request({
    url: "/dj/personalize/recommend",
    method: "GET",
  });

// 电台 - 推荐
const getDJRecommend = () =>
  request({
    url: "/dj/recommend",
    method: "GET",
  });

// 获取用户电台
const getUserDJ = (params: { uid: number | string }) =>
  request({
    url: "/user/dj",
    method: "GET",
    params,
  });

export default {
  getRecentRecordDJ,
  getPersonalizedDJProgram,
  getHotDJ,
  getProgramRecommend,
  getDJPersonalizedRecommend,
  getDJRecommend,
  getUserDJ,
};
