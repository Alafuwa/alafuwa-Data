// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN7LRFzF5nJVgLPA8j-ie4WO...", // ← maye gurbin da cikakke
  authDomain: "alafuwa-data-app.firebaseapp.com",
  projectId: "alafuwa-data-app",
  storageBucket: "alafuwa-data-app.appspot.com",
  messagingSenderId: "851776851025",
  appId: "1:851776851025:web:xxxxxxxxxxxxxxxxxx" // ← cike wannan idan bai cika ba
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);