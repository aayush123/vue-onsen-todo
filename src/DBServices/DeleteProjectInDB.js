export default function (projectTitle, username, clientToken) {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log(`Dummy api called, project ${projectTitle} deleted for ${username} with clientToken ${clientToken}. Filename: DeleteProjectInDB.js`);
  }, 5000);
}
