import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import SignIn from './SignIn.jsx';
// import * as serviceWorker from './serviceWorker';
// import logo from './logo.svg';
import crisil from './crisil.jpg';
import crisilDark from './crisil_dark2.png';
import logo_transparent from './logo_transparent.png';
import logo_transparentDark from './logo_transparent_dark.png';
import CustomizedSwitches from './Components/on-off-button.jsx';
//  import { dark } from '@material-ui/core/styles/createPalette';

import Particles from 'react-particles-js'


// ReactDOM.render(<SignIn themeColor="dark" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

const styleRight = {
    position: "absolute",
    right: 0,
    bottom: 0,
}

const styleLeft = {
    position: "absolute",
    left: '46%',
    bottom: 10,
    zIndex: 999,
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
            <div >
                <div style={{zIndex: -996, position: 'absolute', top: 0, left: 0, width: '90%', height: '90%'}}>
                    <Particles 
                    params={{
                    // "fps_limit": 28,
                    // "particles": {
                    //     "number": {
                    //         "value": 200,
                    //         "density": {
                    //             "enable": false
                    //         }
                    //     },
                    //     "line_linked": {
                    //         "enable": true,
                    //         "distance": 30,
                    //         "opacity": 0.4
                    //     },
                    //     "move": {
                    //         "speed": 1
                    //     },
                    //     "opacity": {
                    //         "anim": {
                    //             "enable": true,
                    //             "opacity_min": 0.05,
                    //             "speed": 2,
                    //             "sync": false
                    //         },
                    //         "value": 0.4
                    //     }
                    // },
                    // "polygon": {
                    //     "enable": true,
                    //     "scale": 0.5,
                    //     "type": "inline",
                    //     "move": {
                    //         "radius": 10
                    //     },
                    //     "url": "/small-deer.2a0425af.svg",
                    //     "inline": {
                    //         "arrangement": "equidistant"
                    //     },
                    //     "draw": {
                    //         "enable": true,
                    //         "stroke": {
                    //             "color": "rgba(255, 255, 255, .2)"
                    //         }
                    //     }
                    // },
                    "retina_detect": false,
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "size": 10,
                                "distance": 100
                            }
                        }
                    }
                }} />
                </div>
                {/* <div style={{zIndex: -998, position: 'absolute', top: 0, left: 0}}>
                    <Particles height={'90vh'} width={'190vh'}/> 
                </div> */}
                <div style={{zIndex: -997, position: 'absolute', top: 0, left: 0, width: '90%', height: '90%'}}>
                    <Particles 
                        params={{
                                "particles": {
                                    "number": {
                                        "value": 60,
                                        "density": {
                                            "enable": true,
                                            "value_area": 1500
                                        }
                                    },
                                    "line_linked": {
                                        "enable": true,
                                        "opacity": 0.02
                                    },
                                    "move": {
                                        "direction": "right",
                                        "speed": 0.05
                                    },
                                    "size": {
                                        "value": 1
                                    },
                                    "opacity": {
                                        "anim": {
                                            "enable": true,
                                            "speed": 1,
                                            "opacity_min": 0.05
                                        }
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onclick": {
                                            "enable": true,
                                            "mode": "push"
                                        }
                                    },
                                    "modes": {
                                        "push": {
                                            "particles_nb": 1
                                        }
                                    }
                                },
                                "retina_detect": true
                            }} />
                </div>

                {/* <div style={{zIndex: -996, position: 'absolute', top: 0, left: 0}}>
                    <Particles height={'90vh'} width={'190vh'}/> 
                </div>                 */}
                <div style={{position: 'absolute', top: 0, left: '40%', zIndex: 999,}}>
                    <SignIn themeColor={this.state.themeColor}/>
                </div>
                {/* <div onChange={() => this.onChange()}>
                    <CustomizedSwitches />
                </div> */}
                <div style={styleLeft}>
                    { this.state.turnedOn && 
                        <img src={crisilDark} alt="logo" width={150} height={90}></img>
                    }
                    { !this.state.turnedOn && 
                        <img src={crisil} alt="logo" width={200} height={109}></img>
                    }
                </div>
                {/* <div style={styleRight}>
                    { this.state.turnedOn && 
                        <img src={logo_transparentDark} alt="logo" width={200} ></img>
                    }
                    { !this.state.turnedOn && 
                        <img src={logo_transparent} alt="logo" width={200}></img>
                    }
                    
                </div> */}
            </div>
            
        );
    }
}

// ReactDOM.render(<ImageLeft/>, document.getElementById('image-left'));
// ReactDOM.render(<ImageRight/>, document.getElementById('image-right'));
// ReactDOM.render(<CustomizedSwitches />, document.getElementById('on-off-button'))
ReactDOM.render(<SignComponent />, document.getElementById('root'))