import React from 'react';
import renderer from 'react-test-renderer';
import Sorting from './sorting';

export const sortOptions = [
  `someSort1`,
  `someSort2`,
  `someSort3`,
  `someSort4`,
];

it(`<Sorting /> renders correctly`, () => {
  const props = {
    isOpen: false,
    sortingType: `someSort1`,
    options: sortOptions,
    handleListOpen: jest.fn(),
    onSortChange: jest.fn()
  };

  const component = renderer.create(
      <Sorting {...props} />
  ).toJSON();

  expect(component).toMatchSnapshot();
});
