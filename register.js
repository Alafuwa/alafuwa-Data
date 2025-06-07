import { auth } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

document.getElementById("registerBtn").addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      message.textContent = "✅ Registered successfully!";
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      message.textContent = "❌ " + error.message;
    });
});

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      message.textContent = "✅ Logged in successfully!";
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      message.textContent = "❌ " + error.message;
    });
});