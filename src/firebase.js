// 5) 
import firebase from 'firebase/app';
import 'firebase/database'; 

// 6) 
const firebaseConfig = {

    apiKey: "AIzaSyAHfW2tzvPB3RTzOjRBOd53HATHby3ips0",
  
    authDomain: "katsella-1d99e.firebaseapp.com",
  
    projectId: "katsella-1d99e",
  
    storageBucket: "katsella-1d99e.appspot.com",
  
    messagingSenderId: "530874955224",
  
    appId: "1:530874955224:web:cd4ea059efc5e9b2b12ead",
  
    measurementId: "G-QXD6RP67NB"
  
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   7) firebase is now set up!
export default firebase;


