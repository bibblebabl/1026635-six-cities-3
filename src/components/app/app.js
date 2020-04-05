import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, func, number, shape, string, array} from 'prop-types';

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
import {Operations as UseOperations} from '../../redux/user/actions';

import UserPropType from '../../prop-types/user';
import OfferPropType from '../../prop-types/offer';

import {MAX_RECOMMENDATIONS} from '../../data/constants';


class App extends PureComponent {
  renderApp() {
    const {currentOfferId, cities, user, setSelectedCity, sethoveredOfferId, setSortingType, setcurrentOfferId} = this.props;

    if (!currentOfferId) {
      return (
        <Main
          {...this.props}
          cities={cities}
          user={user}
          currentOfferId={currentOfferId}
          handlePlaceCardMouseOver={sethoveredOfferId}
          handleTitleClick={setcurrentOfferId}
          handleCityNameClick={setSelectedCity}
          handleChangeSortingType={setSortingType}
        />
      );
    }

    const {offers, reviews} = this.props;

    const offer = offers.find((el) => el.id === currentOfferId);

    if (offer) {
      const recommendedOffers = [...offers].splice(0, MAX_RECOMMENDATIONS);
      return <Property offer={offer} reviews={reviews} recommendedOffers={recommendedOffers} />;
    }

    return null;
  }

  render() {
    const {offers, reviews} = this.props;
    const recommendedOffers = [...offers].splice(0, MAX_RECOMMENDATIONS);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <Property
              offer={offers[0]}
              reviews={reviews}
              recommendedOffers={recommendedOffers}
            />
          </Route>
          <Route exact path='/login'>
            <SignIn onSubmit={() => {}} />
          </Route>
        </Switch>
      </BrowserRouter>
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
  authorizationStatus: string.isRequired,
  currentOfferId: number,
  hoveredOfferId: number,
  cities: arrayOf(string.isRequired),
  offers: arrayOf(OfferPropType),
  reviews: array,
  user: UserPropType,
  setcurrentOfferId: func.isRequired,
  setSelectedCity: func.isRequired,
  setSortingType: func.isRequired,
  sethoveredOfferId: func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: UserSelectors.getAuthStatusSelector(state),
  user: UserSelectors.getUserSelector(state),
  cities: DataSelectors.getCitiesSelector(state),
  offers: DataSelectors.getOffersByCityAndSortedSelector(state),
  reviews: DataSelectors.getReviewsSelector(state),
  selectedCity: AppSelectors.getSelectedCitySelector(state),
  currentOfferId: AppSelectors.getcurrentOfferIdSelector(state),
  hoveredOfferId: AppSelectors.gethoveredOfferIdSelector(state),
  sortingType: AppSelectors.getSortingTypeSelector(state)
});

const mapDispatchToProps = {
  setcurrentOfferId: AppActionCreators.setcurrentOfferId,
  sethoveredOfferId: AppActionCreators.sethoveredOfferId,
  setSelectedCity: AppActionCreators.setSelectedCity,
  setSortingType: AppActionCreators.setSortingType,
  login: UseOperations.login
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

