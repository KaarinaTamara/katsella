// Modal built with code-along by YouTube user Cand Dev at https://www.youtube.com/watch?v=sFCHGba2OEo

import React from 'react'; 
import {useState} from 'react';

// import { programObject } from './App.js';

export const Modal = ({ show, close }) => {
    //Storing name in comment modal
    const [inputSubmittedName, setInputSubmittedName] = useState ("");
    const [nameInput, setNameInput] = useState("");
    const nameChange = (e) => {
       if (e.target.name === "nameInformation") {
            setNameInput(e.target.value)
        }
    }
    
    //Storing the comments 
    const [inputSubmittedComment, setInputSubmittedComment] = useState("");
    const [commentInput, setCommentInput] = useState("");
    const handleChange = (e) => {
        if (e.target.name === "userInformation") {
            setCommentInput(e.target.value) 
        }        
    }

    //How to handle submitted comments
    const handleClick = (e) => {
        e.preventDefault() 
        if (commentInput === "") {
            alert("Please enter a comment before submitting")
        } else {
            let storedComment = inputSubmittedComment
            setInputSubmittedComment(commentInput + storedComment)
            setCommentInput("")
            // let storedName = inputSubmittedName
            // setInputSubmittedName(nameInput + storedName)
            // setNameInput("")
        } 
        
    }


    return (
        // BUILDING OUR MODAL
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translate(0vh)' : 'translate(-100vh)',
                opacity: show ? '1' : '0',
                display: show ? 'block' : 'none'
            }}
        >
            
            <div className="modal-header">
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h2>Tell Katsella your secrets</h2>
                    
                    <p>Leave a comment here for Katsella about this choice . Are you excited to watch it? Did you recommend it for a particular reason? This is your space and Katsella wants to know it all! </p>
                    <form className="modal-form">

                        <label htmlFor="userInformation">Listen up, Katsella: </label>
                        {/* <input type="text" id="nameInformation" className="nameInformation" onChange= {nameChange} value={nameInput}></input> */}
                        {/* <input type="text" className="nameInformation" value={nameInput} onChange={nameChange}></input>  */}
                        <textarea id="userInformation" name="userInformation" rows="8" className="userComment" value={commentInput} onChange={handleChange}></textarea>
                        
                        <button type="submit" onClick={handleClick}>Submit</button>

                    </form>
                </div>
                <div className="showComment">
                    <p className="submittedName">{inputSubmittedName}</p>
                    <p className="submittedComment">{inputSubmittedComment}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="btn-cancel">Close</button>
                </div>
            </div>
        </div>

    )
};