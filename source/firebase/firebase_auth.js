// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTD48wYuQAWOpc6ehh_EZ7WzlQsgRB6bw",
    authDomain: "deli-bakery.firebaseapp.com",
    databaseURL: "https://deli-bakery-default-rtdb.firebaseio.com",
    projectId: "deli-bakery",
    storageBucket: "deli-bakery.appspot.com",
    messagingSenderId: "887852516142",
    appId: "1:887852516142:web:03428fbdaaac7ec19b70bf",
    measurementId: "G-CDMFZF36GS",
    databaseURL: "https://deli-bakery-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);


const app = firebase.initializeApp(firebaseConfig)
export const firebase_auth = firebase.auth(app)
const db = firebase.firestore()
export default {firebase, app, db, }

