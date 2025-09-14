import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6V6OBAKz-74lzWGRlkWvj8RhDnc7kOQI",
  authDomain: "proyectofinal-moravec.firebaseapp.com",
  projectId: "proyectofinal-moravec",
  storageBucket: "proyectofinal-moravec.firebasestorage.app",
  messagingSenderId: "143930751417",
  appId: "1:143930751417:web:ee768a048c0d4927f15e68",
  measurementId: "G-74RHJX605N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);