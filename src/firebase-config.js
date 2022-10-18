// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhJkG8Vwf0lQsaUnwdTHod3-7r3hFIfok",
  authDomain: "ecyc-210eb.firebaseapp.com",
  projectId: "ecyc-210eb",
  storageBucket: "ecyc-210eb.appspot.com",
  messagingSenderId: "275633978509",
  appId: "1:275633978509:web:6e709f7333ae33fc1336c4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
