
import {bool, number, shape, string} from 'prop-types';

const user = shape({
  avatar: string.isRequired,
  email: string.isRequired,
  id: number.isRequired,
  isPro: bool.isRequired,
  name: string.isRequired,
});

export default user;
