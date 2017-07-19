export default function (taskId, username, clientToken) {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log(`Dummy api called, task ${taskId} deleted for ${username} with clientToken ${clientToken}. Filename: DeleteTaskInDB.js`);
  }, 5000);
}
