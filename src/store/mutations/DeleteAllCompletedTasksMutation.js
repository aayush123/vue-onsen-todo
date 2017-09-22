import Vue from 'vue';

export default function (state) {
  const newTasksArr = [];
  for (let tasksIdx = 0; tasksIdx < state.tasks.length; tasksIdx += 1) {
    if (!state.tasks[tasksIdx].completed || state.tasks[tasksIdx].projectName !== state.activeProject) {
      newTasksArr.push(state.tasks[tasksIdx]);
    }
  }
  Vue.set(state, 'tasks', newTasksArr);
  window.localStorage.setItem('todoAppData', JSON.stringify(state));
}
