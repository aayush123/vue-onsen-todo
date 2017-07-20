import store from '../store/index';

export default function (newProjectTitle) {
  store.dispatch('createProjectAction', newProjectTitle);
}
