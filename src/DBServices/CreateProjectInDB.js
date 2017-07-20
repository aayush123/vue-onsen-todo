export default function (newProjectTitle, username, clientToken) {
  // console.log(store.getters.dataLoadStatus);
  // console.log(newProjectTitle);
  setTimeout(() => {
    // eslint-disable-next-line
    console.log(`Dummy api called, project ${newProjectTitle} created to DB for ${username} with clientToken ${clientToken}. Filename: CreateProjectInDB.js`);
  }, 5000);
}
