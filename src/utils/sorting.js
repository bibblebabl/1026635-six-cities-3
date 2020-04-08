const sort = (offers) => ({
  'Price: low to high': () => [...offers].sort((a, b) => a.price - b.price),
  'Price: high to low': () => [...offers].sort((a, b) => b.price - a.price),
  'Top rated first': () => [...offers].sort((a, b) => b.rating - a.rating),
});

export const sortByType = (offers, sortType) => {
  const sortedOffers = sort(offers);
  return sortedOffers[sortType] ? sortedOffers[sortType]() : offers;
};
