import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXMNZqMUD3djYbVdmZVQiNgptWoIs4vNA",
  authDomain: "messenger-cl-4e219.firebaseapp.com",
  projectId: "messenger-cl-4e219",
  storageBucket: "messenger-cl-4e219.appspot.com",
  messagingSenderId: "546211994329",
  appId: "1:546211994329:web:a22db6685725f1edfa3cc8",
  measurementId: "G-20BNC7Q9MG",
});

const db = firebaseApp.firestore();

export { db };
