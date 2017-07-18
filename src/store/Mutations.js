const mutations = {
  addTaskMutation(state, newTaskObj) {
    state.tasks.push(newTaskObj);
  },
};

export default mutations;
