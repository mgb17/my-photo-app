import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "number 1", blogCoverPhoto: "1", blogDate: "14 June 2021"},
      { blogTitle: "number 2", blogCoverPhoto: "stock-2", blogDate: "14 June 2021"},
      { blogTitle: "number 3", blogCoverPhoto: "stock-3", blogDate: "14 June 2021"},
      { blogTitle: "number 4", blogCoverPhoto: "stock-4", blogDate: "14 June 2021"}
    ],
    editPost: null
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
    }
    },
  actions: {
  },
  modules: {
  }
})
