import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';

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

it(`<Main /> renders correctly`, () => {
  const component = renderer.create(<Main {...defaultProps} />).toJSON();

  expect(component).toMatchSnapshot();
});
