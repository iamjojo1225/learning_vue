import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const LESSONS_URL = "https://hehvyhlf55ywzdb02uri5q-on.drv.tw/www/HILSKIO_lessons_data.json";

export default new Vuex.Store({
  state: {
    lessons: [],
    cart: []
  },
  getters: {
    // 判斷是否加入購物車 1:有 -1:沒有
    // isLessonInCart: state => lesson =>
    //   state.cart.findIndex(({
    //     id
    //   }) => id === lesson.id) !== -1
    isLessonInCart(state) {
      return function(lesson) {
        return (
          state.cart.findIndex(({ id }) => {
            return id == lesson.id;
          }) != -1
        );
      };
    }
  },
  //同步操作
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons;
    },
    addToCart(state, lesson) {
      //加入或移除 購物車
      if (!this.getters.isLessonInCart(lesson)) {
        state.cart.push(lesson);
      } else {
        state.cart.pop(lesson);
      }
    },
    resetCart(state) {
      // console.log("清空");
      state.cart = [];
    }
  },
  //非同步操作
  actions: {
    fetchLessons({ commit }) {
      //帶入commit(function)
      //ES6 fetch(相似Ajax，但有promise的概念)
      fetch(LESSONS_URL)
        .then(rs => rs.json())
        .then(rs => {
          commit("setLessons", rs);
        });
    }
  }
});
