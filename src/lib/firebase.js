// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "parlimentofjustice-6354e.firebaseapp.com",
  databaseURL: "https://parlimentofjustice-6354e-default-rtdb.firebaseio.com",
  projectId: "parlimentofjustice-6354e",
  storageBucket: "parlimentofjustice-6354e.appspot.com",
  messagingSenderId: "307152016266",
  appId: "1:307152016266:web:8c8277dbdf3a5b4645ae73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
