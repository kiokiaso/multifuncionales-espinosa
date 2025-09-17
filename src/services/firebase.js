// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqr2fzQ6nq2TVfnwRZlT6zryZjKIE710c",
  authDomain: "multifuncionales-add6a.firebaseapp.com",
  projectId: "multifuncionales-add6a",
  storageBucket: "multifuncionales-add6a.firebasestorage.app",
  messagingSenderId: "709320060128",
  appId: "1:709320060128:web:5c62f6d9fa947a23b53485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)