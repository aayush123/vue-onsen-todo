import Vue from 'vue';

export default function (state, taskId) {
  const newTasksArr = [];
  for (let tasksIdx = 0; tasksIdx < state.tasks.length; tasksIdx += 1) {
    if (state.tasks[tasksIdx].taskId === taskId) {
      const toggleTask = state.tasks[tasksIdx];
      toggleTask.completed = !toggleTask.completed;
      newTasksArr.push(toggleTask);
    } else {
      newTasksArr.push(state.tasks[tasksIdx]);
    }
  }
  Vue.set(state, 'tasks', newTasksArr);
  window.localStorage.setItem('todoAppData', JSON.stringify(state));
}
