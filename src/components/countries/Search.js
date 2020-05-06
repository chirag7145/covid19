import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CountryContext from '../../context/country/countryContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const countryContext = useContext(CountryContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please, type something!', 'light');
    } else {
      const slug = text
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        // eslint-disable-next-line
        .replace(/[^\w\-]+/g, '')
        // eslint-disable-next-line
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
      countryContext.searchCountries(slug);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Countries...'
          value={text}
          onChange={onChange}
        ></input>
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {countryContext.countrysearch.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={countryContext.clearCountries}
        >
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
  searchCountries: PropTypes.func.isRequired,
  clearCountries: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
