// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnKUfunWkL-Xl_-CXzusTcvEbfGYSCo0o",
  authDomain: "netflix-tv-gpt.firebaseapp.com",
  projectId: "netflix-tv-gpt",
  storageBucket: "netflix-tv-gpt.appspot.com",
  messagingSenderId: "113831195465",
  appId: "1:113831195465:web:52007d55442ab144436098",
  measurementId: "G-C0Q3D79XV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();