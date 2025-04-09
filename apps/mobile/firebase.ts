// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwUNzEAqHEfQGPhVcbl6E4x--UCJUmSag",
  authDomain: "remember-me-f0bfe.firebaseapp.com",
  projectId: "remember-me-f0bfe",
  storageBucket: "remember-me-f0bfe.firebasestorage.app",
  messagingSenderId: "111636003601",
  appId: "1:111636003601:web:43e17c4066482a40efaab0",
  measurementId: "G-YCTWW6TV2P",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
