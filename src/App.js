import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err))
  }, [])

// handleAddCuntry function
  const handleAddCuntry = country => {
    console.log("handleAddCuntry func clicked", country);
    const newCart = [...cart, country];
    setCart(newCart);
}

  return (
    <div className="App">
     <h1>All Countries Information</h1>
     {/* <h2>Country loaded:  {countries.length}</h2> */}
     <h4>Country loaded:  {cart.length}</h4>
     <Cart cart={cart}></Cart>
     <ul>
      {
         countries.map(country => 
          <Country country={country} 
          key={country.alpha3Code}
          handleAddCuntry={handleAddCuntry}></Country>)
      }
     </ul>
    </div>
  );
}

export default App;
