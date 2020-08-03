import * as React from 'react';
import { CityType } from '../../types/types';

interface Props {
  cities: Array<CityType>;
  selectedCity: CityType;
  onCityNameClick: (city: CityType) => void;
}

const LocationsList: React.FunctionComponent<Props> = ({
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

export default LocationsList;
