import './bootstrap'
import './index.css';
import SplitPanes from './splitpane.js';
import * as serviceWorker from './serviceWorker';

// import SimpleAppBar from './Components/AppBar/appbar';
import LinearDeterminate from './Components/ProgressBar/progress-bar';
import React from 'react';
import ReactDOM from 'react-dom';



// AppBar
// class AppBar extends React.Component {
//     render() {
//         return(
//             <div>
//                 <SimpleAppBar/>
//             </div>
//         );
//     }
// }
// const content = document.getElementById('appbar');
// ReactDOM.render(<AppBar/>, content);

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         turnedOn: true,
    //         themeColor: 'dark',
    //     }
    // } 
    
    // onChange = () => {
        // console.log(event)
    //     let turnedState = this.state.turnedOn;
    //     if (turnedState){
    //         this.setState(
    //             {
    //                 turnedOn: !turnedState,
    //                 themeColor: 'light',
    //             }
    //         );
    //     } else {
    //         this.setState(
    //             {
    //                 turnedOn: !turnedState,
    //                 themeColor: 'dark',
    //             }
    //         );
    //     }
        
    // }

    render() {

        return(
            <div>
                <SplitPanes  />
                {/* themeColor={this.state.themeColor} */}
                <LinearDeterminate />
            </div>
        )
    }
}



const contents = document.getElementById('pane');
ReactDOM.render(<App/>, contents);

// const contents = document.getElementById('progress-bar');
// ReactDOM.render(<LinearDeterminate/>, contents);

// Splitpanes
// const content = document.getElementById('pane');
// ReactDOM.render(<SplitPanes/>, content);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
