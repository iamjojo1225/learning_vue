//tools
import Vue from "vue";
import Router from "vue-router";
import Products from "./views/Products.vue";

import AboutHome from "./components/AboutHome.vue";
import AboutUs from "./components/AboutUS.vue";
import AboutYou from "./components/AboutYou.vue";

//呼叫 使用Router
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/about",
      // name: "abouts",
      /* alias 別名 */
      // alias: "/aabbout",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      children: [
        { path: "", component: AboutHome },
        { path: "us", name: "us", component: AboutUs },
        { path: "you", name: "you", component: AboutYou },
        {
          path: "both",
          name: "both",
          components: {
            x: AboutUs,
            y: AboutYou
          }
        }
      ]
    },
    {
      /* '/Products/:id?' 在':id'後加'?' 就可以使id可有可無， 網址沒帶參數，頁面均會顯示*/
      path: "/Products/:id?",
      name: "products",
      component: Products
    },
    {
      /* 轉址 必須放在最下面 */
      path: "/*",
      // path: '/aboutus',
      /* redirect 路徑 */
      redirect: "/about"
      /* 物件 */
      // redirect: { name: "about" }
      /* 涵式 */
      // redirect: (form)=>{
      //     return {name:'about'};
      // },
    }
  ]
});

// export default new Router({
//     routes: [
//         {
//             path: '/',
//             component: App,
//             children:[
//                 {
//                     path: "about",
//                     name: "about",
//                     component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
//                     children:[
//                         { path: '', component: AboutHome },
//                         { path: 'us', component: AboutUs },
//                         { path: 'you', component: AboutYou },
//                     ]
//                 },
//                 {path: 'Products/:id?', component: Products},
//                 /* '/Products/:id?' 在':id'後加'?' 就可以使id可有可無， 網址沒帶參數，頁面均會顯示*/
//             ]

//         }
//     ]
// });
