// Modal built with code-along by YouTube user Cand Dev at https://www.youtube.com/watch?v=sFCHGba2OEo

import React from 'react'; 
// import { programObject } from './App.js';


export const Modal = ({ show, close }) => {
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
                    {/* <h2>{programObject.title}</h2> */}
                    <p>Leave a comment here for Katsella about this choice . Are you excited to watch it? Did you recommend it for a particular reason? This is your space and Katsella wants to know it all! </p>
                    <form className="modal-form">

                        <label for="userInformation">Listen up, Katsella: </label>
                        <textarea id="userInformation" name="userInformation" rows="8"></textarea>

                        <button type="submit">Submit</button>

                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="btn-cancel">Close</button>
                </div>
            </div>
        </div>
    )
};