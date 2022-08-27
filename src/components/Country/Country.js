import React from 'react';
import './Country.css';

const Country = props => {
    //console.log(props.name);
    return (
        <div>
            <h4>{props.name}</h4>
        </div>
    );
};

export default Country;