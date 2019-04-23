import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
    status: false
  },

  getters: {
    user(state) {
      return state.user;
    },
    isSignedIn(state) {
      return state.status;
    }
  },

  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; // firebaseが返したユーザー情報
    },
    onUserStatusChanged(state, status) {
      state.status = status; // ログインしているかどうか true or false
    }
  },

  actions: {}
});

export default store;
