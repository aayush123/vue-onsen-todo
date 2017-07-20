export default function ({ oldProjectTitle, newProjectTitle }, username, clientToken) {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log(`Dummy api called, project ${oldProjectTitle} renamed to ${newProjectTitle} for ${username} with clientToken ${clientToken}. Filename: UpdateProjectInDB.js`);
  }, 5000);
}
