import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

const useMUsicStore = defineStore("volume", () => {
  // 音量
  // 默认音量
  const defaultVolume: number = 20;
  // 判断是否静音
  let isMuted: Ref<boolean> = ref(
    JSON.parse(localStorage.getItem("isMuted") as string)
  );

  // 修改是否手动静音
  const setIsMuted = (value: boolean) => {
    localStorage.setItem("isMuted", JSON.stringify(value));
    isMuted.value = value;
  };
  // 本地存储音量
  let volumeValue: Ref<number> = ref(
    (JSON.parse(localStorage.getItem("volumeValue") as string) as number) ||
      defaultVolume
  );
  const setVolume = (value: number) => {
    localStorage.setItem("volumeValue", JSON.stringify(value));
    volumeValue.value = value;
  };

  // 最后一次听的歌
  let songId = localStorage.getItem("songId")
    ? JSON.parse(localStorage.getItem("songId") as string)
    : "";
  const setSongId = (value: number) => {
    localStorage.setItem("songId", JSON.stringify(value));
    songId = value;
  };

  // 听歌的暂停时间
  let pauseTime: Ref<number> = ref(
    Number.parseFloat(localStorage.getItem("pauseTime") as string) || 0
  );

  const setPauseTime = (value: number) => {
    if (value === undefined) {
      return;
    }
    localStorage.setItem("pauseTime", JSON.stringify(value));
    pauseTime.value = value;
  };

  return {
    volumeValue,
    setVolume,
    defaultVolume,
    isMuted,
    setIsMuted,
    songId,
    setSongId,
    pauseTime,
    setPauseTime,
  };
});

export default useMUsicStore;
