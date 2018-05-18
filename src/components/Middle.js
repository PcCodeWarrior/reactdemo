import React from 'react';

const Middle = (props) => {
    return (
        <div className="Middle">
            <h1>{props.location}</h1>
            <button className="buttonM" onClick={props.cv}>Change State</button>
        </div>
    );
};

export default Middle;
