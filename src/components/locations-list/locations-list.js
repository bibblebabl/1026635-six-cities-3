import React from 'react';
import {arrayOf, shape, number, string, func} from 'prop-types';

const LocationsList = ({
  cities,
  selectedCity,
  onCityNameClick
}) => {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city, index) => (
          <li key={`${city}-${index}`} className="locations__item">
            <a
              href="#"
              className={`locations__item-link tabs__item ${city === selectedCity.name ? `tabs__item--active` : ``}`}
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
  selectedCity: shape({
    name: string.isRequired,
    location: shape({
      x: number.isRequired,
      y: number.isRequired,
    }).isRequired,
  }),
  onCityNameClick: func.isRequired,
  cities: arrayOf(string.isRequired).isRequired,
};

export default LocationsList;
