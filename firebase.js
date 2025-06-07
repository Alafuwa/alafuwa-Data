// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN7LRFzF5nJVgL...",
  authDomain: "alafuwa-data-app.firebaseapp.com",
  projectId: "alafuwa-data-app",
  storageBucket: "alafuwa-data-app.appspot.com",
  messagingSenderId: "851776851925",
  appId: "1:851776851925:web:f0f08f122d32665f3ed413",
  measurementId: "G-CQCSWPPQXR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };