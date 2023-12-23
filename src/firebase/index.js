// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnqUMkASx0LHLXxFZeGRDPNencTmzCdSM",
  authDomain: "mkrvue2.firebaseapp.com",
  projectId: "mkrvue2",
  storageBucket: "mkrvue2.appspot.com",
  messagingSenderId: "721204071628",
  appId: "1:721204071628:web:7eedb9298d06ea25960669",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default { frApp: app, db };
