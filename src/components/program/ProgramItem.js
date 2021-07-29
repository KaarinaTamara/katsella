import { useState } from 'react';
import { Modal } from '../modal/Modal'


export const ProgramItem = ( props ) =>  {
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
    const deferrerFunction = () => props.handleDelete(props.programObject.key); 

    return (
        <li key={props.programObject.key}>
            <p>{props.programObject.title}</p>
    
            <div className="list-buttons">
                <button onClick={ deferrerFunction }>Watched this!
                </button>
                
                <button onClick={() => setShow(true)} className="btn-open-modal">Comment
                </button>
                <Modal show={show} close={closeModalHandler} />                          
            
            </div>              
        </li>
        
 )
}

