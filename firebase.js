import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC94x10b_yFshCL66WwnSXGYQ811-0uzek",
  authDomain: "nextjs-tesla.firebaseapp.com",
  projectId: "nextjs-tesla",
  storageBucket: "nextjs-tesla.appspot.com",
  messagingSenderId: "262960654749",
  appId: "1:262960654749:web:790146cdd2a255fcf82774"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

