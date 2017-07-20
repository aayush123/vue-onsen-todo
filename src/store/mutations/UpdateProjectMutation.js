import Vue from 'vue';

export default function (state, { oldProjectTitle, newProjectTitle }) {
  const newProjectsArr = [];
  const newTasksArr = [];
  state.projects.forEach((eachProject) => {
    if (eachProject === oldProjectTitle) {
      newProjectsArr.push(newProjectTitle);
    } else {
      newProjectsArr.push(eachProject);
    }
  });
  state.tasks.forEach((eachTask) => {
    if (eachTask.projectName === oldProjectTitle) {
      const newTask = Object.assign({}, eachTask, { projectName: newProjectTitle });
      newTasksArr.push(newTask);
    } else {
      newTasksArr.push(eachTask);
    }
  });
  Vue.set(state, 'tasks', newTasksArr);
  Vue.set(state, 'projects', newProjectsArr);
  if (state.activeProject === oldProjectTitle) {
    Vue.set(state, 'activeProject', newProjectTitle);
  }
  window.localStorage.setItem('todoAppData', JSON.stringify(state));
}
