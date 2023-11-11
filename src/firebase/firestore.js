
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDN1potxvfqez5BsEgTj4fWsVZRmCpUZUE",
  authDomain: "harchi-59991.firebaseapp.com",
  projectId: "harchi-59991",
  storageBucket: "harchi-59991.appspot.com",
  messagingSenderId: "778193506181",
  appId: "1:778193506181:web:e355b9ced7652eca243eec",
  measurementId: "G-BZCHVZVGHV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const AUTH= getAuth(app);