import React from 'react';
import {PropTypes} from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main';
import Property from '../property/property';

const onTitleClick = () => {};

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main {...props} onTitleClick={onTitleClick}/>
        </Route>
        <Route exact path="/dev-offer">
          <Property offer={props.offers[0]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array
};

export default App;
