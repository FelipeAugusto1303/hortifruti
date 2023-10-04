// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOX63O9CSJhtbW5xAFWkImbRcBSfmmV-I",
  authDomain: "hortifruti-c7d27.firebaseapp.com",
  projectId: "hortifruti-c7d27",
  storageBucket: "hortifruti-c7d27.appspot.com",
  messagingSenderId: "92248414208",
  appId: "1:92248414208:web:9ede339c2ed1601402e0e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
