// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKMSU1I-bGPwicwI8NNkHK-GPfpVT2nCc",
  authDomain: "react-portfolio-d5ed9.firebaseapp.com",
  projectId: "react-portfolio-d5ed9",
  storageBucket: "react-portfolio-d5ed9.appspot.com",
  messagingSenderId: "600487254144",
  appId: "1:600487254144:web:d83f42d94129faf2442e65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth