import React from 'react';
import PropTypes from 'prop-types';


const PlaceCard = ({
  offer: {
    id,
    title,
    image,
    price,
    rating,
    type,
    isPremium,
    isFavorite
  },
  onMouseOver,
  onTitleClick
}) => {

  const fixedRating = rating.toFixed();

  return (
    <article className="cities__place-card place-card" onMouseOver={() => onMouseOver({id, title})} >
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
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
          <a href="#" onClick={() => onTitleClick(id)}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const {arrayOf, bool, func, number, shape, string} = PropTypes;

PlaceCard.propTypes = {
  offer: shape({
    bedrooms: number.isRequired,
    city: string.isRequired,
    description: arrayOf(string.isRequired).isRequired,
    facilities: arrayOf(string.isRequired).isRequired,
    host: shape({
      avatar: string.isRequired,
      name: string.isRequired
    }).isRequired,
    id: number.isRequired,
    image: string.isRequired,
    images: arrayOf(string.isRequired).isRequired,
    isFavorite: bool.isRequired,
    isPremium: bool.isRequired,
    maxAdults: number.isRequired,
    price: number.isRequired,
    rating: number.isRequired,
    title: string.isRequired,
    type: string.isRequired
  }).isRequired,
  onTitleClick: func,
  onMouseOver: func,
};

export default PlaceCard;
