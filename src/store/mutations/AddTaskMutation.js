export default function (state, newTaskObj) {
  state.tasks.push(newTaskObj);
  window.localStorage.setItem('todoAppData', JSON.stringify(state));
}
