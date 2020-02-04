import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import {rentData} from './data';

ReactDOM.render(<App data={rentData} />, document.getElementById(`root`));

