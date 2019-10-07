import "@babel/polyfill";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// eslint-disable-next-line no-unused-vars
// import $ from 'jquery';
// import 'bootstrap';
Vue.config.productionTip = true;

new Vue({
  router,
  store, //引入store(vuex)
  render: h => h(App)
}).$mount("#app");
