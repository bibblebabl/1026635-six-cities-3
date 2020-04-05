import React from 'react';
import {array, arrayOf, func} from 'prop-types';

import Reviews from '../reviews/reviews';
import Header from '../header/header';
import PlaceCard from '../place-card/place-card';

import Map from '../map/map';
import {getOffersLocations} from '../../utils';

import {PROPERTY_TYPES} from '../../data/map';

import {userPropType, reviewPropType, offerPropType} from '../../prop-types/prop-types';

const Property = ({
  user,
  reviews,
  recommendedOffers,
  offer: {
    bedrooms,
    city,
    description,
    facilities,
    host,
    // id,
    // image,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
  },
}) => {
  const fixedPropertyRating = rating;
  const propertyType = PROPERTY_TYPES[type];

  const recommendedOffersLocation = getOffersLocations(recommendedOffers);

  return (
    <div className="page">
      <Header user={user} />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((img) => {
                  return (
                    <div key={img} className="property__image-wrapper">
                      <img className="property__image" src={img} alt="Photo studio" />
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ${isFavorite ? `property__bookmark-button--active` : ``} button`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${fixedPropertyRating * 20}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{fixedPropertyRating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {/* need apply capitalize */}
                  {propertyType}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    facilities.map((facility) => (
                      <li key={facility} className="property__inside-item">
                        {facility}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatar} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">

                <Reviews reviews={reviews} />

                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars" type="radio" />
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width={37} height={33}>
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars" type="radio" />
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width={37} height={33}>
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars" type="radio" />
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width={37} height={33}>
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars" type="radio" />
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width={37} height={33}>
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                    <input className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star" type="radio" />
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width={37} height={33}>
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </label>
                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``} />
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <Map
            className="property__map"
            offersLocations={recommendedOffersLocation}
            selectedCity={city}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                recommendedOffers.map((offerElement) =>
                  <PlaceCard
                    cardType="near-places"
                    key={offerElement.id}
                    offer={offerElement}
                    onMouseOver={() => {}}
                    onTitleClick={() => {}}
                  />
                )
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Property.propTypes = {
  offer: offerPropType,
  reviews: arrayOf(reviewPropType),
  user: userPropType,
  recommendedOffers: array,
  handlePlaceCardMouseOver: func,
  handleTitleClick: func,
};

export default Property;
