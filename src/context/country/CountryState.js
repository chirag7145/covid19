import React, { useReducer } from 'react';
import axios from 'axios';
import CountryContext from './countryContext';
import CountryReducer from './countryReducer';

import {
  SEARCH_COUNTRIES,
  SET_LOADING,
  CLEAR_COUNTRIES,
  GET_COUNTRY,
  SET_WORLD,
} from '../types';

const CountryState = (props) => {
  const initialState = {
    countries: [],
    country: [],
    countrysearch: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);

  const World = async () => {
    const res = await axios.get('https://api.covid19api.com/world/total');
    dispatch({ type: SET_WORLD, payload: res.data });
  };

  const searchCountries = async (text) => {
    setLoading();
    const res = await axios.get(`https://api.covid19api.com/countries`);
    const obj = res.data.filter(function (country) {
      return country.Slug === text;
    });
    dispatch({ type: SEARCH_COUNTRIES, payload: obj });
  };

  const getCountry = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.covid19api.com/live/country/${text}`
    );
    dispatch({ type: GET_COUNTRY, payload: res.data });
  };

  const clearCountries = async () => {
    setLoading();
    const res = await axios.get('https://api.covid19api.com/countries');
    dispatch({ type: CLEAR_COUNTRIES, payload: res.data });
    // setCountries(res.data);
    // SetCountrysearch([]);
    // setLoading(false);
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        country: state.country,
        countrysearch: state.countrysearch,
        loading: state.loading,
        world: state.world,
        searchCountries,
        getCountry,
        clearCountries,
        World,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
