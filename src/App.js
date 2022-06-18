import React, {useState, useEffect} from 'react';
import './App.css';
import Country from './components/Country/Country';
import CountryAdd from './components/CountryAdd/CountryAdd';

function App() {

  const [countries,setCountries] = useState([]);
    useEffect(()=>{
      fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    },[])


    const [countryadd,setCountryadd] = useState([]);

    const handleAddCountry = (country) =>
    {
      const newAddcountry = [...countryadd,country];
      setCountryadd(newAddcountry);
    }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Total Country : {countries.length} </h1>
      <CountryAdd countryadd={countryadd}></CountryAdd>
      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      </ul>
      
      </header>
    </div>
  );
}

export default App;
