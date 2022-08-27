import React from 'react';
import './Country.css';

const Country = props => {
    const {name, flag, population, region} = props.country;
    const handleAddCuntry = props.handleAddCuntry;
    const countryCss = {
        border: '1px solid blue',
        margin: '10px',
        padding: '10px'
    }

    return (
        <div style={countryCss}>
            <h4>Country name: {name}</h4>
            <img style={{
                height: "100px"
            }} src={flag} alt="flag"/>
            <h5>Population: {population}</h5>
            <p>Region: {region}</p>
            <button onClick={() => handleAddCuntry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;