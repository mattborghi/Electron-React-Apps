import './bootstrap'
import './index.css';
import SplitPanes from './splitpane.js';
// import SplitPanes from './Components/Pane/split'
import * as serviceWorker from './serviceWorker';

// import SimpleAppBar from './Components/AppBar/appbar';
import LinearDeterminate from './Components/ProgressBar/progress-bar';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isSwitchToggled: true
        }
    }

    toggleSwitch = (switchValue) => {
        this.setState({
            isSwitchToggled: switchValue
        })
    }

    render() {

        return(
            <div>
                <SplitPanes toggleSwitch={this.toggleSwitch} />
                {/* themeColor={this.state.themeColor} */}
                { this.state.isSwitchToggled &&
                    <LinearDeterminate />
                }
            </div>
        )
    }
}



const contents = document.getElementById('pane');
ReactDOM.render(<App/>, contents);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
