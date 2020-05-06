import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from './components/layouts/Navbar';
import Country from './components/countries/Country';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import CountryState from './context/country/CountryState';
import AlertState from './context/alert/AlertState';

const App = () => {
  // eslint-disable-next-line
  const [countries, setCountries] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [world, setWorld] = useState({});
  useEffect(() => {
    const world = async () => {
      const res = await axios.get('https://api.covid19api.com/world/total');
      setWorld(res.data);
    };
    world();
    const func = async () => {
      setLoading(true);
      const res = await axios.get('https://api.covid19api.com/countries');
      setCountries(res.data);
      setLoading(false);
    };
    func();
  }, []);

  return (
    <CountryState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={(props) => <Home world={world} />}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/country/:slug' component={Country} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </CountryState>
  );
};

export default App;
