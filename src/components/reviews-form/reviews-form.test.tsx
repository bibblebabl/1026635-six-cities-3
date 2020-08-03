import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReviewsForm from './reviews-form';

const onInputChange = jest.fn();
const onSubmit = jest.fn();

const props = {
  isSubmiting: false,
  review: ``,
  rating: `5`,
  formIsValid: true,
  onInputChange,
  onSubmit,
};

it(`<ReviewsForm /> renders correctly`, () => {
  const component = renderer.create(
      <ReviewsForm
        {...props}
      />
  )
    .toJSON();
  expect(component).toMatchSnapshot();
});
