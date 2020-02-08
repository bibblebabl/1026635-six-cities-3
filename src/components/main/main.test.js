import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

const cities = [
  {
    "id": 962,
    "city": `Lushuihe`,
    "country": `China`
  }, {
    "id": 605,
    "city": `Nong Ruea`,
    "country": `Thailand`
  }
];

it(`<Main /> renders correctly`, () => {
  const component = renderer.create(<Main data={cities} />).toJSON();

  expect(component).toMatchSnapshot();
});
