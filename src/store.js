import { createStore } from 'vuex';

const state = {
  topic: '',
  items: [],
  filter: {
    filterBy: '',
    filterValue: '',
  },
};

const mutations = {
  UPDATE_KEY_SEARCH(state, topic) {
    state.topic = topic;
  },
  UPDATE_ITEMS(state, items) {
    state.items = items;
  },
  SET_FILTER(state, filter) {
    state.filter = filter;
  },
};

const actions = {
  setFilter({ commit }, filter) {
    commit('SET_FILTER', filter);
  },
};

const getters = {
  getFilter(state) {
    return state.filter;
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
