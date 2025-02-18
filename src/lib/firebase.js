// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-af79b.firebaseapp.com",
  projectId: "reactchat-af79b",
  storageBucket: "reactchat-af79b.firebasestorage.app",
  messagingSenderId: "123231729626",
  appId: "1:123231729626:web:594437c008bd8de39eb2e3"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const storage = getStorage();





