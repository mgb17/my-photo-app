import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  getters: {
    blogPostsFeed(state) {
      return state.blogPosts.slice(0, 2);  //to get two newest posts
    },
    blogPostCards(state) {
      return state.blogPosts.slice(2, 6);
    }
  },
  mutations: {
    newBlogPost(state,payload) {
      state.blogHTML = payload;
      // console.log(state, state.blogHTML);
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview
    },
    toggleEditPost(state, payload) {
      state.editPost = payload
    },
    setBlog(state, payload) {
      state.blogTitle = payload.blogTitle,
      state.blogHTML = payload.blogHTML,
      state.blogPhotoFileURL = payload.blogCoverPhoto,
      state.blogPhotoName = payload.blogCoverPhotoName
    },
    filterBlogPost(state, payload) {
      state.blogPosts = state.blogPosts.filter(post => post.blogId !== payload)
    },
    updateUser(state, payload) {
      state.user = payload
    },
    setProfile(state, payload) {
      state.profileId = payload.id;
      state.profileEmail = payload.data().email;
      state.profileFirstName = payload.data().firstName;
      state.profileLastName = payload.data().lastName;
      state.profileUsername = payload.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload
    },
    changeLastName(state, payload) {
      state.profileLastName = payload
    },
    changeUsername(state, payload) {
      state.profileUsername = payload
    },
  },
  actions: {
    async getUser({commit}) {
      const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfile", dbResults);
      commit("setProfileInitials");
      console.log(dbResults)
    },
    async getPost ({state }) {
      const dataBase = await db.collection("blogPosts").orderBy('date', 'desc');
      const dbResults = await dataBase.get();
      dbResults.forEach(doc => {
        if (!state.blogPosts.some(post => post.blogId === doc.id)) {
          const data = {
            blogId: doc.data().blogId,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
    },
    async updatePost({commit, dispatch}, payload ) {
      commit('filterBlogPost', payload);
      await dispatch("getPost");

    },
    async deletePost({commit}, payload) {
      const getPost = await db.collection('blogPosts').doc(payload);
      await getPost.delete();
      commit('filterBlogPost', payload)
    },
    async updateUserSettings({commit, state}) {
      const dataBase= await db.collection('users').doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("setProfileInitials");
    }
  },
  modules: {
  }
})
