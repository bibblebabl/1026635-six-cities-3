import React from 'react';
import {arrayOf, bool, func, number, shape, string} from 'prop-types';

// Components
import LocationsList from '../locations-list/locations-list';

import {MAX_CITIES} from '../../data/constants';
import Header from '../header/header';

import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';

const Main = ({
  offers,
  // currentOfferId,
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

      <Header/>

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
  hoveredOfferId: number,
  sortingType: string,
  cities: arrayOf(string.isRequired),
  offers: arrayOf(shape({
    "id": number.isRequired,
    "city": shape({
      name: string.isRequired,
      location: shape({
        x: number.isRequired,
        y: number.isRequired,
      }).isRequired,
    }).isRequired,
    "title": string.isRequired,
    "image": string.isRequired,
    "description": string.isRequired,
    "images": arrayOf(string.isRequired).isRequired,
    "facilities": arrayOf(string.isRequired).isRequired,
    "price": number.isRequired,
    "rating": number.isRequired,
    "type": string.isRequired,
    "isFavorite": bool.isRequired,
    "isPremium": bool.isRequired,
    "bedrooms": number.isRequired,
    "maxAdults": number.isRequired,
    "host": shape({
      name: string.isRequired,
      avatar: string.isRequired,
    }).isRequired,
    "location": shape({
      x: number.isRequired,
      y: number.isRequired,
      zoom: number,
    }).isRequired,
  }).isRequired),
  handlePlaceCardMouseOver: func,
  handleTitleClick: func,
  handleCityNameClick: func,
  handleChangeSortingType: func
};

export default Main;
