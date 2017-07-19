import store from '../store/index';

export default function () {
  store.dispatch('deleteAllCompletedTasksAction');
}
