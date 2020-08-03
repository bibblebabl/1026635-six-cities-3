import * as React from 'react';

import withSortingSelect from './with-sorting-select';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

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

it(`SortingWithSelect HOC on .places__sorting-type changes state isOpen`, () => {
  const SortingWithSelect = withSortingSelect(Sorting);
  const component = Enzyme.mount(<SortingWithSelect />);

  component.find(`.places__sorting-type`).simulate(`click`);

  expect(component.instance().state.isOpen).toBe(true);

});
