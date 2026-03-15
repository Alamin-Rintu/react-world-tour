import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
//   console.log(country.ccn3.ccn3)
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt="" />
      <h3>Name:{country.name.common} </h3>
      <p>Area: {country.area.area} </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
