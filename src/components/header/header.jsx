import React from 'react';
import {Link} from 'react-router-dom';

import {userPropType} from '../../prop-types/prop-types';

import Routes from '../../history/routes';

const Header = ({
  user
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={Routes.MAIN}
            >
              <img className="header__logo" src="./img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={user ? Routes.FAVORITES : Routes.SIGN_IN}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{user ? user.email : `Sign In`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: userPropType
};

export default Header;
