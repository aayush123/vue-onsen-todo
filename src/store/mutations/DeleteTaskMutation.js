import Vue from 'vue';

export default function (state, taskId) {
  const newTasksArr = [];
  for (let tasksIdx = 0; tasksIdx < state.tasks.length; tasksIdx += 1) {
    if (state.tasks[tasksIdx].taskId !== taskId) {
      newTasksArr.push(state.tasks[tasksIdx]);
    }
  }
  Vue.set(state, 'tasks', newTasksArr);
}
