// 5) 
import firebase from 'firebase/app';
import 'firebase/database'; 

// 6) 
const firebaseConfig = {
    apiKey: "AIzaSyDWdApoAlQvjjdMgsWbj54QpglZASD83Ns",

    authDomain: "katsella-348d3.firebaseapp.com",

    projectId: "katsella-348d3",

    storageBucket: "katsella-348d3.appspot.com",

    messagingSenderId: "293055864962",

    appId: "1:293055864962:web:91a7cf952df5eb5150149b"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   7) firebase is now set up!
export default firebase;


