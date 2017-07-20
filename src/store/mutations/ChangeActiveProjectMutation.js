import Vue from 'vue';

export default function (state, projectTitle) {
  Vue.set(state, 'activeProject', projectTitle);
  window.localStorage.setItem('todoAppData', JSON.stringify(state));
}
