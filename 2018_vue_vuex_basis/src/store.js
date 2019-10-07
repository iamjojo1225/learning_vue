/*
** 1.app層級的狀態應該集中到 store 裡面
** 2.mutations 是改變 state 的唯一方法，並且是同步的
** 3.非同步操作都放在 actions 裡面
*/
/* eslint-disable no-console */ //eslint 無效 console

import Vue from "vue";
import Vuex from "vuex";

const LESSONS_URL =
  "https://hehvyhlf55ywzdb02uri5q-on.drv.tw/www/HILSKIO_lessons_data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  //相似data(資料)
  state: {
    count: 0,
    lessons: []
  },
  //相似methods(同步)
  //mutations 是唯一改變state的方法
  //mutations 對應 commit
  mutations: {
    addCount(state) {
      //state作為參數，傳入，進行修改
      state.count++;

      // //新增參數 (使用Vue.set)
      // Vue.set(state , 'text' , 'test123');
      // console.log("測試資料:", state);
    },
    setLessons(state, lessons) {
      state.lessons = lessons;
      // console.log("get lessons: ", state.lessons);
    }
  },
  //相似computed
  getters: {
    //範例:若count被3整除,則變成true
    count_3_bloon(state) {
      console.log("run");
      if (state.count % 3 == 0) {
        return true;
      } else {
        return false;
      }
    },
    //說明:若要取得getters中的數值，請將getters帶入第二參數
    count_3_bloon_test(state, getters) {
      return getters.count_3_bloon;
      //其他地方沒有呼此function
    },
    //說明:getters也可回傳涵式
    chick_count_3(state) {
      return id => {
        return (state.count = id ? "等於此ID" : "不等於此ID");
      };
      //其他地方沒有呼此function
    }
  },
  //相似methods(非同步)
  //actions無法直接修改state,只能發出mutations，使用commit呼mutations中的function，並傳入值過去
  //Todo:發出mutations，是使用commit
  //actions 對應 dispatch
  //actions 中可 return promise ，非同步操作
  actions: {
    fetchLessons({ commit }) {//context包含: commit, dispatch, getters, rootGetters, rootState, state
      fetch(LESSONS_URL)
        .then(rs => rs.json())
        .then(rs => {
          commit("setLessons", rs);
        });
    }
  }
});
