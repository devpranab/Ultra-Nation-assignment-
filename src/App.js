import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
     <h1>All Countries Information</h1>
     <h4>Country loaded:  {countries.length}</h4>
     <ul>
      {
         countries.map(country => 
          <Country country={country} key={country.alpha3Code}></Country>)
      }
     </ul>
    </div>
  );
}

export default App;
