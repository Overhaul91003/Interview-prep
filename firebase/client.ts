// Import the functions you need from the SDKs you need
import { initializeApp ,getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnoXrmyeLg9NNdVMQKqD7aaswoiuUkyD4",
  authDomain: "skillify-a5255.firebaseapp.com",
  projectId: "skillify-a5255",
  storageBucket: "skillify-a5255.firebasestorage.app",
  messagingSenderId: "237299264392",
  appId: "1:237299264392:web:edcb7c0691c311bd65683d",
  measurementId: "G-XB7SNC61B3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp() ;

export const auth = getAuth(app);
export const db = getFirestore(app) ;