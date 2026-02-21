import { db, collection, getDocs } from "./firebase.js";

const container = document.getElementById("projects-container");

async function loadProjects() {
  container.innerHTML = "Loading projects...";

  const querySnapshot = await getDocs(collection(db, "projects"));

  container.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    const card = `
      <div class="project-card">
        <img src="${data.image}" />
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <a href="${data.github}" target="_blank">GitHub</a>
        <a href="${data.live}" target="_blank">Live</a>
      </div>
    `;

    container.innerHTML += card;
  });
}

loadProjects();
