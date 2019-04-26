import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

import OneDimension from './components/oneDimension';
import Comparisonplot from './components/comparisonPlot';
import Contourplot from './components/contourPlot';
import DiffPlot from './components/diffPlot';
import * as serviceWorker from './serviceWorker';
// import { __esModule } from 'react-plotly.js/factory';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<OneDimension />, document.getElementById('onedimension'));
ReactDOM.render(<Comparisonplot />, document.getElementById('comparisonplot'));
ReactDOM.render(<Contourplot />, document.getElementById('contourplot'));
ReactDOM.render(<DiffPlot />, document.getElementById('diffPlot'));

serviceWorker.unregister();

