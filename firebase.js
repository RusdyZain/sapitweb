// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_XPTMUpoyDKL0LmJJ7KIotYOlmwVydiE",
  authDomain: "dashboard-sapit-f03c3.firebaseapp.com",
  projectId: "dashboard-sapit-f03c3",
  storageBucket: "dashboard-sapit-f03c3.appspot.com",
  messagingSenderId: "415660542777",
  appId: "1:415660542777:web:d4add552eae8dbe10436e8",
  measurementId: "G-LLHVYXYX7L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
