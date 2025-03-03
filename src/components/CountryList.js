import React from "react";
import StateList from "./StateList";

const CountryList = ({ countries, setCountries }) => {
  const addCountry = () => {
    const name = prompt("Enter country name:");
    if (name) {
      setCountries([...countries, { name, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const name = prompt("Enter new country name:", countries[index].name);
    if (name) {
      setCountries(countries.map((c, i) => (i === index ? { ...c, name } : c)));
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="section">
      <button onClick={addCountry}>Add Country</button>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <span>{country.name}</span>
            <button onClick={() => editCountry(index)}>Edit</button>
            <button onClick={() => deleteCountry(index)}>Delete</button>
            <StateList country={country} countries={countries} setCountries={setCountries} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;

