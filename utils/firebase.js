import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCR_dWPYhfYly87BIqMhkBFQzhGRmzue74",
    authDomain: "share-n-go-7019d.firebaseapp.com",
    projectId: "share-n-go-7019d",
    storageBucket: "share-n-go-7019d.appspot.com",
    messagingSenderId: "903071827831",
    appId: "1:903071827831:web:743cc340427ff176364372",
    measurementId: "G-Y78EWSCN83"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const auth = firebase.auth();

export{ firestore,auth }