import './index.css';
// import './splitpane.js';
import * as serviceWorker from './serviceWorker';

import SimpleAppBar from './Components/AppBar/appbar';
import LinearDeterminate from './Components/ProgressBar/progress-bar';
import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from './Components/Directory/dropzone';
import FileList from './Components/Directory/filelist.jsx';

// AppBar
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


const style = {
    position: "absolute",
    bottom: -30, // I should be using item app bar length
    width: "100%",
}

// Progress Bar
class ProgressBar extends React.Component {
    render() {
        return(
            <div style={style}>
                <LinearDeterminate/>
            </div>
        );
    }
}
const contents = document.getElementById('progress-bar');
ReactDOM.render(<ProgressBar/>, contents);

const contents2 = document.getElementById('dropelem1');
ReactDOM.render(<Dropzone/>, contents2);

const contents3 = document.getElementById('filelist');
ReactDOM.render(<FileList/>, contents3);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
