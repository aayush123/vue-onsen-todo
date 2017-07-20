import store from '../store/index';

export default function (projectTitle) {
  store.commit('changeActiveProjectMutation', projectTitle);
}
