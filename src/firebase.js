import firebase from "firebase";

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfMAIovXvBVByqgRW0dW5CtLXkeggT024",
  authDomain: "projectdb-62871.firebaseapp.com",
  projectId: "projectdb-62871",
  storageBucket: "projectdb-62871.appspot.com",
  messagingSenderId: "696131410141",
  appId: "1:696131410141:web:7642ff28dcde28257ee334",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
