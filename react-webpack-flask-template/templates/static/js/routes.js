import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import history from './history';
import Home from './components/Home';
import Second from './components/Second';
// import more components
export default (
    <HashRouter history={history}>
     <div>
      <Route path='/' component={Home} />
      <Route path='/second' component={Second} />
     </div>
    </HashRouter>
);
