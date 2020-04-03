import React from 'react';
import {arrayOf, bool, func, number, shape, string} from 'prop-types';

// Components
import PlaceCard from '../place-card/place-card';
import Map from '../map/map';
import LocationsList from '../locations-list/locations-list';
import Sorting from '../sorting/sorting';

import {getCities, getOffersByCityAndSorted, getOffersLocations} from '../../utils/';
import {MAX_CITIES} from '../../data/constants';
import Header from '../header/header';
import withSortingSelect from '../../hocs/with-sorting-select/with-sorting-select';

const Main = ({
  offers,
  // currentOfferId,
  hoveredOfferId,
  sortingType,
  selectedCity,
  handlePlaceCardMouseOver,
  handleTitleClick,
  handleCityNameClick,
  handleChangeSortingType,
}) => {
  const offersLocations = getOffersLocations(offers);
  const cities = getCities(offers);
  const selectedCityName = selectedCity || offers[0].city.name;
  const selectedCityElement = offers.find((offer) => offer.city.name === selectedCityName).city;
  const offersByCitySorted = getOffersByCityAndSorted(offers, selectedCityName, sortingType);

  const SortingWithSelect = withSortingSelect(Sorting);

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
              selectedCity={selectedCityName}
            />

          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              {selectedCityName && <b className="places__found">{offersByCitySorted.length} places to stay in {selectedCityName}</b>}

              <SortingWithSelect sortingType={sortingType} onSortChange={handleChangeSortingType} />

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
                selectedCityElement={selectedCityElement}
                offersLocations={offersLocations}
                hoveredOfferId={hoveredOfferId}
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
  // currentOfferId: number,
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
