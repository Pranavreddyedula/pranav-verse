// ===== ADMIN SECRET KEY =====
// Change this to anything you want (remember it!)
const ADMIN_PASSWORD = "pranav@admin123";

// Check login
function checkAdmin(){
  const pass = localStorage.getItem("admin");
  if(pass !== ADMIN_PASSWORD){
    window.location.href = "login.html";
  }
}

// Login function
function login(){
  const entered = document.getElementById("password").value;

  if(entered === ADMIN_PASSWORD){
    localStorage.setItem("admin", ADMIN_PASSWORD);
    window.location.href = "upload.html";
  }else{
    alert("Wrong password");
  }
}

// Logout
function logout(){
  localStorage.removeItem("admin");
  window.location.href = "login.html";
}
