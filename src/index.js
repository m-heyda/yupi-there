import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './App';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Roboto:n4,n7', 'Bai Jamjuree:n5,n6'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
