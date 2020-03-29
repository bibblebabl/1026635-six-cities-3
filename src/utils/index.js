import {sortByType} from './sorting';

export const getUniqueArray = (array) => [...new Set(array)];

export const getCities = (offers) => offers.map((offer) => offer.city.name);

export const getOffersByCityAndSorted = (offers, city, sortingType) => {
  const offersByCity = offers.filter((offer) => offer.city.name === city);
  const offersSorted = sortByType(offersByCity, sortingType);

  return offersSorted;
};
