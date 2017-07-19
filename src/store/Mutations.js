import Vue from 'vue';

const mutations = {
  addTaskMutation(state, newTaskObj) {
    state.tasks.push(newTaskObj);
  },
  toggleTaskStatusMutation(state, taskId) {
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
  },
  updateTaskMutation(state, task) {
    const newTasksArr = [];
    for (let tasksIdx = 0; tasksIdx < state.tasks.length; tasksIdx += 1) {
      if (state.tasks[tasksIdx].taskId === task.taskId) {
        newTasksArr.push(task);
      } else {
        newTasksArr.push(state.tasks[tasksIdx]);
      }
    }
    Vue.set(state, 'tasks', newTasksArr);
  },
  deleteTaskMutation(state, taskId) {
    const newTasksArr = [];
    for (let tasksIdx = 0; tasksIdx < state.tasks.length; tasksIdx += 1) {
      if (state.tasks[tasksIdx].taskId !== taskId) {
        newTasksArr.push(state.tasks[tasksIdx]);
      }
    }
    Vue.set(state, 'tasks', newTasksArr);
  },
  deleteAllCompletedTasksMutation(state) {
    const newTasksArr = [];
    for (let tasksIdx = 0; tasksIdx < state.tasks.length; tasksIdx += 1) {
      if (!state.tasks[tasksIdx].completed) {
        newTasksArr.push(state.tasks[tasksIdx]);
      }
    }
    Vue.set(state, 'tasks', newTasksArr);
  },
};

export default mutations;
