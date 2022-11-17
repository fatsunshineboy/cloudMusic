import {
  createRouter,
  createWebHashHistory,
  // createWebHistory,
} from "vue-router";

import routes from "./route";

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
});

export default router;
