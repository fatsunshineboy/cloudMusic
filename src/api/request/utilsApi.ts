import request from "..";

// banner
// `type`:资源类型,对应以下类型,默认为 0 即 PC
// 0: pc 1: android 2: iphone 3: ipad
const getBanner = (type?: 0 | 1 | 2 | 3) =>
  request({
    url: "/banner",
    method: "GET",
    params: {
      type,
    },
  });

export default {
  getBanner,
};
