import * as React from 'react';
import {OfferType} from '../../types/types';
import {Link} from 'react-router-dom';
import Routes from '../../history/routes';

const ArticleTitles = {
  "cities": `cities__place-card`,
  "favorites": `favorites__card`,
  'near-places': `near-places__card`
};

const WrapperClassNames = {
  "cities": `cities__image-wrapper`,
  "favorites": `favorites__image-wrapper`,
  'near-places': `near-places__image-wrapper`
};

interface Props {
  offer: OfferType;
  onTitleClick: (id: number) => void;
  onMouseOver: (id: number) => void;
  onFavoriteOfferStatus: (id: number, isFavorite: boolean) => void;
  cardType?: string;
  imgHeight?: number;
  imgWidth?: number;
}

const PlaceCard: React.FunctionComponent<Props> = ({
  cardType = `cities`,
  offer,
  onMouseOver,
  onTitleClick,
  imgHeight,
  imgWidth,
  onFavoriteOfferStatus
}) => {
  const {id, title, image, price, rating, type, isPremium, isFavorite} = offer;

  const fixedRating: any = rating.toFixed();

  const articleTitle = ArticleTitles[cardType];
  const secondenaryClassName = WrapperClassNames[cardType];

  return (
    <article
      className={`${articleTitle} place-card`}
      onMouseOver={() => onMouseOver(id)}
    >
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className={`${secondenaryClassName} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={image}
            height={imgHeight || 200}
            width={imgWidth || 260}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            type="button"
            className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`}
            onClick={() => onFavoriteOfferStatus(id, isFavorite)}
          >
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

          <Link
            to={`${Routes.OFFER}/${offer.id}`}
            onClick={() => onTitleClick(offer.id)}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
