import React , { useState } from 'react';
import './Room.css';

function Room() {
    var  [isLit, setLit] = useState(true);
    var  [isTemp, setTemp] = useState(72);

    const brightness = isLit ? "lit" : "dark";
    return(        
            <div className={`room ${brightness}`}>               
                 the room is {isLit ? "lit" : "dark"}
                 < br />
                 {isLit ? 'Current Temperature ' +  isTemp : ""}
            <br />
            <button onClick={() => setLit(isLit = true)}>ON</button>                     
           
            <button onClick={() => setLit(isLit = false)}>OFF</button>

            {isLit? <div>
            <button onClick={() => setTemp(++isTemp)}>+</button>
            <button onClick={() => setTemp(--isTemp)}>-</button> 
            </div> : null
            }
            </div>
    );

}

export default Room;
