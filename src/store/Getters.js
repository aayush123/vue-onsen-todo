const getters = {
  dataLoadStatus: appState => appState.dataLoaded,
  activeProjectGetter: appState => appState.activeProject,
  tasksForActiveProject(appState) {
    return (activeProject) => {
      const activeProjectTasks = [];
      appState.tasks.forEach((eachTask) => {
        if (eachTask.projectName === activeProject) {
          activeProjectTasks.push(eachTask);
        }
      });
      return activeProjectTasks;
    };
  },
  usernameGetter: appState => appState.username,
  clientTokenGetter: appState => appState.clientToken,
};

export default getters;
