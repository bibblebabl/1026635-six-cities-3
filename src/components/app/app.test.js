import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

const defaultProps = {
  data: [
    {
      "id": 962,
      "city": `Lushuihe`,
      "country": `China`
    }, {
      "id": 605,
      "city": `Nong Ruea`,
      "country": `Thailand`
    }
  ]
};

it(`<App /> renders correctly`, () => {
  const component = renderer.create(<App {...defaultProps} />).toJSON();

  expect(component).toMatchSnapshot();
});
