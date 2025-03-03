import React from "react";
import CityList from "./CityList";

const StateList = ({ country, countries, setCountries, index }) => {
  const addState = () => {
    const name = prompt("Enter state name:");
    if (name) {
      setCountries(
        countries.map((c, i) =>
          i === index ? { ...c, states: [...c.states, { name, cities: [] }] } : c
        )
      );
    }
  };

  const deleteState = (stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      setCountries(
        countries.map((c, i) =>
          i === index
            ? { ...c, states: c.states.filter((_, si) => si !== stateIndex) }
            : c
        )
      );
    }
  };

  return (
    <div className="section">
      <button onClick={addState}>Add State</button>
      <ul>
        {country.states.map((state, stateIndex) => (
          <li key={stateIndex}>
            <span>{state.name}</span>
            <button onClick={() => deleteState(stateIndex)}>Delete</button>
            <CityList
              state={state}
              countryIndex={index}
              stateIndex={stateIndex}
              setCountries={setCountries}
              countries={countries}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateList;
