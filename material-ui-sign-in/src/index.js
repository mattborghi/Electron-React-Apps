import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './App';
import * as serviceWorker from './serviceWorker';
// import logo from './logo.svg';
import crisil from './crisil.jpg';
import logo_transparent from './logo_transparent.png';

ReactDOM.render(<SignIn />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const styleRight = {
    position: "absolute",
    right: 0,
    bottom: 0,
}

const styleLeft = {
    position: "absolute",
    left: 0,
    bottom: 0,
}

class ImageRight extends React.Component {
    render() {
        return(
            <div style={styleRight}>
                <img src={logo_transparent} alt="logo" width={200}></img>
            </div>
        );
    }
}

class ImageLeft extends React.Component {
    render() {
        return(
            <div style={styleLeft}>
                <img src={crisil} alt="logo" width={200}></img>
            </div>
        );
    }
}

ReactDOM.render(<ImageLeft/>, document.getElementById('image-left'));
ReactDOM.render(<ImageRight/>, document.getElementById('image-right'));
