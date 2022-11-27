import request from "../index";

// 二维码登录
// 1. 二维码 key 生成接口
const getQRKey = () => {
  let timestamp = new Date().getTime();
  let params = { timestamp };
  return request({
    url: "/login/qr/key",
    method: "GET",
    params,
  });
};

// 2. 二维码生成接口
const getQRCreate = (params: {
  key: number;
  qrimg?: boolean;
  timestamp?: number;
}) => {
  params["timestamp"] = new Date().getTime();
  return request({
    url: "/login/qr/create",
    method: "GET",
    params,
  });
};

// 3. 二维码检测扫码状态接口
// 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
const getQRCheck = (params: { key: number; timestamp?: number }) => {
  params["timestamp"] = new Date().getTime();
  return request({
    url: "/login/qr/check",
    method: "GET",
    params,
  });
};

// 登录状态
const getLoginStatus = (cookie: string) =>
  request({
    url: `/login/status?timerstamp=${Date.now()}`,
    method: "POST",
    data: {
      cookie,
    },
  });

// 退出登录
const logout = (cookie: string) =>
  request({
    url: "/logout",
    method: "POST",
    data: {
      cookie,
    },
  });

export default {
  getQRKey,
  getQRCreate,
  getQRCheck,
  getLoginStatus,
  logout,
};
