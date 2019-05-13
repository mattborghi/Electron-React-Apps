import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import LinearDeterminate from './Components/ProgressBar/progress-bar.jsx'
import SplitPanes from './Components/Splitpane/splitpane-inherent-risk.jsx';


class InherentRiskPage extends React.Component {

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

export default InherentRiskPage;
// const contents = document.getElementById('main');
// ReactDOM.render(<App />, contents)
