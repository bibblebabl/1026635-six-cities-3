import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import {rentData} from './data';

ReactDOM.render(<App data={rentData} />, document.getElementById(`root`));

