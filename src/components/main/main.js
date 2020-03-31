import React from 'react';
import {arrayOf, bool, func, number, shape, string} from 'prop-types';

// Components
import PlaceCard from '../place-card/place-card';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';
import Sorting from '../sorting/sorting';

import {getCities, getOffersByCityAndSorted} from '../../utils/';
import {MAX_CITIES} from '../../data/constants';
import Header from '../header/header';

const Main = ({
  offers,
  currentOfferId,
  hoveredOfferId,
  sortingType,
  selectedCity,
  handlePlaceCardMouseOver,
  handleTitleClick,
  handleCityNameClick,
  handleChangeSortingType,
}) => {
  const currentOfferElement = currentOfferId ? offers.find((offer) => offer.id === currentOfferId) : offers[0];
  const selectedCityDefault = selectedCity || offers[0].city.name;

  const offersLocations = offers.map((offer) => ({
    city: offer.city,
    location: offer.location,
    id: offer.id
  }));

  const cities = getCities(offers).slice(0, MAX_CITIES);
  const offersByCitySorted = getOffersByCityAndSorted(offers, selectedCityDefault, sortingType);

  return (
    <div className="page page--gray page--main">

      <Header/>

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
              {selectedCityDefault && <b className="places__found">{offersByCitySorted.length} places to stay in {selectedCityDefault}</b>}

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
              <Map
                className='cities__map'
                cities={cities}
                currentOfferIdLocation={currentOfferElement.location}
                hoveredOfferId={hoveredOfferId}
                offersLocations={offersLocations}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  selectedCity: string,
  hoveredOfferId: number,
  currentOfferId: number,
  sortingType: string,
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
