/* @flow */

import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Component/test.jsx'
import './Component/style.css'

ReactDOM.render(
  <div className="wrapper">
    <div className="button-container">
      <App/>
    </div>
    <div className="button">
      <Test />
    </div>
  </div>
, window.root);

// render(App);



/* $FlowFixMe */
if (module.hot) {
  /* $FlowFixMe */
  module.hot.accept('./App', () => render(App));
}
