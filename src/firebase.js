import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDm1w-D07_Cx7KSKEA2dkXC7JUCMWnj7XI",
    authDomain: "jontagram-fd225.firebaseapp.com",
    projectId: "jontagram-fd225",
    storageBucket: "jontagram-fd225.appspot.com",
    messagingSenderId: "881698946127",
    appId: "1:881698946127:web:8cabfce23ae32e54e33e3a",
    measurementId: "G-DHFFXSTEND"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };