// Firebase v9 MODÜL

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANT7NZ3_XfI5NNMBTjazk9fwNwvmT8f64",
  authDomain: "monster-mc.firebaseapp.com",
  projectId: "monster-mc",
  storageBucket: "monster-mc.appspot.com",
  messagingSenderId: "50847572014",
  appId: "1:50847572014:web:af6ed69486a71607b37fbf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);