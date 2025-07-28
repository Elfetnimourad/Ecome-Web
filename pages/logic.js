import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
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
const provider = new GoogleAuthProvider();

//init services
const db = getFirestore();
//get Collection
const colDoc = collection(db, "messages");

const loginForm = document.querySelector(".login-card");
loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm?.email.value;
  const password = loginForm?.password.value;
  signInWithEmailAndPassword(auth, email, password).then((cred) => {
    console.log(cred.user.displayName);

    window.location.href = "../dist/index.html";
    console.log("User Created:", cred.user);
    alert(`Hi ${cred.user.displayName},Welcome To Our Store`);
  });
});

//Sign Up Part
const signupForm = document.querySelector(".sign-up-card");
signupForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const displayName = signupForm.username.value;
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("Created User:", cred.user);
      window.location.href = "login.html";

      const user = cred.user;
      return updateProfile(user, {
        displayName: displayName,
      });
    })
    .catch((err) => console.log(err.message));
});
const googleSignUp = document.querySelector(".google-sigup");
googleSignUp?.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      window.location.href = "../dist/index.html";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
const user = auth.currentUser;
function updatedProfile(user) {
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    document.getElementsByClassName("avatar").src = photoURL;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    updatedProfile(user);
    const uid = user.uid;
    return uid;
  } else {
    alert("You are Log Out");
    // window.location.href = ''
  }
});
