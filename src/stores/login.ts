import { ref, watch } from "vue";
import { defineStore } from "pinia";
import loginApi from "@/api/request/loginApi";

export const useLoginStore = defineStore("login", () => {
  let cookie = ref(localStorage.getItem("cookie") || "");

  let loginStatus = ref(false);

  let uid = ref();

  let getLoginStatus = () => {
    if (!cookie.value) {
      return;
    }
    loginApi.getLoginStatus().then((res) => {
      // 获取用户 uid
      uid.value = res.data.data.account.id;
      let status = res.data.data.account.status;
      switch (status) {
        case 0:
          loginStatus.value = true;
          break;
        default:
          loginStatus.value = false;
          alert(status);
          // setCookie("");
          break;
      }
    });
  };

  watch(
    () => cookie.value,
    () => {
      getLoginStatus();
    },
    {
      immediate: true,
    }
  );

  const setCookie = (value: string, autoLogin = true) => {
    if (autoLogin) {
      localStorage.setItem("cookie", value);
    } else {
      localStorage.removeItem("cookie");
    }
    cookie.value = value;
  };

  // 退出
  const exit = () => {
    cookie.value = "";
    loginStatus.value = false;
    localStorage.removeItem("cookie");
  };

  return { cookie, loginStatus, uid, setCookie, exit };
});
