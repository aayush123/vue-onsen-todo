import store from '../store/index';

export default function (oldProjectTitle, newProjectTitle) {
  store.dispatch('updateProjectAction', { oldProjectTitle, newProjectTitle });
}
