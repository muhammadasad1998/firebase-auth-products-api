// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAizKDDpSYCXOWwdrzY2u6oo8kam449heU",
  authDomain: "fir-authenticate-ead1b.firebaseapp.com",
  projectId: "fir-authenticate-ead1b",
  storageBucket: "fir-authenticate-ead1b.appspot.com",
  messagingSenderId: "910749734511",
  appId: "1:910749734511:web:202b2fcab424a9fa5a1f9a",
  measurementId: "G-8JZEPH2SY4"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase_app);


export {firebase_app,auth}