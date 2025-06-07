// dashboard.js
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // User is not logged in, redirect to register/login page
    window.location.href = "register.html";
  }
});

// Logout button functionality (optional)
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("Logged out");
    window.location.href = "register.html";
  });
});