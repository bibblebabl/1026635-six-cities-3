import * as React from 'react';

// Components
import PlaceCard from '../place-card/place-card';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

import {getOffersLocations} from '../../utils';
import withSortingSelect from '../../hocs/with-sorting-select/with-sorting-select';
import { CityType, OfferType } from '../../types/types';

const SortingWithSelect = withSortingSelect(Sorting);

interface Props {
  selectedCity: CityType;
  hoveredOfferId?: number;
  sortingType: string;
  offers: Array<OfferType>;
  onPlaceCardMouseOver: () => void;
  onTitleClick: () => void;
  onChangeSortingType: () => void;
  onFavoriteOfferStatus: () => void;
}

const Places: React.FunctionComponent<Props> = ({
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

export default Places;
