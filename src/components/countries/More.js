import React from 'react';
import PropTypes from 'prop-types';
import MoreItem from './MoreItem';

const More = ({ countries }) => {
  countries = countries.length >= 10 ? countries.slice(-10) : countries;

  return countries.map((country) => (
    <MoreItem country={country} key={country.Date} />
  ));
};

More.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default More;
