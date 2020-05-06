import React from 'react';

const World = ({ world: { TotalConfirmed, TotalDeaths, TotalRecovered } }) => {
  return (
    <div className='text-center'>
      <div className='badge badge-light'>
        Total Confirmed : {TotalConfirmed}
      </div>
      <div className='badge badge-danger'>Total Deaths : {TotalDeaths}</div>
      <div className='badge badge-success'>
        Total Recovered : {TotalRecovered}
      </div>
    </div>
  );
};

export default World;
