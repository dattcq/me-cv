import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYJJqCg-WzB0wqu8qyQ4kOmu2uyia0fso",
  authDomain: "me-tools-f94d3.firebaseapp.com",
  projectId: "me-tools-f94d3",
  storageBucket: "me-tools-f94d3.firebasestorage.app",
  messagingSenderId: "867583980346",
  appId: "1:867583980346:web:594fce7f4b07478f17d603",
  measurementId: "G-9BNWZCZ7TS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
