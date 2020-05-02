import Vue from 'vue';

export default {
  namespaced: true,
  state() {
    return {
      menu: [],
      levels: [],
      menu_is_visible: false,
    };
  },
  mutations: {
    SET_MENU(state, menu) {
      Vue.set(state, 'menu', menu);
      Vue.set(state, 'levels', [menu]);
    },
    SET_MENU_VISIBILITY(state, vilibility) {
      Vue.set(state, 'menu_is_visible', vilibility);
    },
    PUSH_NEXT_LEVEL(state, menu) {
      state.levels.push(menu);
    },
    PUSH_PREV_LEVEL(state) {
      state.levels.pop();
    },
  },
  getters: {
    GET_CURRENT_MENU(state) {
      return state.levels[state.levels.length - 1];
    },
    GET_DEPTH(state) {
      return state.levels.length;
    },
    GET_MENU_VISIBILITY(state) {
      return state.menu_is_visible;
    },
  },

};
