import * as React from 'react';
import {SORT_OPTIONS} from '../../data/constants';
import {Subtract} from "utility-types";


interface Props {}

interface State {
  isOpen: boolean;
}

interface InjectingProps {
  options: Array<string>;
  isOpen: boolean;
  handleListOpen: () => void;
}

const withSortingSelect = (Component) => {
  type P = React.ComponentProps<typeof Component>
  type T = Props & Subtract<P, InjectingProps>;

  return class WithSortingSelect extends React.PureComponent<T, State> {
    private options: Array<string>;

    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };

      this.options = SORT_OPTIONS;
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

