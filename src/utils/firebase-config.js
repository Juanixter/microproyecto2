import firebase from 'firebase/app';

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDhLKPJ6uSt6eBjx4lky_IaJQxilcvzjLw",
    authDomain: "microproyecto2-b4e35.firebaseapp.com",
    projectId: "microproyecto2-b4e35",
    storageBucket: "microproyecto2-b4e35.appspot.com",
    messagingSenderId: "653734309093",
    appId: "1:653734309093:web:a70f1290f85cd29334b80c",
    measurementId: "G-8CHMN81B3P"
  };

const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();