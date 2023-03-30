import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.min.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CustomComponent from "custom-util"

const vm = createApp(App).use(router).use(Antd).use(CustomComponent);
vm.mount('#app');
