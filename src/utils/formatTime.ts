export default (time: number): string => {
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
