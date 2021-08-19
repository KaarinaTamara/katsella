import { useState, useEffect } from 'react';
import firebase from './firebase';
import logo from './logo2.png';
import Swal from 'sweetalert2'

import { ProgramItem } from './components/program/ProgramItem'

import './App.css';

function App() {
 
  const [watchList, setWatchList] = useState([]); 
  const [ userInput, setUserInput ] = useState("");
// for our Modal buttons
//   const [show, setShow] = useState(false);   
  

  
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
   
    const dbRef =firebase.database().ref();

    if (userInput === "") {
        Swal.fire({
            icon: 'error',
            title: 'And I oop-',
            text: 'I sat on the button. Please enter a program and try submitting again!',
          })
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
            <div className="header-banner">
                <h1>Katsella</h1>
                <img src={ logo } alt="logo" className="logo"/>
            </div>
        </header>

        <main>
            <div className="about">
                <h2>Who or WHAT is Katsella?!</h2>
                <p>Meet Katsella, your best friend in organizing your watch lists amongst friends. Add as many, or as little, programs you want to watch and Katsella will keep them safe. Already watched something? Hit "watched this" and Katsella will eat it up and wont keep bugging you about it. Want to leave a comment for your fellow list users about a show? Smash that comment button and Katsella will keep your secrets safe (after sharing with your Katsella friends). Happy viewing!</p>
            </div>

            <div className="form">
                <h2>Feed Katsella</h2>
                <form action="submit" onSubmit={handleSubmit}> 
                    <label htmlFor="userWatchList">Add your next program to watch list!</label>
                    <input type="text" id="userWatchList" onChange= {handleChange} value={userInput} />
                    <button>Add to my list!</button>
                </form>
            </div>      

            <div className="list">
              <ul>
                <h2>Your Katsella List</h2>
                {
                watchList.map( (programObject) => {
                  return (
                        <ProgramItem
                        handleDelete={handleDelete}
                        programObject={programObject}        
                        />
                  )
                }) 
                }
              </ul>        

            </div>
        </main>
        <footer>
            <p>
                Created at Juno College 2021
            
            </p>
        </footer>
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
