// Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIkoJWeo5ogbqkXlzDiATbZTTX1uJYwd8",
  authDomain: "portfolio-jackd.firebaseapp.com",
  projectId: "portfolio-jackd",
  storageBucket: "portfolio-jackd.firebasestorage.app",
  messagingSenderId: "41747780560",
  appId: "1:41747780560:web:22ca9cf93c1f1712939fd5",
  measurementId: "G-YK25WCD3QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);