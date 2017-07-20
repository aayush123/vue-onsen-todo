import DBservices from '../DBServices/DBServicesIndex';

const actions = {
  addTaskAction(context, newTask) {
    context.commit('addTaskMutation', newTask);
    DBservices.addTaskToDB(newTask, context.getters.usernameGetter, context.getters.clientTokenGetter);
  },
  toggleTaskStatusAction(context, taskId) {
    context.commit('toggleTaskStatusMutation', taskId);
    DBservices.toggleTaskStatusInDB(taskId, context.getters.usernameGetter, context.getters.clientTokenGetter);
  },
  updateTaskAction(context, task) {
    context.commit('updateTaskMutation', task);
    DBservices.updateTaskInDB(task, context.getters.usernameGetter, context.getters.clientTokenGetter);
  },
  deleteTaskAction(context, taskId) {
    context.commit('deleteTaskMutation', taskId);
    DBservices.deleteTaskInDB(taskId, context.getters.usernameGetter, context.getters.clientTokenGetter);
  },
  deleteAllCompletedTasksAction(context) {
    context.commit('deleteAllCompletedTasksMutation');
    DBservices.deleteAllCompletedTasksInDB(context.getters.usernameGetter, context.getters.clientTokenGetter);
  },
  createProjectAction(context, newProjectTitle) {
    context.commit('createProjectMutation', newProjectTitle);
    DBservices.createProjectInDB(newProjectTitle, context.getters.usernameGetter, context.getters.clientTokenGetter);
  },
  deleteProjectAction(context, projectTitle) {
    context.commit('deleteProjectMutation', projectTitle);
    DBservices.deleteProjectInDB(projectTitle, context.getters.usernameGetter, context.getters.clientTokenGetter);
  },
  updateProjectAction(context, { oldProjectTitle, newProjectTitle }) {
    context.commit('updateProjectMutation', { oldProjectTitle, newProjectTitle });
    DBservices.updateProjectInDB({ oldProjectTitle, newProjectTitle }, context.getters.usernameGetter, context.getters.clientTokenGetter);
  },
};

export default actions;
