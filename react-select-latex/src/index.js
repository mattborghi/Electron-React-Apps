import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomizedSelects from './App';
import * as serviceWorker from './serviceWorker';
import AppComponent from './Children.jsx';
import AppComponent2 from './Childrenv2.jsx';
import SelectElem from './childrenv2Select';
import App2 from './App2';
import App3 from './App3';

ReactDOM.render(<CustomizedSelects />, document.getElementById('root'));
ReactDOM.render(<AppComponent />, document.getElementById('root2'));
ReactDOM.render(<AppComponent2 />, document.getElementById('root3'));
ReactDOM.render(<SelectElem />, document.getElementById('root4'));
ReactDOM.render(<App2 />, document.getElementById('root5'));
ReactDOM.render(<App3 />, document.getElementById('root6'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
