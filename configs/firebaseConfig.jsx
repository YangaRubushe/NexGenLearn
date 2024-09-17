// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "nexgen-learn.firebaseapp.com",
  projectId: "nexgen-learn",
  storageBucket: "nexgen-learn.appspot.com",
  messagingSenderId: "472064046644",
  appId: "1:472064046644:web:28889d56254081bfd97c61",
  measurementId: "G-6DY4ZZSPQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)