import React from 'react';
import {arrayOf, bool, func, number, shape, string} from 'prop-types';

// Components
import PlaceCard from '../place-card/place-card';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';
import Sorting from '../sorting/sorting';

import {getCities, getOffersByCityAndSorted} from '../../utils/';
import {MAX_CITIES} from '../../data/constants';
import {getUniqueArray} from '../../utils/index';

const Main = ({
  offers,
  sortingType,
  selectedCity,
  handlePlaceCardMouseOver,
  handleTitleClick,
  handleCityNameClick,
  handleChangeSortingType
}) => {
  const offersCities = offers.map((offer) => offer.city);
  const cities = getUniqueArray(getCities(offers)).slice(0, MAX_CITIES);
  const selectedCityDefault = selectedCity || cities[0];
  const offersByCitySorted = getOffersByCityAndSorted(offers, selectedCityDefault, sortingType);

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
            <b className="places__found">{offersByCitySorted.length} places to stay in {selectedCityDefault}</b>

            <Sorting sortingType={sortingType} onSortChange={handleChangeSortingType} />

            <div className="cities__places-list places__list tabs__content">
              {
                offersByCitySorted.map((offer) =>
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
  sortingType: string,
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
  handleCityNameClick: func,
  handleChangeSortingType: func
};

export default Main;
