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
  // dataLoadStatus(appState) {
  //   return (test) => {
  //     let retVal;
  //     if (test) {
  //       retVal = !appState.dataLoaded;
  //     } else {
  //       retVal = appState.dataLoaded;
  //     }
  //     return retVal;
  //   };
  // },
};

export default getters;
