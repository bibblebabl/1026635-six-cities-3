import {bool, number, shape, string} from 'prop-types';

export default shape({
  comment: string.isRequired,
  date: string.isRequired,
  id: number.isRequired,
  rating: number.isRequired,
  user: shape({
    avatarUrl: string.isRequired,
    id: number.isRequired,
    isPro: bool.isRequired,
    name: string.isRequired
  }).isRequired
});
