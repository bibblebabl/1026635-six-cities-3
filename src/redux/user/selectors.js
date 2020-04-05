import {createSelector} from 'reselect';
import NameSpaces from '../name-spaces';

const getSelector = (state) => state[NameSpaces.USER];

export const getAuthStatusSelector = createSelector(getSelector, (state) => state.authorizationStatus);
export const getUserSelector = createSelector(getSelector, (state) => state.user);

