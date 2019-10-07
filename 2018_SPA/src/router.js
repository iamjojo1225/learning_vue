import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Products from "./views/Products.vue";

import aboutContent from "@/components/aboutContent.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      component: About,
      children: [
        {
          path: "",
          component: () => import("@/components/aboutList.vue")
        },
        {
          path: ":id",
          component: aboutContent
        }
      ]
    },
    {
      path: "/products",
      name: "products",
      component: Products
    }
  ]
});
