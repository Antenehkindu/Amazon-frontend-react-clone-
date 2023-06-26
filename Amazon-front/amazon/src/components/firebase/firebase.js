// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj6VZIFarvkn4Nuc1E3RY_yJKfqAJ7P9E",
  authDomain: "frontend-clone-8caa5.firebaseapp.com",
  projectId: "frontend-clone-8caa5",
  storageBucket: "frontend-clone-8caa5.appspot.com",
  messagingSenderId: "993796762389",
  appId: "1:993796762389:web:a3db984803c123982b971c",
  measurementId: "G-NBKC1D74BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};