import React, { useContext } from 'react';
import CountryItem from './CountryItem';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';

import CountryContext from '../../context/country/countryContext';

const Countries = () => {
  const countryContext = useContext(CountryContext);

  const countries =
    countryContext.countrysearch.length > 0
      ? countryContext.countrysearch
      : countryContext.countries;
  if (countryContext.loading) {
    return <Spinner />;
  } else {
    countries.sort((a, b) => (a.Country > b.Country ? 1 : -1));
    return (
      <div style={CountryStyle}>
        {countries.map((country) => (
          <CountryItem key={country.ISO2} country={country} />
        ))}
      </div>
    );
  }
};

const CountryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Countries;
