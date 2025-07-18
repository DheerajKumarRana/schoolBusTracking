// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore }_ from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE-8NdXbwXadEvKGIXTjvq8yQiPXKNpNo",
  authDomain: "school-bus-tracker-4b20c.firebaseapp.com",
  projectId: "school-bus-tracker-4b20c",
  storageBucket: "school-bus-tracker-4b20c.appspot.com",
  messagingSenderId: "226324789327",
  appId: "1:226324789327:web:19faaf22331c8f1dfed23a",
  measurementId: "G-27N9CFNGYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
