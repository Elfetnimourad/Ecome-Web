import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnfkf0iVLeet3UhDjqIesMyJhq8rtwdoM",
  authDomain: "e-commerce--web.firebaseapp.com",
  projectId: "e-commerce--web",
  storageBucket: "e-commerce--web.firebasestorage.app",
  messagingSenderId: "58938285035",
  appId: "1:58938285035:web:2e7ebf4c4215e926eed7ae",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
