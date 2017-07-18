import Vue from 'vue';
import Vuex from 'vuex';
import getters from './Getters';
import mutations from './Mutations';
import state from './State';
import actions from './Actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
