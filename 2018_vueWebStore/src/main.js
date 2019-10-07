import "@babel/polyfill";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  //路由
  router,
  //共用DATA VUEX
  store,
  //渲染畫面
  render: h => h(App)
}).$mount("#app");
