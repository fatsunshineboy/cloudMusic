import request from "..";

// 获取用户详情
const getUserDetail = (params: { uid: string | number }) =>
  request({
    url: `/user/detail?timerstamp=${Date.now()}`,
    method: "GET",
    params,
  });

// 获取账号信息
const getUserAccount = () =>
  request({
    url: `/user/account?timerstamp=${Date.now()}`,
    method: "POST",
  });

// 获取用户信息 , 歌单，收藏，mv, dj 数量
const getUserSubAccount = () =>
  request({
    url: `/user/subcount?timerstamp=${Date.now()}`,
    method: "POST",
  });

// 获取用户歌单
const getUserPlyList = (params: {
  uid: number;
  limit?: number;
  offset?: number;
}) =>
  request({
    url: `/user/playlist?timerstamp=${Date.now()}`,
    method: "get",
    params,
  });

export default {
  getUserDetail,
  getUserAccount,
  getUserSubAccount,
  getUserPlyList,
};
