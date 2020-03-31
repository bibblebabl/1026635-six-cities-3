import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import offers from '../../mocks/tests/offers';

const [offer] = offers;

Enzyme.configure({adapter: new Adapter()});

import PlaceCard from './place-card';

it(`<PlaceCard /> mouse over on card should pass to the callback data-object of offer`, () => {
  const onMouseOver = jest.fn();
  const onTitleClick = jest.fn();

  const onMouseOverData = offer.id;

  const component = shallow(
      <PlaceCard
        offer={offer}
        onMouseOver={onMouseOver}
        onTitleClick={onTitleClick}
      />
  );

  component.find(`.place-card`).simulate(`mouseover`);
  component.find(`.place-card__name a`).simulate(`click`);

  expect(onMouseOver).toHaveBeenCalledTimes(1);
  expect(onTitleClick).toHaveBeenCalledTimes(1);

  expect(onMouseOver.mock.calls[0][0]).toEqual(onMouseOverData);
});
