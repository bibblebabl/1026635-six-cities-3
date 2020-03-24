import React, {Component} from 'react';
import {array, arrayOf, bool, func, number, shape, string} from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import Property from '../property/property';

// Redux
import {offersSelector, reviewsSelector} from '../../redux/selectors';
import {ActionCreators} from '../../redux/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null
    };

    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handlePlaceCardMouseOver = this.handlePlaceCardMouseOver.bind(this);
  }


  handlePlaceCardMouseOver() {}

  renderApp() {
    const {currentOffer} = this.state;
    const {setCurrentOffer} = this.props;

    if (!currentOffer) {
      return (
        <Main
          {...this.props}
          handlePlaceCardMouseOver={this.handlePlaceCardMouseOver}
          handleTitleClick={setCurrentOffer}
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
  }).isRequired).isRequired,
  setCurrentOffer: func,
};

const mapStateToProps = (state) => ({
  offers: offersSelector(state),
  reviews: reviewsSelector(state)
});

const mapDispatchToProps = {
  setCurrentOffer: ActionCreators.setCurrentOffer
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

