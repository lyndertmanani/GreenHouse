// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYmJEitBL_sY-e9r-fxT39zgbXblUU6SI",
  authDomain: "greenhouse-55921.firebaseapp.com",
  databaseURL: "https://greenhouse-55921-default-rtdb.firebaseio.com",
  projectId: "greenhouse-55921",
  storageBucket: "greenhouse-55921.appspot.com",
  messagingSenderId: "311589339610",
  appId: "1:311589339610:web:b576e3724f094ddcd4c0e3",
  measurementId: "G-XTBBYRF8L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("signup-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create a new user using Firebase Authentication
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);
      // You can redirect or perform other actions here
    })
    .catch((error) => {
      // Handle sign-up error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-up error:", errorMessage);
    });
});
