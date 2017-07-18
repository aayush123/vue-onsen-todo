export default function (newTaskObj) {
  // console.log(store.getters.dataLoadStatus);
  // console.log(newTaskObj);
  setTimeout(() => {
    // eslint-disable-next-line
    console.log(`Dummy api called, ${newTaskObj.taskTitle} added to DB. Filename: AddTaskToDB.js`);
  }, 5000);
}
