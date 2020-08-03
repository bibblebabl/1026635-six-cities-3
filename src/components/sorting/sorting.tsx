import * as React from 'react';
import {string, func, bool, arrayOf} from 'prop-types';

const Sorting = ({
  isOpen,
  options,
  sortingType = `Popular`,
  handleListOpen,
  onSortChange
}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleListOpen}>
        {sortingType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``} `}>
        {
          options.map((option) => (
            <li
              key={option}
              className={`places__option ${option === sortingType ? `places__option--active` : ``}`}
              tabIndex={0}
              onClick={() => {
                handleListOpen();
                onSortChange(option);
              }}
            >{option}</li>
          ))
        }
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  isOpen: bool,
  options: arrayOf(string.isRequired).isRequired,
  sortingType: string.isRequired,
  onSortChange: func.isRequired,
  handleListOpen: func.isRequired,
};

export default Sorting;
