// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqX7OBqntERxQcZNrXfniORScrD6rwrP0",
  authDomain: "task71-3ab09.firebaseapp.com",
  projectId: "task71-3ab09",
  storageBucket: "task71-3ab09.appspot.com",
  messagingSenderId: "135721050011",
  appId: "1:135721050011:web:746c0b36d004d4b70b0b3e",
  measurementId: "G-QVGQSC5HK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);