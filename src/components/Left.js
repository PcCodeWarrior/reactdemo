import React from 'react';


const Left = (props) => {
    return (
        <div className="Left ">
            <h1>{props.location}</h1>
            <button  className="buttonL" onClick={()=> props.cv('l')}>Change State</button>
        </div>
    );
};

export default Left;
