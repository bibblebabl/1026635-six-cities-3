import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {arrayOf, bool, func, number, shape, string} from 'prop-types';

// Components
import Main from '../main/main';
import Property from '../property/property';

// Redux
import * as DataSelectors from '../../redux/data/selectors';
import * as AppSelectors from '../../redux/app/selectors';
import {ActionCreators as AppActionCreators} from '../../redux/app/actions';
import {MAX_RECOMMENDATIONS} from '../../data/constants';

class App extends PureComponent {
  renderApp() {
    const {currentOfferId, cities, setSelectedCity, sethoveredOfferId, setSortingType, setcurrentOfferId} = this.props;

    if (!currentOfferId) {
      return (
        <Main
          {...this.props}
          cities={cities}
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
    // const {offers, reviews} = this.props;
    // const recommendedOffers = [...offers].splice(0, MAX_RECOMMENDATIONS);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          {/* <Route exact path="/dev-offer">
            <Property
              offer={offers[0]}
              reviews={reviews}
              recommendedOffers={recommendedOffers}
            />
          </Route> */}
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
  currentOfferId: number,
  hoveredOfferId: number,
  cities: arrayOf(string.isRequired),
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
  })),
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
  })),
  setcurrentOfferId: func,
  setSelectedCity: func,
  setSortingType: func,
  sethoveredOfferId: func,
};

const mapStateToProps = (state) => ({
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
  setSortingType: AppActionCreators.setSortingType
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

