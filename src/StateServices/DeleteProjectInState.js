import store from '../store/index';

export default function (projectTitle) {
  store.dispatch('deleteProjectAction', projectTitle);
}
