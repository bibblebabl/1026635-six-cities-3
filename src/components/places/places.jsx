import React from 'react';
import {arrayOf, bool, func, number, shape, string} from 'prop-types';

// Components
import PlaceCard from '../place-card/place-card';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

import {getOffersLocations} from '../../utils';
import withSortingSelect from '../../hocs/with-sorting-select/with-sorting-select';

const SortingWithSelect = withSortingSelect(Sorting);

const Places = ({
  offers,
  sortingType,
  selectedCity,
  hoveredOfferId,
  onChangeSortingType,
  onPlaceCardMouseOver,
  onTitleClick,
  onFavoriteOfferStatus
}) => {
  const offersLocations = getOffersLocations(offers);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        {selectedCity && <b className="places__found">{offers.length} places to stay in {selectedCity.name}</b>}

        <SortingWithSelect sortingType={sortingType} onSortChange={onChangeSortingType} />

        <div className="cities__places-list places__list tabs__content">
          {
            offers.map((offer) =>
              <PlaceCard
                cardType="cities"
                key={offer.id}
                offer={offer}
                onMouseOver={onPlaceCardMouseOver}
                onTitleClick={onTitleClick}
                onFavoriteOfferStatus={onFavoriteOfferStatus}
              />
            )
          }
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          className='cities__map'
          selectedCity={selectedCity}
          offersLocations={offersLocations}
          hoveredOfferId={hoveredOfferId}
        />
      </div>
    </div>
  );
};

Places.propTypes = {
  selectedCity: shape({
    name: string.isRequired,
    location: shape({
      x: number.isRequired,
      y: number.isRequired,
    }).isRequired,
  }),
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
      avatarUrl: string.isRequired,
    }).isRequired,
    "location": shape({
      x: number.isRequired,
      y: number.isRequired,
      zoom: number,
    }).isRequired,
  }).isRequired),
  onPlaceCardMouseOver: func,
  onTitleClick: func,
  onChangeSortingType: func,
  onFavoriteOfferStatus: func
};

export default Places;
