import Vue from 'vue';

export default function (state, projectTitle) {
  const newProjectsArr = [];
  const newTasksArr = [];
  state.projects.forEach((eachProject) => {
    if (eachProject !== projectTitle) {
      newProjectsArr.push(eachProject);
    }
  });
  state.tasks.forEach((eachTask) => {
    if (eachTask.projectName !== projectTitle) {
      newTasksArr.push(eachTask);
    }
  });
  Vue.set(state, 'tasks', newTasksArr);
  Vue.set(state, 'projects', newProjectsArr);
  if (state.activeProject === projectTitle) {
    Vue.set(state, 'activeProject', state.projects[0]);
  }
  window.localStorage.setItem('todoAppData', JSON.stringify(state));
}
