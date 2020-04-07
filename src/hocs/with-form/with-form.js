import React, {PureComponent} from 'react';
import {number, func, bool} from 'prop-types';

export const FormValidValues = {
  reviewLength: {
    MIN: 30,
    MAX: 150
  },
  ratingValue: {
    MIN: 0
  }
};

const withForm = (Component) => {
  class WithForm extends PureComponent {
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
      }, this.validate);
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

  WithForm.propTypes = {
    id: number,
    onSubmit: func,
    isSubmiting: bool,
  };

  return WithForm;
};

export default withForm;

