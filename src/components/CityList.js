import React from "react";

const CityList = ({ state, countryIndex, stateIndex, setCountries, countries }) => {
  const addCity = () => {
    const name = prompt("Enter city name:");
    if (name) {
      setCountries(
        countries.map((c, ci) =>
          ci === countryIndex
            ? {
                ...c,
                states: c.states.map((s, si) =>
                  si === stateIndex ? { ...s, cities: [...s.cities, name] } : s
                ),
              }
            : c
        )
      );
    }
  };

  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      setCountries(
        countries.map((c, ci) =>
          ci === countryIndex
            ? {
                ...c,
                states: c.states.map((s, si) =>
                  si === stateIndex
                    ? { ...s, cities: s.cities.filter((_, ci) => ci !== cityIndex) }
                    : s
                ),
              }
            : c
        )
      );
    }
  };

  return (
    <div className="section">
      <button onClick={addCity}>Add City</button>
      <ul>
        {state.cities.map((city, cityIndex) => (
          <li key={cityIndex}>
            <span>{city}</span>
            <button onClick={() => deleteCity(cityIndex)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
