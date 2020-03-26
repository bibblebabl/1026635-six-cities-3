import React from 'react';
import {arrayOf, string, func} from 'prop-types';

const LocationsList = ({
  cities,
  selectedCity,
  onCityNameClick
}) => {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city, index) => (
          <a
            key={`${name}-${index}`}
            href="#"
            className={`locations__item-link tabs__item ${selectedCity === city ? `tabs__item--active` : ``}`}
            onClick={() => onCityNameClick(city)}
          >
            <span>{city}</span>
          </a>
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
