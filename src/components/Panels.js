import React from 'react';
import Panel from './Panel'

const Panels = (props) => {
    return (
        props.p.map((panel,index) => <Panel key={index} index={index} name={panel.name} location={panel.id}  cv={props.cv}/>)
    );
};

export default Panels;
