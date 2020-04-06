import React from 'react';
import {sortOptions} from '../../data/constants';

const withSortingSelect = (Component) => {
  return class WithSortingSelect extends React.PureComponent {
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
      return (
        <Component
          {...this.props}
          options={this.options}
          isOpen={this.state.isOpen}
          handleListOpen={this.handleListOpen}
        />
      );
    }
  };
};

export default withSortingSelect;

