import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA8LEdnEwjUAWGY4C1CWWGNyt_Xw8bPvaE",
  authDomain: "book-database-f6bcb.firebaseapp.com",
  projectId: "book-database-f6bcb",
  storageBucket: "book-database-f6bcb.appspot.com",
  messagingSenderId: "633891050493",
  appId: "1:633891050493:web:03e32d0cd91a903a52bf94",
  measurementId: "G-M2292QMMNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Database = getDatabase(app);