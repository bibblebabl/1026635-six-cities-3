import React, {PureComponent} from 'react';
import {string, func} from 'prop-types';
import {sortOptions} from '../../data/constants';


class Sorting extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.options = sortOptions;
    this.handleListOpen = this.handleListOpen.bind(this);
  }

  handleListOpen() {
    this.setState((prevState) => ({isOpen: !prevState.isOpen}));
  }

  render() {
    const {isOpen} = this.state;
    const {sortingType = `Popular`, onSortChange} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex={0} onClick={this.handleListOpen}>
          {sortingType}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``} `}>
          {
            this.options.map((option) => (
              <li
                key={option}
                className={`places__option ${option === sortingType ? `places__option--active` : ``}`}
                tabIndex={0}
                onClick={() => {
                  this.handleListOpen();
                  onSortChange(option);
                }}
              >{option}</li>
            ))
          }
        </ul>
        {/*
        <select className="places__sorting-type" id="places-sorting">
          <option className="places__option" value="popular" selected="">Popular</option>
          <option className="places__option" value="to-high">Price: low to high</option>
          <option className="places__option" value="to-low">Price: high to low</option>
          <option className="places__option" value="top-rated">Top rated first</option>
        </select>
      */}
      </form>
    );
  }
}

Sorting.propTypes = {
  sortingType: string,
  onSortChange: func
};

export default Sorting;
