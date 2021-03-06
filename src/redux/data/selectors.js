import {createSelector} from 'reselect';
import NameSpaces from '../name-spaces';
import {getCities, getOffersByCityAndSorted} from '../../utils';
import {getSelectedCitySelector, getSortingTypeSelector} from '../app/selectors';

export const getSelector = (state) => state[NameSpaces.DATA];

export const getOffersSelector = createSelector(getSelector, (state) => state.offers);
export const getReviewsSelector = createSelector(getSelector, (state) => state.reviews);
export const getFavoriteOffersSelector = createSelector(getSelector, (state) => state.favoriteOffers);
export const getNearbyOffersSelector = createSelector(getSelector, (state) => state.offersNearby);

export const getCitiesSelector = createSelector(getOffersSelector, (offers) => getCities(offers));

export const getOffersByCityAndSortedSelector = createSelector(
    getOffersSelector,
    getSelectedCitySelector,
    getSortingTypeSelector,
    (offers, city, sortingType) => getOffersByCityAndSorted(offers, city.name, sortingType));


