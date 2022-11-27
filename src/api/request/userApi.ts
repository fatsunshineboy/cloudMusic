import request from "..";

// 获取用户详情
const getUserDetail = (params: { uid: string | number }) =>
  request({
    url: "/user/detail",
    method: "GET",
    params,
  });

export default {
  getUserDetail,
};
