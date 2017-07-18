import store from '../store/index';

export default function (newTaskTitle) {
  const newTaskObj = {
    taskId: `T${Math.random().toString(16).slice(2)}`,
    projectName: store.getters.activeProjectGetter,
    taskTitle: newTaskTitle,
    completed: false,
  };
  store.dispatch('addTaskAction', newTaskObj);
}
