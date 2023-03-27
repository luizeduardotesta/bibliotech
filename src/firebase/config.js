// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR1vhH37byQijaaCT6lJLNepar-YHWLyM",
  authDomain: "bibliotech-lets.firebaseapp.com",
  projectId: "bibliotech-lets",
  storageBucket: "bibliotech-lets.appspot.com",
  messagingSenderId: "586430646728",
  appId: "1:586430646728:web:bc3dfe79791d57cba258fd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
