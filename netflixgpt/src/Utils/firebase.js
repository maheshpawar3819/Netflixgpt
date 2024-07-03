// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ5sQYZOnAkAjQtjnjL5VFfo87Au9DbV4",
  authDomain: "netflixapp-21651.firebaseapp.com",
  projectId: "netflixapp-21651",
  storageBucket: "netflixapp-21651.appspot.com",
  messagingSenderId: "96821670768",
  appId: "1:96821670768:web:698bf0a666218d85c495b5",
  measurementId: "G-7BDWYX3KXG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); //whenever i will need auth just imported from this
