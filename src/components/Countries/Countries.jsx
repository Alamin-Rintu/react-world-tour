import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ loadCountries }) => {
  const [vistedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log('visited country click', country)
    const totalVisit = [...vistedCountries, country];
    setVisitedCountries(totalVisit);
  };

  const countriesData = use(loadCountries);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h3>Total Countries: {countries.length}</h3>
      <p>Total Visited Country: {vistedCountries.length}</p>
      <ol>
        {vistedCountries.map((country) => (
          <li key={country.ccn3.ccn3}>
            {country.name.common}
          </li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
