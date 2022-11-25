import request from "..";

// 获取歌手描述
const getArtistDesc = (params: { id: string }) =>
  request({
    url: "/artist/desc",
    method: "GET",
    params,
  });

// 获取歌手详情
const getArtistDetail = (params: { id: string }) =>
  request({
    url: "/artist/detail",
    method: "GET",
    params,
  });

// 歌手粉丝数量
const getArtistFansCount = (params: { id: string }) =>
  request({
    url: "/artist/follow/count",
    method: "GET",
    params,
  });

export default {
  getArtistDesc,
  getArtistDetail,
  getArtistFansCount,
};
