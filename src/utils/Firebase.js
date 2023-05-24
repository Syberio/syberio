// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/functions";
import "firebase/auth";
import { getPerformance } from "firebase/performance";



// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCI6hieROQjO7c3RlGo-llhxgeGhi1a0l8",
  authDomain: "syberio-98e70.firebaseapp.com",
  projectId: "syberio-98e70",
  storageBucket: "syberio-98e70.appspot.com",
  messagingSenderId: "74283928098",
  appId: "1:74283928098:web:82723d08540d8e713ad87b",
  measurementId: "G-ZG4C8FQV7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);
