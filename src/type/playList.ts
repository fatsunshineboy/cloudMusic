export default interface playList {
  id: string;
  songName: string;
  singer: string;
  // 来源类型
  // 1 为搜索页
  // 2 为歌单
  // 3 为banner
  sourceType?: number;
  // 来源
  // 搜索页时，显示的是搜索词
  // 歌单时，显示的是歌单id和名称
  source: string | number;
  // 歌单名字
  playListName?: string;
  time: string;
}
