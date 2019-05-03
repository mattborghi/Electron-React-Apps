/* @flow */

import * as React from 'react';
import ReactDOM from 'react-dom';
// import MonacoEditor from './App';

import './splitpane.js';

import SimpleAppBar from './Components/AppBar/appbar';
import MonacoEditor from './App.js';

// App Bar 
class AppBar extends React.Component {
    render() {
        return(
            <div>
                <SimpleAppBar/>
            </div>
        );
    }
}
const content = document.getElementById('appbar');
ReactDOM.render(<AppBar/>, content);


// Monaco Editor
// const render = Component => ReactDOM.render(<Component />, window.root);
// render(MonacoEditor);

// /* $FlowFixMe */
// if (module.hot) {
//   /* $FlowFixMe */
//   module.hot.accept('./App', () => render(MonacoEditor));
// }