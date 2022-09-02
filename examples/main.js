import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import { MindEditor } from "../packages"; // 按需引入

const app = createApp(App)
/* eslint-disable */
 for (const iconName in ElementPlusIconsVue) {
   app.component(iconName, ElementPlusIconsVue[iconName]);
 }

app.use(ElementPlus).use(MindEditor).mount("#app");