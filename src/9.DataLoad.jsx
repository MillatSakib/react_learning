import { useEffect } from "react";
import { useState } from "react";
//first function start here
const Contries = () => {
  const [contries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="newClass">
      <h3>Countries</h3>
      {contries.map((country) => (
        <Country country={country} key={country.cca3}></Country>
      ))}
    </div>
  );
};

function Country({ country }) {
  return (
    <div className="newInnerClass">
      <h3>Country Name: {country?.name?.common}</h3>
      <h3>
        <img src={country?.flags?.png}></img>
        <p>Population: {country?.population}</p>
        <p>Area: {country?.area}</p>
        <p>Code: {country?.cca3}</p>
      </h3>
    </div>
  );
}

export default Contries;
//first function ends here
