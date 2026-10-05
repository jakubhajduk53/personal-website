import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { preloadImages } from "./data/";

preloadImages();

createApp(App).use(router).mount("#app");
