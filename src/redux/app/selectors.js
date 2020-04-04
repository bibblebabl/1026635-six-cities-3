import {createSelector} from 'reselect';
import NameSpaces from '../name-spaces';

export const getSelector = (state) => state[NameSpaces.APP];

export const getSelectedCitySelector = createSelector(getSelector, (state) => state.selectedCity);
export const getcurrentOfferIdSelector = createSelector(getSelector, (state) => state.currentOfferId);
export const gethoveredOfferIdSelector = createSelector(getSelector, (state) => state.hoveredOfferId);
export const getSortingTypeSelector = createSelector(getSelector, (state) => state.sortingType);

