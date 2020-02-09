import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main';

Enzyme.configure({adapter: new Adapter()});

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

describe(`<Main />`, () => {
  it(`should title be clicked`, () => {
    const clickFunction = jest.fn();

    const component = shallow(
        <Main
          {...defaultProps}
          onTitleClick={clickFunction}
        />
    );

    component.find(`.offers__title`).simulate(`click`);

    expect(clickFunction).toHaveBeenCalled();
  });
});
