import {createSelector} from 'reselect';
import NameSpaces from '../name-spaces';

export const getSelector = (state) => state[NameSpaces.DATA];

export const getOffersSelector = createSelector(getSelector, (state) => state.offers);
export const getReviewsSelector = createSelector(getSelector, (state) => state.reviews);
