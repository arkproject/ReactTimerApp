import React from 'react';
import { Navigation } from 'Navigation';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Timer } from 'Timer';
import { Countdown } from 'Countdown';

export const Main = () => (
    <Router>
    <div>
      <Navigation />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <Route exact path="/" component={Timer} />
          <Route path='/Countdown' component={Countdown} />
        </div>
      </div>
    </div>
  </Router>
  );
