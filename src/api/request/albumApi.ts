import request from "..";

// 获取歌手描述
const getAlbumDetail = (params: { id: string }) =>
  request({
    url: "/album",
    method: "GET",
    params,
  });

export default { getAlbumDetail };
