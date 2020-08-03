import * as React from 'react';

// Components
import LocationsList from '../locations-list/locations-list';
import Header from '../header/header';
import Places from '../places/places';
import PlacesEmpty from '../places-empty/places-empty';

import {MAX_CITIES} from '../../data/constants';

import {UserType, OfferType, CityType} from '../../types/types';

interface Props {
  selectedCity: CityType;
  user: UserType | null;
  hoveredOfferId: number | null;
  sortingType: string;
  cities: Array<CityType>;
  offers: Array<OfferType>;
  onPlaceCardMouseOver: () => void;
  onTitleClick: () => void;
  onCityNameClick: () => void;
  onChangeSortingType: () => void;
  onFavoriteOfferStatus: () => void;
}

const Main: React.FunctionComponent<Props> = ({
  offers,
  user,
  cities,
  hoveredOfferId,
  sortingType,
  selectedCity,
  onPlaceCardMouseOver,
  onTitleClick,
  onCityNameClick,
  onChangeSortingType,
  onFavoriteOfferStatus
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
              onCityNameClick={onCityNameClick}
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
                onChangeSortingType={onChangeSortingType}
                onPlaceCardMouseOver={onPlaceCardMouseOver}
                onTitleClick={onTitleClick}
                onFavoriteOfferStatus={onFavoriteOfferStatus}
              />

              : <PlacesEmpty />
          }

        </div>
      </main>
    </div>
  );
};


export default Main;
