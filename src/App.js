import { useState, useEffect } from 'react';
import firebase from './firebase';
import logo from './logo2.png';
import { Modal } from './components/modal/Modal';

import './App.css';

function App() {
 
  const [watchList, setWatchList] = useState([]); 
  const [ userInput, setUserInput ] = useState("");
// for our Modal buttons
  const [show, setShow] = useState(false);   
  const closeModalHandler = () => setShow(false);

  
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
        alert('Sorry, you need to make sure you enter something here to feed the Katsella monster');
    }
    else {
           dbRef.push(userInput).trim();
        console.log("a new show was added"); 
    }
    setUserInput("".trim());
  } 

  const handleDelete = (keyOfProgramToDelete) => {

    const dbRef = firebase.database().ref();

    dbRef.child(keyOfProgramToDelete).remove();
  }

  return (
    <div className="App">
        <header>
            <h1>Katsella</h1>
            <img src={ logo } alt="logo" className="logo"/>
        </header>

        <main>

    <div className="form">
      <form action="submit" onSubmit={handleSubmit}> 
 
        <label htmlFor="userWatchList">Add your next program to watch list!</label>

        <input type="text" id="userWatchList" onChange={handleChange} 
         
        value={userInput}
        />
        
        <button>Add to my list!</button>
      </form>
    </div>      

 
      <ul>
        <h2>Your Katsella List</h2>
        {
        
        watchList.map( (programObject) => {
        
          const deferrerFunction = () => {
         
            handleDelete(programObject.key);
          }

          return (
            <li key={programObject.key}>
              <p>{programObject.title}</p>
              
                <button onClick={ deferrerFunction }>Watched this!</button>
                <button onClick={() => setShow(true)} className="btn-open-modal">Comment</button>
                <Modal show={show} close={closeModalHandler} />
                            
            </li>

          )
        }) 
        }
      </ul>
        {/* INSERTING MODAL HERE */}
        {/* { show ?  <div onclick={closeModalHandler} className="back-drop"></div> : null } */}
        {/* <button onClick={() => setShow(true)} className="btn-open-modal">Comment</button> */}
        {/* <Modal show={show} close={closeModalHandler} /> */}
        
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
