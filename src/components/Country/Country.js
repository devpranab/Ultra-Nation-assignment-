import React from 'react';
import './Country.css';

const Country = props => {
    //console.log(props.name);
    //console.log(props.country);
    const {name, flag, population, region} = props.country;
    return (
        <div>
            <h4>Country name: {name}</h4>
            <img style={{
                height: "100px"
            }} src={flag} alt="flag"/>
            <h5>Population: {population}</h5>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;