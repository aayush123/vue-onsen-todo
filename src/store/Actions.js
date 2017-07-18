import services from '../DBServices/DBServicesIndex';

const actions = {
  addTaskAction(context, newTask) {
    context.commit('addTaskMutation', newTask);
    services.addTaskToDB(newTask);
  },
};

export default actions;
