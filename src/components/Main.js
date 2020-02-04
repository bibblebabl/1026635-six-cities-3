import React from 'react';

// eslint-disable-next-line react/prop-types
const Main = ({data}) => {
  return (
    <div>
      <ul>
        {/* eslint-disable-next-line react/prop-types */}
        {data.map((el) =>
          <li key={el.id}>
            <span>{el.country}</span> // <span>{el.city}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Main;
