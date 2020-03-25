import React from 'react';
import {arrayOf, bool, func, number, shape, string} from 'prop-types';

// Components
import PlaceCard from '../place-card/place-card';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';

import {getCities, getOffersByCity} from '../../utils/';
import {MAX_CITIES} from '../../data/constants';
import {getUniqueArray} from '../../utils/index';

const Main = ({
  offers,
  selectedCity,
  handlePlaceCardMouseOver,
  handleTitleClick,
  handleCityNameClick
}) => {
  const offersCities = offers.map((offer) => offer.city);
  const cities = getUniqueArray(getCities(offers)).slice(0, MAX_CITIES);
  const selectedCityDefault = selectedCity || cities[0];
  const offersByCity = getOffersByCity(offers, selectedCityDefault);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">

          <LocationsList
            cities={cities}
            onCityNameClick={handleCityNameClick}
            selectedCity={selectedCityDefault}
          />

        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersByCity.length} places to stay in {selectedCityDefault}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
              Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
              {/*
                  <select className="places__sorting-type" id="places-sorting">
                    <option className="places__option" value="popular" selected="">Popular</option>
                    <option className="places__option" value="to-high">Price: low to high</option>
                    <option className="places__option" value="to-low">Price: high to low</option>
                    <option className="places__option" value="top-rated">Top rated first</option>
                  </select>
                */}
            </form>
            <div className="cities__places-list places__list tabs__content">
              {
                offersByCity.map((offer) =>
                  <PlaceCard
                    key={offer.id}
                    offer={offer}
                    onMouseOver={handlePlaceCardMouseOver}
                    onTitleClick={handleTitleClick}
                  />
                )
              }
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map offersCities={offersCities}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  selectedCity: string,
  offers: arrayOf(shape({
    id: number.isRequired,
    city: shape({
      name: string.isRequired,
      location: shape({
        x: number.isRequired,
        y: number.isRequired,
      }).isRequired,
    }).isRequired,
    title: string.isRequired,
    image: string.isRequired,
    description: string.isRequired,
    images: arrayOf(string.isRequired).isRequired,
    facilities: arrayOf(string.isRequired).isRequired,
    price: number.isRequired,
    rating: number.isRequired,
    type: string.isRequired,
    isFavorite: bool.isRequired,
    isPremium: bool.isRequired,
    bedrooms: number.isRequired,
    maxAdults: number.isRequired,
    host: shape({
      name: string.isRequired,
      avatar: string.isRequired,
    }).isRequired,
  }).isRequired),
  handlePlaceCardMouseOver: func,
  handleTitleClick: func,
  handleCityNameClick: func
};

export default Main;
