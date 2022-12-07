import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type playList from "@/type/playList";

export const usePlayListStore = defineStore("playlist", () => {
  // 播放列表
  let playList: Ref<Array<playList>> = ref(
    JSON.parse((localStorage.getItem("playList") as string) || "[]")
  );

  // 表示当前正在播放的
  let nowToPlayId = ref(
    Number.parseInt(localStorage.getItem("nowToPlayId") || "-1")
  );

  // 修改当前播放的歌曲
  const setNowToPlayId = (index: number) => {
    nowToPlayId.value = index;
    localStorage.setItem("nowToPlayId", JSON.stringify(index));
  };

  // 替换播放列表
  const setPlayList = (newPlayList: Array<playList>) => {
    // 森拷贝对象数组
    playList.value = JSON.parse(JSON.stringify(newPlayList));
    // 初始化，播放顺序从0开始
    setNowToPlayId(0);
    localStorage.setItem("playList", JSON.stringify(playList.value));
  };

  // 增加歌曲到播放列表
  const appendSongToPlayLsit = (
    insertPlayList: Array<playList>,
    playAtOnce = true
  ) => {
    // 剔除已经在歌单里的歌
    let tempPlayList = JSON.parse(JSON.stringify(playList.value));
    let tempInsertPlayList = JSON.parse(JSON.stringify(insertPlayList));

    // 新添加的歌单都是在 nowToPlayId 的后面，不可能在之前
    tempPlayList.splice(nowToPlayId.value + 1, 0, ...tempInsertPlayList);

    let hash = new Map();
    let deletedIndex: Array<number> = [];
    let nowToPlayIdCount = 0;
    let temp = tempPlayList.reduce(
      (acc: Array<playList>, cru: playList, index: number) => {
        if (hash.get(cru["id"])) {
          if (hash.get(cru["id"])["index"] < nowToPlayId.value) {
            // 有重复的值，并且第一个值在当前播放的前面
            // 删除第一个值，把第二个值存到 hash
            // 把 nowToPlayId 的值向往前移一位
            // acc.splice(hash.get(cru["id"])["index"], 1);
            // 这个删除导致在 nowToPlayId 的id对应的索引错位
            deletedIndex.push(hash.get(cru["id"])["index"]);
            hash.set(cru["id"], { index: acc.length });
            acc.push(cru);
            nowToPlayIdCount += 1;
          }
          // else if (hash.get(cru["id"])["index"] >= nowToPlayId.value) {
          // 有重复的值，并且第一个值在当前播放的后面，删除第二个值,也就是什么都不处理
          // 有重复的值，并且就是当前播放的歌曲，还是什么都不处理
          // }
        } else {
          // 如果之前没有这个值，就把这个值存到 hash
          hash.set(cru["id"], { index: acc.length });
          acc.push(cru);
        }
        // console.log(acc);
        return acc;
      },
      []
    );

    // console.log(temp);
    // console.log(deletedIndex);
    // 循环将数组应删除的元素删除，删完将变成 undefined
    for (let i = 0; i < deletedIndex.length; i++) {
      delete temp[deletedIndex[i]];
    }
    // 将 undefined 删除
    temp = temp.filter((item: playList) => {
      return item != undefined;
    });

    playList.value = temp;
    localStorage.setItem("playList", JSON.stringify(playList.value));
    setNowToPlayId(nowToPlayId.value - nowToPlayIdCount);

    if (playAtOnce) {
      setNowToPlayId(nowToPlayId.value + 1);
    }
  };

  // 从播放列表删除歌曲
  const removeSongFromPlayLsit = (startIndex: number, count: number) => {
    playList.value.splice(startIndex, count);
    localStorage.setItem("playList", JSON.stringify(playList.value));
  };

  // 清空播放列表
  const clearPlayList = () => {
    playList.value = [];
    setNowToPlayId(-1);
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
