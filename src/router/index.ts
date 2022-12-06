import {
  createRouter,
  createWebHashHistory,
  // createWebHistory,
} from "vue-router";

import routes from "./route/route";

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(localStorage.getItem("cookie"));
  next();
});

// router.afterEach((to, from) => {
//   // to and from are both route objects.
//   let count = Number.parseInt(
//     sessionStorage.getItem("hrefHistoryCount") || "0"
//   );
//   if (!count) {
//     sessionStorage.setItem("hrefHistoryCount", JSON.stringify(1));
//     sessionStorage.setItem("hrefNow", JSON.stringify(1));
//   } else {
//     sessionStorage.setItem("hrefHistoryCount", JSON.stringify(count + 1));
//   }
// });
export default router;
