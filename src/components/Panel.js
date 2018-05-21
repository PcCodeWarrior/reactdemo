import React from 'react';


const Panel = (props) => {
    return (
        <div className={props.location}>
            <h1>{props.name}</h1>
            <button  className="buttonFetch" onClick={()=> props.cv(props.index)}>Change State</button>
        </div>
    );
};

export default Panel;
