import React from 'react';
import Header from '../header/header';
import {userPropType, offerPropType} from '../../prop-types/prop-types';
import {arrayOf, func} from 'prop-types';
import {getCities} from '../../utils';
import PlaceCard from '../place-card/place-card';

const Favorites = ({
  favoriteOffers,
  handleTitleClick,
  handleFavoriteOfferStatus,
  user
}) => {

  const favoriteOffersByCity = getCities(favoriteOffers).map((city)=> {
    return {
      city,
      offers: favoriteOffers.filter((offer) => offer.city.name === city.name)
    };
  });

  return (
    <div className="page">

      <Header user={user} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                favoriteOffersByCity.map((offersByCity, index) => {
                  return (
                    <li key={`${offersByCity.city}-${index}`} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{offersByCity.city.name}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {
                          offersByCity.offers.map((offer) => {
                            return (
                              <PlaceCard
                                cardType='favorites'
                                key={`favorites-${offer.id}`}
                                offer={offer}
                                onMouseOver={() => {}}
                                onTitleClick={handleTitleClick}
                                onFavoriteOfferStatus={handleFavoriteOfferStatus}
                                imgWidth={150}
                                imgHeight={110}
                              />
                            );
                          })
                        }
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  favoriteOffers: arrayOf(offerPropType),
  handleFavoriteOfferStatus: func,
  handleTitleClick: func,
  user: userPropType
};

export default Favorites;
