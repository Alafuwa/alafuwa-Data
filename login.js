// login.js
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful:", userCredential.user);
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Login failed: " + error.message);
    console.error(error);
  }
});
