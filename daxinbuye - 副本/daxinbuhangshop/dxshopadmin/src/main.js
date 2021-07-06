import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 配置 全局初始化样式
import '@/assets/css/reset.scss';
//粒子特效
import VueParticles from 'vue-particles'  
Vue.use(VueParticles) 
//引入编程式导航
import '@/utils/mixin.js'
//富文本
import VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
