import Vue from "vue";
import App from "./App.vue";
//要import router，才能使用vue router
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
