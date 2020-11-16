import firebase from "firebase";

var firebaseApp = firebase.initializeApp({


    apiKey: "AIzaSyDvSavIZATfTLKTSkCfjnVpdgqAcVHaypk",
    authDomain: "react-contact-form-e2824.firebaseapp.com",
    databaseURL: "https://react-contact-form-e2824.firebaseio.com",
    projectId: "react-contact-form-e2824",
    storageBucket: "react-contact-form-e2824.appspot.com",
    messagingSenderId: "985072576484",
    appId: "1:985072576484:web:8e15a97f1126f746ecc9f1"
});

var db = firebaseApp.firestore();

export { db };
