import Vue from 'vue';
import Vuex from 'vuex';
// import $ from 'jquery'

Vue.use(Vuex);

const state = {
  dataLoaded: false,
  projects: {},
};

const mutations = {};

const getters = {
  dataLoadStatus: appState => appState.dataLoaded,
  // dataLoadStatus(appState) {
  //   return (test) => {
  //     let retVal;
  //     if (test) {
  //       retVal = !appState.dataLoaded;
  //     } else {
  //       retVal = appState.dataLoaded;
  //     }
  //     return retVal;
  //   };
  // },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
