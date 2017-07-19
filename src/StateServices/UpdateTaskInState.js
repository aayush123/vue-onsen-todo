import store from '../store/index';

export default function (task) {
  store.dispatch('updateTaskAction', task);
}
