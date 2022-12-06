import type { commentType } from "@/type/comment";
import request from "..";

// 获取歌单评论
const getPlaylistComment = (params: {
  id: string | number;
  limit?: number;
  offset?: number;
  before?: number;
}) =>
  request({
    url: `/comment/playlist?timerstamp=${Date.now()}`,
    method: "GET",
    params,
  });

// 热门评论
const getHotComment = (params: {
  id: string | number;
  type: commentType;
  limit?: number;
  offset?: number;
  before?: number;
}) =>
  request({
    url: `/comment/hot?timerstamp=${Date.now()}`,
    method: "GET",
    params,
  });

// 给评论点赞
// `id`    :   资源 id, 如歌曲 id,mv id
// `cid`   :   评论 id
// `t`     :   是否点赞 , 1 为点赞 ,0 为取消点赞
// `type`  :   数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频
const likeComment = (params: {
  id: string | number;
  cid: string;
  t: 0 | 1;
  type: commentType;
}) =>
  request({
    url: `/comment/like?timerstamp=${Date.now()}`,
    method: "GET",
    params,
  });

// 调用此接口,可发送评论或者删除评论
// `t`:0 删除, 1 发送, 2 回复
const sendComment = (params: {
  id: string | number;
  content: string;
  commentId?: string;
  t: 0 | 1 | 2;
  type: commentType;
}) =>
  request({
    url: `/comment/like?timerstamp=${Date.now()}`,
    method: "GET",
    params,
  });

export default { getPlaylistComment, getHotComment, likeComment, sendComment };
