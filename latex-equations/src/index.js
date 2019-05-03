import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './App';
import * as serviceWorker from './serviceWorker';
import Example2 from './Components/without-delim';
import Example3 from './Components/block-ascii';
import Example4 from './Components/inline-latex';
import Example5 from './Components/block-latex';

ReactDOM.render(<Example title="Inline display of AsciiMath wrapped in delimiters" />, document.getElementById('root'));
ReactDOM.render(<Example2 title="Inline display of AsciiMath without delimiters"/>, document.getElementById('root2'));
ReactDOM.render(<Example3 title="Block display of AsciiMath"/>, document.getElementById('root3'));
ReactDOM.render(<Example4 title="Inline display of LaTeX"/>, document.getElementById('root4'));
ReactDOM.render(<Example5 title="Block display of LaTeX"/>, document.getElementById('root5'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
