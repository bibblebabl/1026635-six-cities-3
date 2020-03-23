import React from 'react';
import {PropTypes} from 'prop-types';

const Reviews = ({
  reviews
}) => {
  const reviewsLength = reviews.length;

  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsLength}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map(({
            id,
            rating,
            date,
            user,
            comment
          }) => {
            const fixedRating = rating * 20;
            const dateObject = new Date(date);

            return (
              <li key={id} className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
                  </div>
                  <span className="reviews__user-name">
                    {user.name}
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{width: `${fixedRating}%`}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    {comment}
                  </p>
                  <time className="reviews__time" dateTime={dateObject.toLocaleDateString(`en-GB`, {
                    year: `numeric`, month: `numeric`, day: `numeric`
                  })}>{dateObject.toLocaleDateString(`en-GB`, {
                      day: `numeric`, month: `long`
                    })}</time>
                </div>
              </li>
            );
          })
        }

      </ul>
    </>
  );
};

const {arrayOf, bool, number, shape, string} = PropTypes;

Reviews.propTypes = {
  reviews: arrayOf(shape({
    comment: string.isRequired,
    date: string.isRequired,
    id: number.isRequired,
    rating: number.isRequired,
    user: shape({
      avatarUrl: string.isRequired,
      id: number.isRequired,
      isPro: bool.isRequired,
      name: string.isRequired
    }).isRequired
  }).isRequired).isRequired
};

export default Reviews;
