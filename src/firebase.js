import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCT79frRWul0S7Pz1AltuxWo3QOr8AlN-M",
    authDomain: "clone-d07fc.firebaseapp.com",
    projectId: "clone-d07fc",
    storageBucket: "clone-d07fc.appspot.com",
    messagingSenderId: "1064031867487",
    appId: "1:1064031867487:web:14163ffea24c971f8881ea",
    measurementId: "G-255YPPZSBF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};