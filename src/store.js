import { createStore } from 'vuex'

export default createStore({
  state: {
    topic:'',
    items:[]
  },
  mutations: {
      UPDATE_KEY_SEARCH(state,topic){
          state.topic = topic;
      },
      UPDATE_ITEMS(state,items){
          state.items = items;
      }
  },
  actions:{}
})

