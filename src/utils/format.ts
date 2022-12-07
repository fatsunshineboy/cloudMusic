const formatTime = (time: number): string => {
  let minute =
    Math.floor(time / 60) > 9
      ? Math.floor(time / 60)
      : 0 + "" + Math.floor(time / 60);
  let second =
    Math.floor(time % 60) > 9
      ? Math.floor(time % 60)
      : 0 + "" + Math.floor(time % 60);
  return minute + ":" + second;
};

const formatCount = (count: number): string => {
  if (count < 10000) {
    return count + "";
  } else if (count < 100000000) {
    return Math.floor(count / 10000) + "万";
  } else {
    return Math.floor(count / 10000 / 10000) + "亿";
  }
};

export { formatTime, formatCount };
