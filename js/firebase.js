// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyDAqqurQ5zb1iWdcnrFJp6XCgNE3YJfYKA",
  authDomain: "pranav-verse.firebaseapp.com",
  projectId: "pranav-verse",
  storageBucket: "pranav-verse.firebasestorage.app",
  messagingSenderId: "219763606325",
  appId: "1:219763606325:web:05178480d6655a3ceec27c"
};

// Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
