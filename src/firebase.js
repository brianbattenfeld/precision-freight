import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg2DFpmLfRd0G8wNjaN-CkL9YvMRLF4jo",
  authDomain: "precision-freight.firebaseapp.com",
  projectId: "precision-freight",
  storageBucket: "precision-freight.appspot.com",
  messagingSenderId: "952039716559",
  appId: "1:952039716559:web:e75d5f151768bd22fd29ba"
};

// src/firebase.js
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }