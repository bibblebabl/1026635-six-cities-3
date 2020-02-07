import React from 'react';
import PropTypes from 'prop-types';

const Main = ({data}) => {
  return (
    <div>
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
  }))
};

export default Main;
