import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './App';
import * as serviceWorker from './serviceWorker';
// import logo from './logo.svg';
import crisil from './crisil.jpg';
import crisilDark from './crisil_dark2.png';
import logo_transparent from './logo_transparent.png';
import logo_transparentDark from './logo_transparent_dark.png';
import CustomizedSwitches from './components/on-off-button';
//  import { dark } from '@material-ui/core/styles/createPalette';


// ReactDOM.render(<SignIn themeColor="dark" />, document.getElementById('root'));

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

// class ImageRight extends React.Component {
//     render() {
//         return(
//             <div style={styleRight}>
//                 <img src={logo_transparent} alt="logo" width={200}></img>
//             </div>
//         );
//     }
// }

// class ImageLeft extends React.Component {
//     render() {
//         return(
//             <div style={styleLeft}>
//                 <img src={crisil} alt="logo" width={200}></img>
//             </div>
//         );
//     }
// }

class SignComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turnedOn: true,
            themeColor: 'dark',
        }
    }  

    onChange = () => {
        // console.log(event)
        let turnedState = this.state.turnedOn;
        if (turnedState){
            this.setState(
                {
                    turnedOn: !turnedState,
                    themeColor: 'light',
                }
            );
        } else {
            this.setState(
                {
                    turnedOn: !turnedState,
                    themeColor: 'dark',
                }
            );
        }
        
    }

    render() {
        return(
            <div>
                <SignIn themeColor={this.state.themeColor}/>
                <div onChange={() => this.onChange()}>
                    <CustomizedSwitches />
                </div>
                <div style={styleLeft}>
                    { this.state.turnedOn && 
                        <img src={crisilDark} alt="logo" width={200} height={120}></img>
                    }
                    { !this.state.turnedOn && 
                        <img src={crisil} alt="logo" width={200} height={109}></img>
                    }
                </div>
                <div style={styleRight}>
                    { this.state.turnedOn && 
                        <img src={logo_transparentDark} alt="logo" width={200} ></img>
                    }
                    { !this.state.turnedOn && 
                        <img src={logo_transparent} alt="logo" width={200}></img>
                    }
                    
                </div>
            </div>
            
        );
    }
}

// ReactDOM.render(<ImageLeft/>, document.getElementById('image-left'));
// ReactDOM.render(<ImageRight/>, document.getElementById('image-right'));
// ReactDOM.render(<CustomizedSwitches />, document.getElementById('on-off-button'))
ReactDOM.render(<SignComponent />, document.getElementById('root'))