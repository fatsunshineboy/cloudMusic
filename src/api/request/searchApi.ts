import request from "..";

// 搜索

// 说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 ,
// 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 可通过 `/song/url` 接口传入歌曲 id 获取具体的播放链接

// **必选参数 :** `keywords` : 关键词

// **可选参数 :** `limit` : 返回数量 , 默认为 30 `offset` : 偏移数量，用于分页 , 如
// : 如 :( 页数 -1)\*30, 其中 30 为 limit 的值 , 默认为 0

// `type`: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000:
// 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)

const search = (params: {
  keywords: string;
  limit?: number;
  offset?: number;
  type?: number;
}) =>
  request({
    url: "/search",
    method: "GET",
    params,
  });

// 默认搜索关键词
const searchDefaultKeywords = () =>
  request({
    url: "/search/default",
    method: "GET",
  });

// 热搜列表(简略)
const hotSearchListSimple = () =>
  request({
    url: "/search/hot",
    method: "GET",
  });

// 热搜列表(详细)
const hotSearchListDetail = () =>
  request({
    url: "/search/hot/detail",
    method: "GET",
  });

// 搜索建议
const searchSuggest = (params: { keywords: string; type?: string }) =>
  request({
    url: "/search/suggest",
    method: "GET",
    params,
  });

// 搜索多重匹配
const searchMultiMatch = (params: { keywords: string }) =>
  request({
    url: "/search/multimatch",
    method: "GET",
    params,
  });

export default {
  search,
  searchDefaultKeywords,
  hotSearchListSimple,
  hotSearchListDetail,
  searchSuggest,
  searchMultiMatch,
};
