import * as React from 'react';

// components
import Reviews from '../reviews/reviews';
import Header from '../header/header';
import PlaceCard from '../place-card/place-card';
import ReviewsForm from '../reviews-form/reviews-form';
import Map from '../map/map';

// hocs
import withForm from '../../hocs/with-form/with-form';

import {getOffersLocations} from '../../utils';
import {PROPERTY_TYPES} from '../../data/map';

import {UserType, ReviewType, OfferType} from '../../types/types';

interface Props {
  offer: OfferType;
  user: UserType;
  reviews: Array<ReviewType>;
  offersNearby: Array<OfferType>;
  onFavoriteOfferStatus: (id: number, isFavorite: boolean) => void;
  onTitleClick: () => void;
  onReviewSubmit: () => void;
}

const Property: React.FunctionComponent<Props> = ({
  offer,
  user,
  reviews,
  offersNearby,
  onFavoriteOfferStatus,
  onTitleClick,
  onReviewSubmit,
}) => {
  const {
    id,
    bedrooms,
    city,
    description,
    facilities,
    host,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
  } = offer;

  const fixedPropertyRating = rating;
  const propertyType = PROPERTY_TYPES[type];

  const recommendedOffersLocation = getOffersLocations(offersNearby);
  const ReviewsFormWithForm = withForm(ReviewsForm);

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
                <button
                  className={`
                    property__bookmark-button ${isFavorite ? `property__bookmark-button--active` : ``} button`}
                  type="button"
                  onClick={() => onFavoriteOfferStatus(id, isFavorite)}
                >
                  <svg className="property__bookmark-icon place-card__bookmark-icon" width={31} height={33}>
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
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
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

                {
                  user &&
                    <ReviewsFormWithForm
                      id={id}
                      onSubmit={onReviewSubmit}
                      isSubmiting={false}
                    />
                }

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
                offersNearby.map((offerElement) =>
                  <PlaceCard
                    cardType="near-places"
                    key={offerElement.id}
                    offer={offerElement}
                    onMouseOver={() => {}}
                    onTitleClick={onTitleClick}
                    onFavoriteOfferStatus={onFavoriteOfferStatus}
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

export default Property;
