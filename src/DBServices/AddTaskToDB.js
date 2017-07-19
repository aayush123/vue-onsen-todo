export default function (newTaskObj, username, clientToken) {
  // console.log(store.getters.dataLoadStatus);
  // console.log(newTaskObj);
  setTimeout(() => {
    // eslint-disable-next-line
    console.log(`Dummy api called, ${newTaskObj.taskTitle} added to DB for ${username} with clientToken ${clientToken}. Filename: AddTaskToDB.js`);
  }, 5000);
}
