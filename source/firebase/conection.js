import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCTD48wYuQAWOpc6ehh_EZ7WzlQsgRB6bw",
    authDomain: "deli-bakery.firebaseapp.com",
    databaseURL: "https://deli-bakery-default-rtdb.firebaseio.com",
    projectId: "deli-bakery",
    storageBucket: "deli-bakery.appspot.com",
    messagingSenderId: "887852516142",
    appId: "1:887852516142:web:03428fbdaaac7ec19b70bf",
    measurementId: "G-CDMFZF36GS"
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const db = firebase.firestore();
  
  export default{
    firebase, db
  }