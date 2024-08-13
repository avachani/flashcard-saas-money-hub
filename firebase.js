// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT39lTtS-HTpy-eqthGflPrssdOBIT8MA",
  authDomain: "flashcard-saas-4f9ae.firebaseapp.com",
  projectId: "flashcard-saas-4f9ae",
  storageBucket: "flashcard-saas-4f9ae.appspot.com",
  messagingSenderId: "486759142179",
  appId: "1:486759142179:web:ea34d7aa6f044b1a8e3296",
  measurementId: "G-93F6EZ8M0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;