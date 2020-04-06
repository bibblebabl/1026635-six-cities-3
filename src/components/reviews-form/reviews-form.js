import React, {Fragment} from 'react';
import {bool, func, string} from 'prop-types';

const ratingValues = [
  {
    value: `5`,
    title: `perfect`
  },
  {
    value: `4`,
    title: `good`
  },
  {
    value: `3`,
    title: `not bad`
  },
  {
    value: `2`,
    title: `badly`
  },
  {
    value: `1`,
    title: `terribly`
  },
];

const ReviewsForm = ({
  isSubmiting,
  review,
  rating,
  formIsValid,
  onInputChange,
  onSubmit
}) => {
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          ratingValues.map((ratingElement) => {
            const id = `${ratingElement.value}-stars`;
            return (
              <Fragment key={id}>
                <input
                  id={id}
                  className="form__rating-input visually-hidden"
                  name="rating"
                  type="radio"
                  value={ratingElement.value}
                  onChange={onInputChange}
                  checked={ratingElement.value === rating}
                />
                <label
                  htmlFor={id}
                  title={ratingElement.title}
                  className="reviews__rating-label form__rating-label"
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </Fragment>
            );
          })
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        // defaultValue={review}
        value={review}
        onChange={onInputChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!formIsValid || isSubmiting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};


ReviewsForm.propTypes = {
  isSubmiting: bool,
  review: string,
  rating: string,
  formIsValid: bool,
  onInputChange: func,
  onSubmit: func
};

export default ReviewsForm;
