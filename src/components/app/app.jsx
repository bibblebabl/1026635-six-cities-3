import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {arrayOf, func, number, shape, string, array, bool} from 'prop-types';

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

import UserPropType from '../../prop-types/user';
import OfferPropType from '../../prop-types/offer';

import Routes from '../../history/routes';
import Favorites from '../favorites/favorites';


class App extends PureComponent {
  renderApp() {
    const {
      currentOfferId,
      cities,
      user,
      setSelectedCity,
      setHoveredOfferId,
      setSortingType,
      handlePlaceTitleClick,
      setFavoriteOfferStatus,
      sortingType
    } = this.props;

    return (
      <Main
        {...this.props}
        sortingType={sortingType}
        cities={cities}
        user={user}
        currentOfferId={currentOfferId}
        handlePlaceCardMouseOver={setHoveredOfferId}
        handleTitleClick={handlePlaceTitleClick}
        handleCityNameClick={setSelectedCity}
        handleChangeSortingType={setSortingType}
        handleFavoriteOfferStatus={setFavoriteOfferStatus}
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
      offers,
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
              handleTitleClick={handlePlaceTitleClick}
              handleFavoriteOfferStatus={setFavoriteOfferStatus}
              favoriteOffers={favoriteOffers}
            />
          }
        </Route>
        <Route exact path={`${Routes.OFFER}/:id`}
          component={(props) => {
            const offerId = Number(props.match.params.id);
            const offer = offers.find((el) => el.id === offerId);
            return (
              offer ?
                <Property
                  {...props}
                  user={user}
                  offer={offer}
                  reviews={reviews}
                  offersNearby={offersNearby}
                  handleTitleClick={handlePlaceTitleClick}
                  handleReviewSubmit={submitReview}
                  handleFavoriteOfferStatus={setFavoriteOfferStatus}
                /> : null
            );
          }}
        >

        </Route>
      </Switch>
    );
  }
}

App.propTypes = {
  selectedCity: shape({
    name: string.isRequired,
    location: shape({
      x: number.isRequired,
      y: number.isRequired,
    }).isRequired,
  }),
  isAuth: bool,
  currentOfferId: number,
  hoveredOfferId: number,
  cities: arrayOf(shape({
    name: string.isRequired,
    location: shape({
      x: number.isRequired,
      y: number.isRequired,
    }).isRequired,
  })),
  offers: arrayOf(OfferPropType),
  favoriteOffers: arrayOf(OfferPropType),
  offersNearby: arrayOf(OfferPropType),
  reviews: array,
  user: UserPropType,
  handlePlaceTitleClick: func.isRequired,
  submitReview: func.isRequired,
  setSelectedCity: func.isRequired,
  setSortingType: func.isRequired,
  setHoveredOfferId: func.isRequired,
  setFavoriteOfferStatus: func.isRequired,
  login: func.isRequired,
  sortingType: string.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: UserSelectors.getIsAuthSelector(state),
  user: UserSelectors.getUserSelector(state),
  cities: DataSelectors.getCitiesSelector(state),
  favoriteOffers: DataSelectors.getFavoriteOffersSelector(state),
  offersNearby: DataSelectors.getNearbyOffersSelector(state),
  offers: DataSelectors.getOffersByCityAndSortedSelector(state),
  reviews: DataSelectors.getReviewsSelector(state),
  selectedCity: AppSelectors.getSelectedCitySelector(state),
  currentOfferId: AppSelectors.getcurrentOfferIdSelector(state),
  hoveredOfferId: AppSelectors.gethoveredOfferIdSelector(state),
  sortingType: AppSelectors.getSortingTypeSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  handlePlaceTitleClick: (id) => {
    dispatch(DataOperations.loadNearbyOffers(id))
      .then(() => dispatch(DataOperations.loadReviews(id)))
      .then(() => dispatch(AppActionCreators.setCurrentOfferId(id)));
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

