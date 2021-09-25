import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOEleKkbwSDtZL4rUtwacpxhmZT3Ct630",
    authDomain: "avid-tractor-326907.firebaseapp.com",
    projectId: "avid-tractor-326907",
    storageBucket: "avid-tractor-326907.appspot.com",
    messagingSenderId: "1084185907625",
    appId: "1:1084185907625:web:bf231fffd214ba135274b8",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
