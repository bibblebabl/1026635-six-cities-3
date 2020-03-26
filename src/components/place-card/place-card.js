import React from 'react';
import PropTypes from 'prop-types';

const PlaceCard = ({
  cardType = `cities`,
  offer,
  onMouseOver,
  onTitleClick
}) => {
  const {id, title, image, price, rating, type, isPremium, isFavorite} = offer;

  const fixedRating = rating.toFixed();

  const articleTitle = cardType === `cities` ? `cities__place-card` : `near-places__card`;
  const secondenaryClassName = cardType === `cities` ? `cities` : `near-places`;

  return (
    <article
      className={`${articleTitle} place-card`}
      onMouseOver={() => onMouseOver({id, title})}
    >
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className={`${secondenaryClassName}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={image} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${fixedRating * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={() => onTitleClick(offer.id)}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const {arrayOf, bool, func, number, shape, string} = PropTypes;

PlaceCard.propTypes = {
  cardType: string,
  offer: shape({
    id: number.isRequired,
    city: shape({
      name: string.isRequired,
      location: shape({
        x: number.isRequired,
        y: number.isRequired,
      }).isRequired,
    }).isRequired,
    title: string.isRequired,
    image: string.isRequired,
    description: string.isRequired,
    images: arrayOf(string.isRequired).isRequired,
    facilities: arrayOf(string.isRequired).isRequired,
    price: number.isRequired,
    rating: number.isRequired,
    type: string.isRequired,
    isFavorite: bool.isRequired,
    isPremium: bool.isRequired,
    bedrooms: number.isRequired,
    maxAdults: number.isRequired,
    host: shape({
      name: string.isRequired,
      avatar: string.isRequired,
    }).isRequired,
  }).isRequired,
  onTitleClick: func,
  onMouseOver: func,
};

export default PlaceCard;
