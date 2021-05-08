import { createStore } from 'vuex';

const state = {
  topic: '',
  items: [],
  filter: {
    filterBy: '',
    filterValue: '',
  },
  currentPage: 1,
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
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },
};

const actions = {
  setFilter({ commit }, filter) {
    commit('SET_FILTER', filter);
  },
  setCurrentPage({ commit }, page) {
    commit('SET_CURRENT_PAGE', page);
  },
};

const getters = {
  getFilter(state) {
    return state.filter;
  },
  getCurrentPage(state) {
    return state.currentPage;
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
