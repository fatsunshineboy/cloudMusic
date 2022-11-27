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
  // console.log(localStorage.getItem("token"));
  next();
});

export default router;
