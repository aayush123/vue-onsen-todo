import store from '../store/index';

export default function (taskId) {
  store.dispatch('deleteTaskAction', taskId);
}
