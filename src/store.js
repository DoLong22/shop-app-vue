import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{ id: 'abc123', name:'Do Duc Long'},
    keySearch:'',
    items:[]
  },
  mutations: {
      UPDATE_KEY_SEARCH(state,keySearch){
          state.keySearch = keySearch;
      },
      UPDATE_ITEMS(state,items){
          state.items = items;
      }
  },
  actions:{}
})

