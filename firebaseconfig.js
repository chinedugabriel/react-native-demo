// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import Constants from 'expo-constants';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOYZwc-FINx6k_Bflg0Pr-TJIApFqbNnQ",
  authDomain: "fir-blog-a7e9d.firebaseapp.com",
  projectId: "fir-blog-a7e9d",
  storageBucket: "fir-blog-a7e9d.firebasestorage.app",
  messagingSenderId: "957677971415",
  appId: "1:957677971415:web:a88aa3478d19da2162cd92",
  measurementId: "G-S81CGHDT7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };
export { app };