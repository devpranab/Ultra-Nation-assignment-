import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      console.log(data);
      const names = data.map(country => country.name)
      console.log(names);
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
     <h1>All Countries Information</h1>
     <h4>Country loaded:  {countries.length}</h4>
     <ul>
      {
         countries.map(country => <li>{country.name}</li>)
      }
     </ul>
    </div>
  );
}

export default App;
