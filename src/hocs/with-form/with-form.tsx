import * as React from 'react';

export const FormValidValues = {
  reviewLength: {
    MIN: 30,
    MAX: 150
  },
  ratingValue: {
    MIN: 0
  }
};

type Review = {
  comment: string,
  rating: number
}

interface Props {
  id: number;
  onSubmit: (id: number, review: Review) => void;
  isSubmiting: boolean;
}

interface State {
  review: string;
  rating: string | number;
  formIsValid: boolean;
}

const withForm = (Component) => {
  class WithForm extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        review: ``,
        rating: `0`,
        formIsValid: false
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();

      const {id, onSubmit} = this.props;
      const {review, rating} = this.state;

      onSubmit(id, {
        comment: review,
        rating: Number(rating)
      });

      this.reset();
    }

    handleInputChange(event) {
      const {name, value} = event.target;

      this.setState({
        [name]: value
      } as Pick<State, keyof State>,
      this.validate);
    }

    reset() {
      this.setState({
        review: ``,
        rating: `0`
      }, this.validate);
    }

    validate() {
      const {rating, review} = this.state;
      const {reviewLength, ratingValue} = FormValidValues;

      const reviewIsValid = review.length >= reviewLength.MIN && review.length <= reviewLength.MAX;
      const formIsValid = reviewIsValid && rating > ratingValue.MIN;

      this.setState({formIsValid});
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          onSubmit={this.handleSubmit}
          onInputChange={this.handleInputChange}
        />
      );
    }
  }

  return WithForm;
};

export default withForm;

