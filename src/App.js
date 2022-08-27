import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  return (
    <div className="App">
      {countries.length}
    <h1>All Countries Information</h1>
    </div>
  );
}

export default App;
