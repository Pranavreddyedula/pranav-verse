const user = localStorage.getItem("loggedUser");

const nav = document.createElement("div");
nav.style.background = "#02142a";
nav.style.padding = "12px 20px";
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.color = "white";

nav.innerHTML = `
<div style="font-weight:600;font-size:18px">
PRANAV Verse
</div>

<div>
${user ? `Welcome, <b>${user}</b>` : ""}

${user ? `<button id="logoutBtn"
style="margin-left:15px;padding:6px 12px;background:#ff4d4d;border:none;border-radius:6px;color:white;cursor:pointer">
Logout
</button>` : ""}
</div>
`;

document.body.prepend(nav);

const btn = document.getElementById("logoutBtn");
if(btn){
btn.onclick = () => {
localStorage.removeItem("loggedUser");
alert("Logged out successfully");
window.location.href = "login.html";
};
}
