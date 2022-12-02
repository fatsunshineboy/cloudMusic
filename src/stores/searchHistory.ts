import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSearchHistoryStore = defineStore("searchHistory", () => {
  const history = ref(
    JSON.parse(localStorage.getItem("history") as string) || []
  );

  // 计算历史记录的长度
  let countHistoryLength = computed(() => {
    let historyLength = 0;
    for (let index = 0; index < history.value.length; index++) {
      const item = history.value[index];
      historyLength += item.length;
    }
    return historyLength;
  });

  // 增加搜索记录
  const addHistory = (searchVal: string) => {
    let index = history.value.indexOf(searchVal);
    if (index === -1) {
      history.value.unshift(searchVal);
    } else {
      // 如果之前有记录，就交换位置
      // 第一个位置就不交换
      if (index === 0) {
        return;
      }
      history.value.unshift(...history.value.splice(index, 1));
      //   [history.value[0], history.value[index]] = [
      //     history.value[index],
      //     history.value[0],
      //   ];
    }
    localStorage.setItem("history", JSON.stringify(history.value));
  };

  // 删除搜索记录
  const removeHistory = (index: number) => {
    history.value.splice(index, 1);
    localStorage.setItem("history", JSON.stringify(history.value));
  };

  // 清空记录
  const clearHistory = () => {
    history.value = [];
    localStorage.setItem("history", "[]");
  };

  return {
    history,
    countHistoryLength,
    addHistory,
    removeHistory,
    clearHistory,
  };
});
