import type playList from "@/type/playList";

const uniquePlayList = (arr: Array<playList>) => {
  let hash = new Map();
  return arr.reduce((acc: Array<playList>, cru: playList, index: number) => {
    if (!hash.get(cru["id"])) {
      hash.set(cru["id"], { index: acc.length });
      acc.push(cru);
    } else {
      acc.splice(hash.get(cru["id"])["index"], 1, cru);
    }
    return acc;
  }, []);
};

export default uniquePlayList;
