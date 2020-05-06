import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import More from './More';

import CountryContext from '../../context/country/countryContext';

const Country = ({ match }) => {
  const countryContext = useContext(CountryContext);

  useEffect(() => {
    countryContext.getCountry(match.params.slug);
    // eslint-disable-next-line
  }, []);

  var latest = null;

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
  const { loading, country } = countryContext;
  if (loading) return <Spinner />;
  else {
    latest =
      country !== undefined && country.length > 0
        ? country[country.length - 1]
        : null;
    console.log(latest);
    console.log(country);
    return (
      <Fragment>
        <Link to='/' className='btn btn-dark'>
          Back To Search
        </Link>
        {latest !== null && (
          <Fragment>
            {' '}
            <div className='card grid-2'>
              <div className='all-center'>
                <img
                  src={`https://www.countryflags.io/${latest.CountryCode}/shiny/64.png`}
                  alt=''
                  style={{ width: '150px' }}
                />
                <h1> {latest.Country}</h1>
              </div>
              <div>
                <ul style={{ margin: '20px' }}>
                  <li>
                    <Fragment>
                      <p>
                        <strong>Total Confirmed</strong> : {latest.Confirmed}
                      </p>
                    </Fragment>
                  </li>
                  <li>
                    <Fragment>
                      <p>
                        <strong>Total Active</strong> : {latest.Active}
                      </p>
                    </Fragment>
                  </li>
                  <li>
                    <Fragment>
                      <p>
                        <strong>Total Recovered</strong> : {latest.Recovered}
                      </p>
                    </Fragment>
                  </li>
                  <li>
                    <Fragment>
                      <p>
                        <strong>Total Deaths</strong> : {latest.Deaths}
                      </p>
                    </Fragment>
                  </li>
                  <li>
                    <Fragment>
                      <h3 className='lead p-5 m-5'>
                        <strong>Last Updated </strong> :{' '}
                        {month[parseInt(latest.Date.slice(5, 7)) - 1]}{' '}
                        {parseInt(latest.Date.slice(8, 10))},{' '}
                        {parseInt(latest.Date.slice(0, 4))}
                      </h3>
                    </Fragment>
                  </li>
                </ul>
              </div>
            </div>
            <More countries={country} />
          </Fragment>
        )}
      </Fragment>
    );
  }
};

Country.propTypes = {
  loading: PropTypes.bool.isRequired,
  getCountry: PropTypes.func.isRequired,
  country: PropTypes.object.isRequired,
};

export default Country;
