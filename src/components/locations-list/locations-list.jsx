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
          <li key={`${city.name}-${index}`} className="locations__item">
            <a
              href="#"
              className={`locations__item-link tabs__item ${city.name === selectedCity.name ? `tabs__item--active` : ``}`}
              onClick={(event) => {
                event.preventDefault();
                onCityNameClick(city);
              }}
            >
              <span>{city.name}</span>
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
  cities: arrayOf(shape({
    name: string.isRequired,
    location: shape({
      x: number.isRequired,
      y: number.isRequired,
    }),
  }))
};

export default LocationsList;
