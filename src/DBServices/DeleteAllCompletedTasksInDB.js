export default function (username, clientToken) {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log(`Dummy api called, all completed tasks deleted for ${username} with clientToken ${clientToken}. Filename: DeleteAllCompletedTasksInDB.js`);
  }, 5000);
}
