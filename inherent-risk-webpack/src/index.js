import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import LinearDeterminate from './Components/ProgressBar/progress-bar.jsx'
import SplitPanes from './Components/Splitpane/splitpane.jsx';


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
                { this.state.isSwitchToggled &&
                    <LinearDeterminate />
                }
            </div>
        )
    }
}


const contents = document.getElementById('main');
ReactDOM.render(<App />, contents)
// const title = 'My Minimal React Webpack Babel Setup';

// ReactDOM.render(
//   <div>{title}</div>,
//   document.getElementById('main')
// );

// console.log(bro('Dude'))
