// 5) 
import firebase from 'firebase/app';
import 'firebase/database'; 

// 6) 
const firebaseConfig = {
    apiKey: "AIzaSyDp6dAoFDgrnNkkf3KJnE-3CVUDkn_mfyw",
    authDomain: "watch-me-app-86d7d.firebaseapp.com",
    projectId: "watch-me-app-86d7d",
    storageBucket: "watch-me-app-86d7d.appspot.com",
    messagingSenderId: "152552326637",
    appId: "1:152552326637:web:f740f755ab494473c2d3e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   7) firebase is now set up!
export default firebase;