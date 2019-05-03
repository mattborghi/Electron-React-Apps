import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter } from 'react-router-dom';
import PageOne from './page-one.jsx'
import PageTwo from './page-two.jsx'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={PageOne} />
        <Route path="/second" component={PageTwo} />
      </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(
//         <PageTwo />
//     , document.getElementById('root')
//  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


