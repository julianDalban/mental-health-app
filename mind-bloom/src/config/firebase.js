import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASKIQ-mEfJ4PomJMtSfJG-5Y9X5WLJ7zY",
  authDomain: "mindbloom-d66d8.firebaseapp.com",
  projectId: "mindbloom-d66d8",
  storageBucket: "mindbloom-d66d8.firebasestorage.app",
  messagingSenderId: "590102057351",
  appId: "1:590102057351:web:7f7de3bdee8e22d3928322",
  measurementId: "G-YT5G66L7FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);