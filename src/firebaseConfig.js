import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAXIpsfLTKtVR3pL32wF1GCetqq2fstKE",
  authDomain: "iexprex.firebaseapp.com",
  projectId: "iexprex",
  storageBucket: "iexprex.appspot.com",
  messagingSenderId: "1080237927970",
  appId: "1:1080237927970:web:3f322d6e75dd3d78cbe47b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);