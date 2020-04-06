import {createSelector} from 'reselect';
import NameSpaces from '../name-spaces';
import {AuthorizationStatus} from './actions';

const getSelector = (state) => state[NameSpaces.USER];

export const getAuthStatusSelector = createSelector(getSelector, (state) => state.authorizationStatus);
export const getIsAuthSelector = createSelector(getAuthStatusSelector, (status) => status === AuthorizationStatus.AUTH);
export const getUserSelector = createSelector(getSelector, (state) => state.user);

