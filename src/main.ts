import { createApp } from "vue";
import { createPinia } from "pinia";
import naive from "naive-ui";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

export const INSTAGRAM = "judy_giera_studio";
export const INSTAGRAM_URL = "https://www.instagram.com/" + INSTAGRAM;
export const EMAIL = "judy@judygiera.com";
export const WENDY_URL = "https://www.wendywildsha.pe/";

const app = createApp(App);

app.use(naive);
app.use(createPinia());
app.use(router);

app.mount("#app");
