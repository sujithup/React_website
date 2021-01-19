import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAM4h3l7dMkgq74bZWTSBz7c31tJ2T_T-I",
    authDomain: "react-website-a1a76.firebaseapp.com",
    databaseURL: "https://react-website-a1a76.firebaseio.com",
    projectId: "react-website-a1a76",
    storageBucket: "react-website-a1a76.appspot.com",
    messagingSenderId: "903619235132",
    appId: "1:903619235132:web:9256643bcd86489b7aa239",
    measurementId: "G-13H4RE63SF"
});

var db = firebaseApp.firestore();

export { db };
