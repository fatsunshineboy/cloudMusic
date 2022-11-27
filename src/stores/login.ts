import { ref, watch } from "vue";
import { defineStore } from "pinia";
import loginApi from "@/api/request/loginApi";

export const useLoginStore = defineStore("login", () => {
  let token = ref(localStorage.getItem("token") || "");

  let loginStatus = ref(false);

  let uid = ref();

  let getLoginStatus = () => {
    if (!token.value) {
      return;
    }
    loginApi.getLoginStatus(token.value).then((res) => {
      // 获取用户 uid
      uid.value = res.data.data.account.id;
      let status = res.data.data.account.status;
      loginStatus.value = true;
      // switch (status) {
      //   case 0:
      //     loginStatus.value = true;
      //     break;
      //   default:
      //     loginStatus.value = false;
      //     setToken("");
      //     break;
      // }
    });
  };

  watch(
    () => token.value,
    () => {
      getLoginStatus();
    },
    {
      immediate: true,
    }
  );

  const setToken = (value: string) => {
    localStorage.setItem("token", value);
    token.value = value;
  };

  const exit = () => {
    console.log(123);

    loginStatus.value = false;
    localStorage.removeItem("token");
    token.value = "";
  };

  return { loginStatus, uid, getLoginStatus, setToken, exit };
});
