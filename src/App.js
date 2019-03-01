import React, { Component } from 'react';
import '@babel/polyfill';

import { GlobalStyles } from './global/globalStyles';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <div className='text'>123</div>
      </React.Fragment>
    );
  }
}

export default App;
