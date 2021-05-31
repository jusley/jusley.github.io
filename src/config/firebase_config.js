import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import { firestoreConnect } from "react-redux-firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyATJ5favrwuiAYj57HOwGoHOAMi5l1GiZ8",
    authDomain: "dfm-msk.firebaseapp.com",
    projectId: "dfm-msk",
    storageBucket: "dfm-msk.appspot.com",
    messagingSenderId: "778853465342",
    appId: "1:778853465342:web:49b6786dce63d251e0f9af",
    measurementId: "G-1Q8JZS8F99"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});
  export default firebase;