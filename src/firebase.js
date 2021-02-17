import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBcLyp3_RK1AbB4yJ4qJelAtvTFoBinLuk",
  authDomain: "comfeco-2e108.firebaseapp.com",
  projectId: "comfeco-2e108",
  storageBucket: "comfeco-2e108.appspot.com",
  messagingSenderId: "35272339077",
  appId: "1:35272339077:web:d9d90781fb7908117403ec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
