import {
  SEARCH_COUNTRIES,
  SET_LOADING,
  CLEAR_COUNTRIES,
  GET_COUNTRY,
  SET_WORLD,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_WORLD:
      return {
        ...state,
        world: action.payload,
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countrysearch: action.payload,
        loading: false,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
        loading: false,
      };
    case CLEAR_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countrysearch: [],
        loading: false,
      };
    default:
      return state;
  }
};
