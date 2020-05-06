import React, { Fragment } from 'react';
import Search from '../countries/Search';
import Countries from '../countries/Countries';
import Alert from '../layouts/Alert';
import World from '../countries/World';

const Home = ({ world }) => {
  return (
    <Fragment>
      <World world={world} />
      <Alert />
      <Search />
      <Countries />
    </Fragment>
  );
};

export default Home;
