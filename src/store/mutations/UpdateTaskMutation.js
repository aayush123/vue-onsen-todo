import Vue from 'vue';

export default function (state, task) {
  const newTasksArr = [];
  for (let tasksIdx = 0; tasksIdx < state.tasks.length; tasksIdx += 1) {
    if (state.tasks[tasksIdx].taskId === task.taskId) {
      newTasksArr.push(task);
    } else {
      newTasksArr.push(state.tasks[tasksIdx]);
    }
  }
  Vue.set(state, 'tasks', newTasksArr);
  window.localStorage.setItem('todoAppData', JSON.stringify(state));
}
