import {sortByType} from './sorting';

export const getUniqueArray = (array) => [...new Set(array)];

export const extend = (object1, object2) => Object.assign({}, object1, object2);

export const getCities = (offers) => {
  const citiesArray = offers.map((offer) => offer.city);
  return citiesArray.filter((value, index, array) => array.findIndex((el)=> (el.name === value.name)) === index);
};

export const getLocationArray = (location) => [location.x, location.y];

export const getOffersByCityAndSorted = (offers, city, sortingType) => {
  const offersByCity = city ? offers.filter((offer) => offer.city.name === city) : offers;
  const offersSorted = sortByType(offersByCity, sortingType);

  return offersSorted;
};

export const getCurrentCity = (offers, selectedCityName) => offers.find((offer) => offer.city.name === selectedCityName).city;

export const getOffersLocations = (offers) => offers.map((offer) => ({
  id: offer.id,
  city: offer.city,
  location: offer.location,
}));
