import store from '../store/index';

export default function (newIndex) {
  store.commit('changeActiveIndexMutation', newIndex);
}
