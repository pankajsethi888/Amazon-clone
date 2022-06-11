import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt_u2pXj3W-FDDJgUHOQacZ_UCbSiUCsM",
  authDomain: "clone-6d03e.firebaseapp.com",
  projectId: "clone-6d03e",
  storageBucket: "clone-6d03e.appspot.com",
  messagingSenderId: "352358887876",
  appId: "1:352358887876:web:ac256f1d4c7b599de6b491",
  measurementId: "G-5D9CNZMTN8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
