import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyCsGewgNIxoicZ8QQXZNE1lFNjyv5B-W3k",
  authDomain: "project-9a048.firebaseapp.com",
  projectId: "project-9a048",
  storageBucket: "project-9a048.appspot.com",
  messagingSenderId: "569220788803",
  appId: "1:569220788803:web:22bae63407a42ff93b9af6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };