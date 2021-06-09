import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXJ4Qj4rdy3TrnexpxyY6VdSxFhol64BA",
    authDomain: "blogpost-4ef64.firebaseapp.com",
    projectId: "blogpost-4ef64",
    storageBucket: "blogpost-4ef64.appspot.com",
    messagingSenderId: "800711949365",
    appId: "1:800711949365:web:d6634727b64074708bc57c",
    measurementId: "G-ZTQC8VC15C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export { auth, provider };