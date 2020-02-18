import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import {offer} from './mock';

Enzyme.configure({adapter: new Adapter()});

import PlaceCard from './place-card';

it(`<PlaceCard /> renders correctly`, () => {
  const onMouseOver = jest.fn();
  const onTitleClick = jest.fn();

  const component = shallow(
      <PlaceCard
        offer={offer}
        onMouseOver={onMouseOver}
        onTitleClick={onTitleClick}
      />
  );

  component.find(`.place-card`).simulate(`mouseover`);
  component.find(`.place-card__name a`).simulate(`click`);

  expect(onMouseOver).toHaveBeenCalled();
  expect(onTitleClick).toHaveBeenCalled();
});
