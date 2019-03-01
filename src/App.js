import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@babel/polyfill';

import { GlobalStyles } from './global/globalStyles';
import Homepage from './views/Homepage';
import Subpage from './views/Subpage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />

        <Router>
          <React.Fragment>
            <Route path='/' exact component={Homepage} />
            <Route path='/subpage' exact component={Subpage} />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
