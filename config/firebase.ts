import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration

const connectDB = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDAAcUkgszayqF41BhJCj_E0K-48p4HPwk",
    authDomain: "factory-e1cba.firebaseapp.com",
    projectId: "factory-e1cba",
    storageBucket: "factory-e1cba.appspot.com",
    messagingSenderId: "72487358442",
    appId: "1:72487358442:web:2f78de2b37316cfa1c6c93",
    databaseURL:
      "https://factory-e1cba-default-rtdb.europe-west1.firebasedatabase.app/",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
};

export default connectDB;
