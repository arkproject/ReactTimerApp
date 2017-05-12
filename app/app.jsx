import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter  as Router } from 'react-router-dom';
import { Main } from 'Main';


// Carico foundation
// require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');


ReactDOM.render(

  <div>
    <Router>
      <div>
        <Route path="/" component={Main} />
      </div>
    </Router>
  </div>,
  document.getElementById('app')); // eslint-disable-line
