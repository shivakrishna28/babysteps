import React, { useState } from "react";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <div className="container">
      <h1>Country, State, and City Management</h1>
      <CountryList countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;


