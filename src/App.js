import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyles } from './global/globalStyles';
import '@babel/polyfill';
import Homepage from './views/Homepage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />

        <Router>
          <React.Fragment>
            <Route path='/' exact component={Homepage} />
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
