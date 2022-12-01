import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./style/base.scss";
import "./style/setting.scss";
import "./style/element/index.scss";

createApp(App).use(createPinia()).use(router).mount("#app");
