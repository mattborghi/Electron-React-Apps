import './index.css';
import './splitpane.js';
import * as serviceWorker from './serviceWorker';

import SimpleAppBar from './Components/AppBar/appbar';
import React from 'react';
import ReactDOM from 'react-dom';

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


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
