// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCCcqfNB06dMwNUnOZSQNZXFLz6d_tK7VA",
  authDomain: "fir-auth-1132-b343c.firebaseapp.com",
  projectId: "fir-auth-1132-b343c",
  storageBucket: "fir-auth-1132-b343c.appspot.com",
  messagingSenderId: "119370691184",
  appId: "1:119370691184:web:82397de7ee67651013bab5",
  measurementId: "G-65FBH8J551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth}