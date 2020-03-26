export const getUniqueArray = (array) => [...new Set(array)];

export const getCities = (offers) => offers.map((offer) => offer.city.name);

export const getOffersByCity = (offers, city) => offers.filter((offer) => offer.city.name === city);
