import React from 'react';
import'./Cart.css';

const Cart = props => {
    const cart = props.cart;

    /* population
    let totalPopulation = 0;
    for(let i = 0; i < cart.length; i++){
        const country = cart[i];
        totalPopulation = totalPopulation + country.population
    }
    */
   const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h4>Cart:{cart.length}</h4>
            <p>total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;