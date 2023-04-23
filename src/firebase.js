import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCxXu5d2dB_QMe8JEdJq0HjJkrpvsoXQBA",
    authDomain: "projest-lewyy.firebaseapp.com",
    projectId: "projest-lewyy",
    storageBucket: "projest-lewyy.appspot.com",
    messagingSenderId: "86960042542",
    appId: "1:86960042542:web:08a20a9fdae740f728e5bf",
    measurementId: "G-QDG3V3P7S0"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)