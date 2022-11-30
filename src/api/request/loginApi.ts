import request from "../index";

// 二维码登录
// 1. 二维码 key 生成接口
const getQRKey = () =>
  request({
    url: `/login/qr/key?timerstamp=${Date.now()}`,
    method: "GET",
  });

// 2. 二维码生成接口
const getQRCreate = (params: { key: number; qrimg?: boolean }) =>
  request({
    url: `/login/qr/create?timerstamp=${Date.now()}`,
    method: "GET",
    params,
  });

// 3. 二维码检测扫码状态接口
// 800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
const getQRCheck = (params: { key: number }) =>
  request({
    url: `/login/qr/check?timerstamp=${Date.now()}`,
    method: "GET",
    params,
  });

// 登录状态
const getLoginStatus = () =>
  request({
    url: `/login/status?timerstamp=${Date.now()}`,
    method: "POST",
  });

// 退出登录
const logout = () =>
  request({
    url: `/logout?timerstamp=${Date.now()}`,
    method: "POST",
  });

// 国家编码列表
const getCountriesList = () =>
  request({
    url: `/countries/code/list`,
    method: "GET",
  });

// 手机号登录
const loginByCellphone = (params: {
  phone: string;
  password: string;
  countrycode?: string;
  md5_password?: string;
  captcha?: string;
}) =>
  request({
    url: `/login/cellphone`,
    method: "GET",
    params,
  });

// 检测手机号码是否已注册
const checkCellphoneExistence = (params: { phone: string }) =>
  request({
    url: `/cellphone/existence/check`,
    method: "GET",
    params,
  });

export default {
  getQRKey,
  getQRCreate,
  getQRCheck,
  getLoginStatus,
  logout,
  getCountriesList,
  loginByCellphone,
  checkCellphoneExistence,
};
