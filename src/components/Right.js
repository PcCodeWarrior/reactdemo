import React from 'react';


const Right = (props) => {
    return (
        <div className="Right">
            <h1>{props.location}</h1>
            <button className="buttonR" onClick={()=> props.cv('r')}>Change State</button>
        </div>
    );
};


export default Right;
