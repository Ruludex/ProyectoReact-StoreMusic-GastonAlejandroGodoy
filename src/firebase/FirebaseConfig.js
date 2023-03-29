// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkknbsMOf6kC7vArf6v0a9fI6Vnw6YMf0",
  authDomain: "reactproyectdata.firebaseapp.com",
  projectId: "reactproyectdata",
  storageBucket: "reactproyectdata.appspot.com",
  messagingSenderId: "411959576936",
  appId: "1:411959576936:web:c541d6d8da515d4469eedd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
