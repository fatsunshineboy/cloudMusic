import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import type playList from "@/type/playList";

export const usePlayList = defineStore("playlist", () => {
  // 播放列表
  let playList: Ref<Array<playList>> = ref(
    JSON.parse(localStorage.getItem("playList") as string) || []
  );

  // 表示当前正在播放的
  let nowToPlayId = ref(0);
  // 修改当前播放的歌曲
  const setNowToPlayId = (index: number) => {
    if (index < 0) {
      return;
    }
    nowToPlayId.value = index;
  };

  // 替换播放列表
  const setPlayList = (newPlayList: Array<playList>) => {
    playList.value = newPlayList;
    // 初始化，播放顺寻从0开始
    nowToPlayId.value = 0;
    localStorage.setItem("playList", JSON.stringify(playList.value));
  };

  // 增加歌曲到播放列表
  const appendSongToPlayLsit = (insertPlayList: Array<playList>) => {
    playList.value.splice(nowToPlayId.value, 0, ...insertPlayList);
    localStorage.setItem("playList", JSON.stringify(playList.value));
  };

  // 从播放列表删除歌曲
  const removeSongFromPlayLsit = (startIndex: number, count: number) => {
    playList.value.splice(startIndex, count);
    localStorage.setItem("playList", JSON.stringify(playList.value));
  };

  // 清空播放列表
  const clearPlayList = () => {
    playList.value = [];
    nowToPlayId.value = 0;
    localStorage.setItem("playList", JSON.stringify(playList.value));
  };

  return {
    playList,
    nowToPlayId,
    setNowToPlayId,
    setPlayList,
    appendSongToPlayLsit,
    removeSongFromPlayLsit,
    clearPlayList,
  };
});
