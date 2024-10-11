import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA_cU3qsXeTKcmMAxCfY_bLQshmE2yWB10",
  authDomain: "laara-b0e55.firebaseapp.com",
  projectId: "laara-b0e55",
  storageBucket: "laara-b0e55.appspot.com",
  messagingSenderId: "884955983774",
  appId: "1:884955983774:web:c21cd747288504c521f08f",
  measurementId: "G-CR6R4S0Z5X"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);