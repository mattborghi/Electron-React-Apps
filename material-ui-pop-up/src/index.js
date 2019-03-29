import './index.css';
import './splitpane.js';
import * as serviceWorker from './serviceWorker';

import SimpleAppBar from './Components/AppBar/appbar';
import LinearDeterminate from './Components/ProgressBar/progress-bar';
// import FullScreenDialog from './Components/PopUp/pop-up';
import React from 'react';
import ReactDOM from 'react-dom';

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
    // '&:hover': {
    //     backgroundColor: "green",
    // },
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

// const popUpStyle = {
//     position: "absolute",
//     bottom: 10, // I should be using item app bar length
//     left: 0,
//     marginLeft: 10,
//     // width: "100%",
//     // '&:hover': {
//     //     backgroundColor: "green",
//     // },
// }

// // Pop up
// class PopUp extends React.Component {
//     render() {
//         return(
//             <div style={popUpStyle}>
//                 <FullScreenDialog/>
//             </div>
//         );
//     }
// }
// const contentt = document.getElementById('pop-up');
// ReactDOM.render(<PopUp/>, contentt);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
