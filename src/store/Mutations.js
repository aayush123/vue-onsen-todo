import addTaskMutation from './mutations/AddTaskMutation';
import toggleTaskStatusMutation from './mutations/ToggleTaskStatusMutation';
import updateTaskMutation from './mutations/UpdateTaskMutation';
import deleteTaskMutation from './mutations/DeleteTaskMutation';
import deleteAllCompletedTasksMutation from './mutations/DeleteAllCompletedTasksMutation';
import createProjectMutation from './mutations/CreateProjectMutation';
import changeActiveProjectMutation from './mutations/ChangeActiveProjectMutation';
import deleteProjectMutation from './mutations/DeleteProjectMutation';
import updateProjectMutation from './mutations/UpdateProjectMutation';
import hydrateState from './mutations/HydrateState';
import changeActiveIndexMutation from './mutations/ChangeActiveIndexMutation';

const mutations = {
  addTaskMutation,
  toggleTaskStatusMutation,
  updateTaskMutation,
  deleteTaskMutation,
  deleteAllCompletedTasksMutation,
  createProjectMutation,
  changeActiveProjectMutation,
  deleteProjectMutation,
  updateProjectMutation,
  hydrateState,
  changeActiveIndexMutation,
};

export default mutations;
