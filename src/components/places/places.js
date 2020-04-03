import React from 'react';
import {arrayOf, bool, func, number, shape, string} from 'prop-types';

// Components
import PlaceCard from '../place-card/place-card';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

import {getOffersByCityAndSorted, getOffersLocations, getCurrentCity} from '../../utils/';
import withSortingSelect from '../../hocs/with-sorting-select/with-sorting-select';

const SortingWithSelect = withSortingSelect(Sorting);

const Places = ({
  offers,
  sortingType,
  selectedCity,
  hoveredOfferId,
  handleChangeSortingType,
  handlePlaceCardMouseOver,
  handleTitleClick
}) => {
  const offersLocations = getOffersLocations(offers);
  const selectedCityName = selectedCity || offers[0].city.name;
  const selectedCityElement = getCurrentCity(offers, selectedCityName);
  const offersByCitySorted = getOffersByCityAndSorted(offers, selectedCityName, sortingType);

  return (
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
  );
};

Places.propTypes = {
  selectedCity: string,
  hoveredOfferId: number,
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
  handleChangeSortingType: func
};

export default Places;
