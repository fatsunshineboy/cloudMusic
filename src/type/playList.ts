import type sourceType from "@/type/sourceType";

export default interface playList {
  id: string;
  songName: string;
  singer: Array<string>;
  singerId: Array<string | number>;
  // 来源类型
  // 1 为搜索页
  // 2 为歌单
  // 3 为banner
  // 4 为每日歌曲推荐
  // 5 为专辑
  sourceType?: sourceType;
  // 来源
  // 搜索页时，显示的是搜索词
  // 歌单时，显示的是歌单id和名称
  source: string | number;
  // 歌单/专辑名字
  sourceName?: string;
  time: string;
  [x: string]: any;
}
