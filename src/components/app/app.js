import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import Property from '../property/property';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null
    };

    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handlePlaceCardMouseOver = this.handlePlaceCardMouseOver.bind(this);
  }

  handleTitleClick(offerId) {
    this.setState({currentOffer: offerId});
  }

  handlePlaceCardMouseOver() {}

  renderApp() {
    const {currentOffer} = this.state;

    if (!currentOffer) {
      return (
        <Main
          {...this.props}
          handlePlaceCardMouseOver={this.handlePlaceCardMouseOver}
          handleTitleClick={this.handleTitleClick}
        />
      );
    }

    const offer = this.props.offers.find((el) => el.id === currentOffer);

    const recommendedOffers = [...this.props.offers].splice(2);


    if (offer) {
      return <Property offer={offer} reviews={this.props.reviews} recommendedOffers={recommendedOffers} />;
    }

    return null;
  }

  render() {
    const {offers, reviews} = this.props;

    const recommendedOffers = [...offers].splice(2);

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

const {array, arrayOf, bool, number, shape, string} = PropTypes;

App.propTypes = {
  offers: array,
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
  }).isRequired).isRequired
};

export default App;
