import { useState, useEffect } from 'react';
import firebase from './firebase';
import logo from './logo2.png';
import Modal from "./Component/Modal";
import './App.css';

function App() {
 
  const [watchList, setWatchList] = useState([]); 
  const [ userInput, setUserInput ] = useState("");
  
 //call useEffect and grab our database
  useEffect( () => { 
    const dbRef =
    firebase.database().ref();

    // Listener for our firebase data
    dbRef.on('value', (snapshot) => { 
      const myList = snapshot.val();
      
      const newArray = []; 

      for (let propertyName in myList) {
        const programObject = {
          key: propertyName, 
          title: myList[propertyName]
        }

        newArray.push(programObject);
      }

      setWatchList(newArray);

    });
  }, [] );

  useEffect( () => {

  })
 
  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
     
    event.preventDefault();

    console.log("Form submitted");

    const dbRef =firebase.database().ref();

    if (userInput == "") {
        alert('enter something ok');
    }
    else {
           dbRef.push(userInput);
    }

    setUserInput("");
  } 

  const handleDelete = (keyOfProgramToDelete) => {

    const dbRef = firebase.database().ref();

    dbRef.child(keyOfProgramToDelete).remove();
  }

  return (
    <div className="App">
        <header>
            <img src={ logo } alt="logo" class="logo"/>
          <h1>Katsella</h1>
        </header>

    <div class="form">
      <form action="submit" onSubmit={handleSubmit}> 
 
        <label htmlFor="userWatchList">Add your next program to watch list!</label>

        <input type="text" id="userWatchList" onChange={handleChange} 
        // 48) 
        value={userInput}
        />
        {/* 35.1) */}
        <button>Add to my list!</button>
      </form>
    </div>      

      {/* 30) */}
      <ul>
        <h2>Your Katsella List</h2>
        {
        // 31
        watchList.map( (programObject) => {
          // 54)
          const deferrerFunction = () => {
          // 55)
            handleDelete(programObject.key);
          }

          return (
            <li key={programObject.key}>
              <p>{programObject.title}</p>
              
              <button onClick={ deferrerFunction }>Watched this!</button>
            </li>

          )
        }) 
        }
      </ul>
    </div>
  );
}

export default App;


// ***PSEUDO CODE**** 
// Allow user to input their desired tv show(s) and/or movie(s) 
//  -Have form with input text and a submit button
//  -Constantly search for changes, collecting any and all inputted data in real time
//  -On submit, send the input to firebase to store

// Show submitted data on the app for the user
//  -Take the data from firebase and send back to our app
//  -Upon fetching from firebase, display on app in list format

// Allow user to remove programs from list once watched
//  -"I watched this" delete button next to each item 
//  -Go into firebase and remove item from database
//  -App updates to reflect deletion  

// 1) From the starter code, delete everything between the div tags. Add an h1. also delete the logo import and file. 
// 2) started a new app on firebase
// 3) npm install firebase in cmdr 
// 4) create and go to firebase.js
// ....
// 8) create realtime database in firebase
// 9) added three programs to our list in our realtime database 
// 10) run npm start
// 11) add pseudo code 

// ...
// 29) this step was just editing our h1 tag/
