import {sortByType} from './sorting';

export const getUniqueArray = (array) => [...new Set(array)];

export const getCities = (offers) => getUniqueArray(offers.map((offer) => offer.city.name));

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
