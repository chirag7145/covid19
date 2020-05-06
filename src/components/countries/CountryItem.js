import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryItem = ({ country: { Country, ISO2, Slug } }) => {
  return (
    <div className='card text-center'>
      <img
        src={`https://www.countryflags.io/${ISO2}/shiny/64.png`}
        alt=''
        style={{ width: '100px' }}
      ></img>
      <h4 className='lead' style={{ margin: '-10px' }}>
        {Country}
      </h4>
      <div>
        <Link to={`/country/${Slug}`} className='btn btn-dark btn-sm my-1'>
          More....
        </Link>
      </div>
    </div>
  );
};

CountryItem.propTypes = {
  country: PropTypes.object.isRequired,
};

export default CountryItem;
