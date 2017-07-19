export default function (taskId, username, clientToken) {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log(`Dummy api called, status toggled for task ${taskId} for ${username} with clientToken ${clientToken}. Filename: ToggleTaskStatusInDB.js`);
  }, 5000);
}
