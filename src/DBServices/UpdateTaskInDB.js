export default function (task, username, clientToken) {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log(`Dummy api called, task ${task.taskId} updated for ${username} with clientToken ${clientToken}. Filename: UpdateTaskInDB.js`);
  }, 5000);
}
