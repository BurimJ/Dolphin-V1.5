import { initViews } from "./view-router.js";

window.addEventListener("load", initApp);

const endpoint =
  "https://semesterprojekt-790e8-default-rtdb.europe-west1.firebasedatabase.app";

function initApp() {
  console.log("app.js is running 🎉");
  initViews();
  showMemberGrid();
  showCompetitorGrid();
  document
    .querySelector("#btn__add-member")
    .addEventListener("click", showAddMemberDialog);
  document
    .querySelector("#btn__add-competitor")
    .addEventListener("click", showAddCompetitorDialog);
  document
    .querySelector("#form-for-member")
    .addEventListener("submit", addMemberClicked);
  document
    .querySelector("#form-for-competitor")
    .addEventListener("submit", addCompetitorClicked);
  document
    .querySelector("#form-update-member")
    .addEventListener("submit", updateMemberClicked);
  document
    .querySelector("#form-update-competitor")
    .addEventListener("submit", updateCompetitorClicked);
  document
    .querySelector("#form-delete-post")
    .addEventListener("submit", deletePostClicked);
}

function prepareData(dataObject) {
  const array = [];
  for (const key in dataObject) {
    const object = dataObject[key];
    object.id = key;
    array.push(object);
  }
  return array;
}

async function showMemberGrid() {
  members = await getMembers();
  showMember(members);
}

async function showCompetitorGrid() {
  competitors = await getCompetitors();
  showCompetitor(competitors);
}

const toggleBtn = document.querySelector(".btn-toggle");
const sidebarArea = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebarArea.classList.toggle("toggle");
});
