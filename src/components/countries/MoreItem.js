import React from 'react';
import PropTypes from 'prop-types';

const MoreItem = ({ country }) => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className='card text-center'>
      <div className='lead'>
        {month[parseInt(country.Date.slice(5, 7)) - 1]}{' '}
        {parseInt(country.Date.slice(8, 10))},{' '}
        {parseInt(country.Date.slice(0, 4))}
      </div>
      <div className='badge badge-dark'>Confirmed : {country.Confirmed}</div>
      <div className='badge badge-light'>Active : {country.Active}</div>
      <div className='badge badge-success'>Recovered : {country.Recovered}</div>
      <div className='badge badge-danger'>Deaths : {country.Deaths}</div>
    </div>
  );
};

MoreItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default MoreItem;
