// Firebase configuration
// IMPORTANT: Replace the placeholders with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyB47eD9_fd2ZgJJ-IbktdX8Du0-dc8yiAw",
  authDomain: "dsr-b4972.firebaseapp.com",
  projectId: "dsr-b4972",
  storageBucket: "dsr-b4972.firebasestorage.app",
  messagingSenderId: "221399368252",
  appId: "1:221399368252:web:514cdcae73cd4319097939" // Extracted from mobilesdk_app_id
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, collection, query, where, getDocs, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, doc, getDoc, setDoc, collection, query, where, getDocs, deleteDoc };
