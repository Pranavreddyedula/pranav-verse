import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const container = document.getElementById("projects-container");

async function loadProjects() {
  container.innerHTML = "Loading projects...";

  const querySnapshot = await getDocs(collection(db, "projects"));

  container.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;   // ⭐ IMPORTANT

    const card = `
      <div class="project-card">
        <img src="${data.image}" style="width:100%;border-radius:10px" />

        <h3>${data.title}</h3>
        <p>${data.description || ""}</p>

        <a href="view-project.html?id=${id}">
          <button>Open Project</button>
        </a>

        <br><br>

        <a href="${data.github}" target="_blank">GitHub</a>
        <a href="${data.live}" target="_blank">Live Demo</a>
      </div>
    `;

    container.innerHTML += card;
  });
}

loadProjects();
