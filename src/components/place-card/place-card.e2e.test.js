import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './place-card';
import offers from '../../mocks/tests/offers';
import {Link} from 'react-router-dom';

const [offer] = offers;

Enzyme.configure({adapter: new Adapter()});


it(`<PlaceCard /> mouse over on card should pass to the callback data-object of offer`, () => {
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
  component.find(Link).simulate(`click`);

  expect(onMouseOver).toHaveBeenCalledTimes(1);
  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
