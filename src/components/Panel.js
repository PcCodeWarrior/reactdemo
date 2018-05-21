import React from 'react';


const Panel = (props) => {
    return (
        <div className={props.cname}>
            <h1>{props.location}</h1>
            <button  className="buttonFetch" onClick={()=> props.cv(props.cname.substring(0,1).toLowerCase())}>Change State</button>
        </div>
    );
};

export default Panel;
