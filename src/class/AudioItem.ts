class AudioItem {
  private audio: HTMLAudioElement;

  constructor(src?: string) {
    this.audio = new Audio(src);
  }

  //  音量
  get volume() {
    return this.audio.volume;
  }

  set volume(volumeValue: number) {
    this.audio.volume = volumeValue;
  }

  // src
  get src() {
    return this.audio.src;
  }

  set src(srcVal: string) {
    this.audio.src = srcVal;
  }

  // duration
  get duration() {
    return this.audio.duration;
  }

  // currentTime
  get currentTime() {
    return this.audio.currentTime;
  }

  set currentTime(currentTimeValue: number) {
    // console.log(currentTimeValue);
    this.audio.currentTime = currentTimeValue;
  }

  // 开始播放音乐
  public startPlaySong = (startTime: number) => {
    this.audio.currentTime = startTime as number;
    this.audio.play();
  };

  // 暂停音乐
  public pauseMusic = () => {
    this.audio.pause();
  };

  // 绑定事件
  // 时间变换
  public addEvent_timeupdate = (
    timeUpdate: EventListenerOrEventListenerObject
  ) => {
    this.audio.addEventListener("timeupdate", timeUpdate);
  };
  // 音频数据加载后
  public addEvent_loadedmetadata = (
    loadedmetadata: EventListenerOrEventListenerObject
  ) => {
    this.audio.addEventListener("loadedmetadata", loadedmetadata);
  };
  // 音频播放完
  public addEvent_ended = (ended: EventListenerOrEventListenerObject) => {
    this.audio.addEventListener("ended", ended);
  };
}

export default AudioItem;
