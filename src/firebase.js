import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD3zp00XDxkiuKAvDjzkju4Q6k17gTNUws",
    authDomain: "projest-290c8.firebaseapp.com",
    projectId: "projest-290c8",
    storageBucket: "projest-290c8.appspot.com",
    messagingSenderId: "661303131310",
    appId: "1:661303131310:web:abd56b2d2b2749706f813f",
    measurementId: "G-F1J884RCN8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)