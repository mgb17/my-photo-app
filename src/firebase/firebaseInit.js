import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDCJu90RjJXT9GpMimXJuNQEUb9I8WZHZ8",
    authDomain: "myphoto-e689a.firebaseapp.com",
    projectId: "myphoto-e689a",
    storageBucket: "myphoto-e689a.appspot.com",
    messagingSenderId: "729348029431",
    appId: "1:729348029431:web:05a3a7efb9addfb7d64cf2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();