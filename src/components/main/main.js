import React from 'react';
import {arrayOf, func, number, shape, string} from 'prop-types';

// Components
import LocationsList from '../locations-list/locations-list';

import {MAX_CITIES} from '../../data/constants';
import Header from '../header/header';

import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';
import {userPropType, offerPropType} from '../../prop-types/prop-types';

const Main = ({
  offers,
  // currentOfferId,
  user,
  cities,
  hoveredOfferId,
  sortingType,
  selectedCity,
  handlePlaceCardMouseOver,
  handleTitleClick,
  handleCityNameClick,
  handleChangeSortingType,
}) => {
  return (
    <div className="page page--gray page--main">

      <Header user={user} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <LocationsList
              cities={cities.slice(0, MAX_CITIES)}
              onCityNameClick={handleCityNameClick}
              selectedCity={selectedCity}
            />

          </section>
        </div>
        <div className="cities">
          {
            offers.length ?

              <Places
                offers={offers}
                sortingType={sortingType}
                selectedCity={selectedCity}
                hoveredOfferId={hoveredOfferId}
                handleChangeSortingType={handleChangeSortingType}
                handlePlaceCardMouseOver={handlePlaceCardMouseOver}
                handleTitleClick={handleTitleClick}
              />

              : <PlacesEmpty />
          }

        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  selectedCity: shape({
    name: string.isRequired,
    location: shape({
      x: number.isRequired,
      y: number.isRequired,
    }).isRequired,
  }),
  user: userPropType,
  hoveredOfferId: number,
  sortingType: string,
  cities: arrayOf(shape({
    name: string.isRequired,
    location: shape({
      x: number.isRequired,
      y: number.isRequired,
    }).isRequired,
  })),
  offers: arrayOf(offerPropType).isRequired,
  handlePlaceCardMouseOver: func,
  handleTitleClick: func,
  handleCityNameClick: func,
  handleChangeSortingType: func
};

export default Main;
