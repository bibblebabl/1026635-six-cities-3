import React from 'react';
import Main from '../main/main';

const onTitleClick = () => {};

const App = (props) => {
  return (
    <Main {...props} onTitleClick={onTitleClick}/>
  );
};

export default App;
