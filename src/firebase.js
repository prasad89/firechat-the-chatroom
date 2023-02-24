import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAz_bXxZ8VuC2XatEAbS_-F3Sj2b9b-aYs",
  authDomain: "firechat-4460.firebaseapp.com",
  projectId: "firechat-4460",
  storageBucket: "firechat-4460.appspot.com",
  messagingSenderId: "346644181210",
  appId: "1:346644181210:web:3a363b796c43a95c6375e3",
  measurementId: "G-W4XZD35QGZ",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
