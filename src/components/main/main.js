import React from 'react';
import PropTypes from 'prop-types';

const Main = ({data, onTitleClick}) => {
  return (
    <div className="offers">
      <h1 onClick={onTitleClick} className="offers__title">Предложения аренды</h1>
      <ul>
        {data.map((el) =>
          <li key={el.id}>
            <span>{el.country}</span> // <span>{el.city}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    country: PropTypes.string
  })),
  onTitleClick: PropTypes.func
};

export default Main;
