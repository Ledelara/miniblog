// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChmjdJ_B1YnuvSw8_ylg16vfhbj4-vvGs",
  authDomain: "miniblog-ee533.firebaseapp.com",
  projectId: "miniblog-ee533",
  storageBucket: "miniblog-ee533.appspot.com",
  messagingSenderId: "944017164140",
  appId: "1:944017164140:web:b959a6ac52eace93d9d549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};