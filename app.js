// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Demo Firebase configuration (ba ya bukatar asusu)
const firebaseConfig = {
  apiKey: "AIzaSyD-D3m2iUTJqH5x9bXYZ123456abcdefg",
  authDomain: "demo-alafuwa.firebaseapp.com",
  projectId: "demo-alafuwa",
  storageBucket: "demo-alafuwa.appspot.com",
  messagingSenderId: "123456789000",
  appId: "1:123456789000:web:abcdef1234567890",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Login form
const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("An shiga cikin nasara!");
      window.location.href = "dashboard.html"; // redirect
    })
    .catch((error) => {
      alert("Kuskure: " + error.message);
    });
});
