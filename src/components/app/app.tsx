import * as React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

// Components
import Main from '../main/main';
import Property from '../property/property';
import SignIn from '../sign-in/sign-in';

// Redux
// selectors
import * as DataSelectors from '../../redux/data/selectors';
import * as AppSelectors from '../../redux/app/selectors';
import * as UserSelectors from '../../redux/user/selectors';

// ActionCreators
import {ActionCreators as AppActionCreators} from '../../redux/app/actions';
import {Operations as UserOperations} from '../../redux/user/actions';
import {Operations as DataOperations} from '../../redux/data/actions';

import { UserType, OfferType, LocationType, ReviewType } from '../../types/types';

import Routes from '../../history/routes';
import Favorites from '../favorites/favorites';

interface Props {
  isAuth: boolean;
  selectedCity: LocationType;
  cities: Array<LocationType>;
  offersSorted: Array<OfferType>;
  allOffers: Array<OfferType>;
  favoriteOffers: Array<OfferType>;
  offersNearby: Array<OfferType>;

  sortingType: string;
  hoveredOfferId: number | null;
  currentOfferId: number | null;
  reviews: Array<ReviewType>;
  user?: UserType;

  handlePlaceTitleClick: () => void;
  submitReview:  () => void;
  setSelectedCity:  () => void;
  setSortingType:  () => void;
  setHoveredOfferId:  () => void;
  setFavoriteOfferStatus:  () => void;
  login: () => void;
}

class App extends React.PureComponent<Props> {
  renderApp() {
    const {
      cities,
      user,
      setSelectedCity,
      setHoveredOfferId,
      setSortingType,
      handlePlaceTitleClick,
      setFavoriteOfferStatus,
      sortingType,
      offersSorted
    } = this.props;

    return (
      <Main
        {...this.props}
        offers={offersSorted}
        sortingType={sortingType}
        cities={cities}
        user={user}
        onPlaceCardMouseOver={setHoveredOfferId}
        onTitleClick={handlePlaceTitleClick}
        onCityNameClick={setSelectedCity}
        onChangeSortingType={setSortingType}
        onFavoriteOfferStatus={setFavoriteOfferStatus}
      />
    );

  }

  render() {
    const {
      isAuth,
      setFavoriteOfferStatus,
      handlePlaceTitleClick,
      user,
      favoriteOffers,
      offersNearby,
      allOffers,
      reviews,
      login,
      submitReview,
    } = this.props;

    return (
      <Switch>
        <Route exact path={Routes.MAIN}>
          {this.renderApp()}
        </Route>
        <Route exact path='/login'>
          {!isAuth
            ? <SignIn onSubmit={login} />
            : <Redirect to={Routes.MAIN} />
          }
        </Route>

        <Route exact path={Routes.FAVORITES}>
          {!isAuth ?
            <Redirect to={Routes.SIGN_IN} />
            :
            <Favorites
              user={user}
              onTitleClick={handlePlaceTitleClick}
              onFavoriteOfferStatus={setFavoriteOfferStatus}
              favoriteOffers={favoriteOffers}
            />
          }
        </Route>
        <Route exact path={`${Routes.OFFER}/:id`}
          component={(props) => {
            const offerId = Number(props.match.params.id);
            const offer = allOffers.find((el) => el.id === offerId);

            return (
              <Property
                {...props}
                offerId={offerId}
                user={user}
                offer={offer}
                reviews={reviews}
                offersNearby={offersNearby}
                onTitleClick={handlePlaceTitleClick}
                onReviewSubmit={submitReview}
                onFavoriteOfferStatus={setFavoriteOfferStatus}
              />
            );
          }}
        >
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: UserSelectors.getIsAuthSelector(state),
  user: UserSelectors.getUserSelector(state),
  cities: DataSelectors.getCitiesSelector(state),
  favoriteOffers: DataSelectors.getFavoriteOffersSelector(state),
  offersNearby: DataSelectors.getNearbyOffersSelector(state),
  allOffers: DataSelectors.getOffersSelector(state),
  offersSorted: DataSelectors.getOffersByCityAndSortedSelector(state),
  reviews: DataSelectors.getReviewsSelector(state),
  selectedCity: AppSelectors.getSelectedCitySelector(state),
  currentOfferId: AppSelectors.getcurrentOfferIdSelector(state),
  hoveredOfferId: AppSelectors.gethoveredOfferIdSelector(state),
  sortingType: AppSelectors.getSortingTypeSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  handlePlaceTitleClick: (id) => {
    dispatch(DataOperations.loadNearbyOffers(id))
      .then(() => dispatch(AppActionCreators.setCurrentOfferId(id)))
      .then(() => dispatch(DataOperations.loadReviews(id)));
  },
  submitReview: (id, review) => {
    dispatch(DataOperations.submitReview(id, review));
  },
  setHoveredOfferId: (id) => dispatch(AppActionCreators.setHoveredOfferId(id)),
  setSelectedCity: (city) => dispatch(AppActionCreators.setSelectedCity(city)),
  setSortingType: (type) => dispatch(AppActionCreators.setSortingType(type)),
  login: (authData) => dispatch(UserOperations.login(authData)),
  setFavoriteOfferStatus: (id, status) => dispatch(DataOperations.setFavoriteOfferStatus(id, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

