import React from 'react';
import {bool, func} from 'prop-types';

import withSortingSelect from './with-sorting-select';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

const Sorting = ({
  handleListOpen
}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleListOpen}></span>
    </form>
  );
};

Sorting.propTypes = {
  handleListOpen: func.isRequired,
  isOpen: bool.isRequired
};

it(`SortingWithSelect HOC on .places__sorting-type changes state isOpen`, () => {
  const SortingWithSelect = withSortingSelect(Sorting);
  const component = Enzyme.mount(<SortingWithSelect />);

  component.find(`.places__sorting-type`).simulate(`click`);

  expect(component.instance().state.isOpen).toBe(true);

});
