import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-2000a.firebaseapp.com",
  projectId: "reactchat-2000a",
  storageBucket: "reactchat-2000a.appspot.com",
  messagingSenderId: "25306508465",
  appId: "1:25306508465:web:0d97e3f12b1012394f0690"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
