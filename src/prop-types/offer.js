import {arrayOf, bool, number, shape, string} from 'prop-types';

const offer = shape({
  id: number.isRequired,
  city: shape({
    name: string.isRequired,
    location: shape({
      x: number.isRequired,
      y: number.isRequired,
    }).isRequired,
  }).isRequired,
  title: string.isRequired,
  image: string.isRequired,
  description: string.isRequired,
  images: arrayOf(string.isRequired).isRequired,
  facilities: arrayOf(string.isRequired).isRequired,
  price: number.isRequired,
  rating: number.isRequired,
  type: string.isRequired,
  isFavorite: bool.isRequired,
  isPremium: bool.isRequired,
  bedrooms: number.isRequired,
  maxAdults: number.isRequired,
  host: shape({
    name: string.isRequired,
    avatar: string.isRequired,
  }).isRequired,
});

export default offer;
