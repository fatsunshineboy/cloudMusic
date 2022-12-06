import request from "..";

// 获取歌单详情
// **必选参数 :** `id` : 歌单 id
// **可选参数 :** `s` : 歌单最近的 s 个收藏者,默认为 8
const getPlaylistDetail = (params: { id: string | number; s?: number }) =>
  request({
    url: "/playlist/detail",
    method: "GET",
    params,
  });

// 歌单收藏者
const getPlaylistSubscribers = (params: {
  id: string | number;
  limit?: number;
  offset?: number;
}) =>
  request({
    url: "/playlist/subscribers",
    method: "GET",
    params,
  });

export default { getPlaylistDetail, getPlaylistSubscribers };
