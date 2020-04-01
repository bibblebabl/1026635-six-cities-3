import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, bool, func, number, shape, string} from 'prop-types';

// Components
import Main from '../main/main';
import Property from '../property/property';

// Redux
import * as selectors from '../../redux/selectors';
import {ActionCreators} from '../../redux/actions';
import {MAX_RECOMMENDATIONS} from '../../data/constants';

class App extends PureComponent {
  renderApp() {
    const {currentOfferId, setSelectedCity, sethoveredOfferId, setSortingType, setcurrentOfferId} = this.props;

    if (!currentOfferId) {
      return (
        <Main
          {...this.props}
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
    const recommendedOffers = [...offers].splice(0, MAX_RECOMMENDATIONS);

    if (offer) {
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
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  selectedCity: string,
  currentOfferId: number,
  hoveredOfferId: number,
  offers: arrayOf(shape({
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
  }).isRequired),
  reviews: arrayOf(shape({
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
  }).isRequired).isRequired,
  setcurrentOfferId: func,
  setSelectedCity: func,
  setSortingType: func,
  sethoveredOfferId: func,
};

const mapStateToProps = (state) => ({
  offers: selectors.getOffersSelector(state),
  reviews: selectors.getReviewsSelector(state),
  selectedCity: selectors.getSelectedCitySelector(state),
  currentOfferId: selectors.getcurrentOfferIdSelector(state),
  hoveredOfferId: selectors.gethoveredOfferIdSelector(state),
  sortingType: selectors.getSortingTypeSelector(state)
});

const mapDispatchToProps = {
  setcurrentOfferId: ActionCreators.setcurrentOfferId,
  sethoveredOfferId: ActionCreators.sethoveredOfferId,
  setSelectedCity: ActionCreators.setSelectedCity,
  setSortingType: ActionCreators.setSortingType
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

