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

    if (offer) {
      return <Property offer={offer} />;
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <Property offer={this.props.offers[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
