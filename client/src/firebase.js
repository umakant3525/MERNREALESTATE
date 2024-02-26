// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-99764.firebaseapp.com",
  projectId: "real-estate-99764",
  storageBucket: "real-estate-99764.appspot.com",
  messagingSenderId: "324256416742",
  appId: "1:324256416742:web:6e2fe26bac9d66d4ad8c27"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 