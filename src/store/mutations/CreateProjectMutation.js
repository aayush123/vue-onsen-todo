import Vue from 'vue';

export default function (state, newProjectTitle) {
  state.projects.push(newProjectTitle);
  Vue.set(state, 'activeProject', newProjectTitle);
  window.localStorage.setItem('todoAppData', JSON.stringify(state));
}
