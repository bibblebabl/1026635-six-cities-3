import React from 'react';
import {arrayOf, string, func} from 'prop-types';

const LocationsList = ({
  cities,
  selectedCity,
  onCityNameClick
}) => {
  const selectedCityName = selectedCity || cities[0];

  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city, index) => (
          <li key={`${city}-${index}`} className="locations__item">
            <a
              href="#"
              className={`locations__item-link tabs__item ${selectedCityName === city ? `tabs__item--active` : ``}`}
              onClick={() => onCityNameClick(city)}
            >
              <span>{city}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
};

LocationsList.propTypes = {
  selectedCity: string.isRequired,
  onCityNameClick: func.isRequired,
  cities: arrayOf(string.isRequired).isRequired,
};

export default LocationsList;
