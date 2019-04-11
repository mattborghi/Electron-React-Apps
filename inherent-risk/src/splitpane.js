import React from 'react';
import ReactDOM from 'react-dom';

// import SplitPane from 'react-split-pane';
import './index.css'
import './splitpane.css'
import  NestedList from './Components/NestedList/nested-list';
import ExpansionPanel from './Components/Accordion/accordion';
import FullWidthTabs from './Components/Tabs/tabs';
import TextFields from './Components/Form/select-range';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import ArrowBackwardIosIcon from '@material-ui/icons/ArrowBackIos';
import Fab from '@material-ui/core/Fab';
// import ToolBox from './Components/Accordion/toolbox';


const styles = {
    // button: {
    //     position: "absolute",
    //     right: 0,
    //     top: "50%",
    //   },
    buttonLeft: {
        position: "absolute",
        left: -30,
        top: "50%",
    }
  }

class SplitPanes extends React.Component {

    constructor(props) {
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.state = {
            sidebarVisible: true
        };
    }

    toggleSidebar() {
        this.setState(state => ({ sidebarVisible: !state.sidebarVisible }));
        
    }

    render() {
        return (
            <div>
                <SplitterLayout primaryIndex={0} primaryMinSize={10} secondaryMinSize={80} percentage>
                    {/* Hiding sidebar */}
                    {this.state.sidebarVisible &&
                    (
                        <div>
                            {/* <button 
                            type="button" 
                            onClick={this.toggleSidebar}
                            style={styles.button}
                            >
                                {this.state.sidebarVisible && 'Hide Sidebar'}
                                {!this.state.sidebarVisible && 'Show Sidebar'}
                            </button> */}
                            <NestedList />
                        </div>

                    )}
                    <div>
                        <SplitterLayout primaryIndex={0} primaryMinSize={80} secondaryMinSize={20} percentage secondaryInitialSize={20}>
                            <div>
                                <SplitterLayout vertical percentage primaryIndex={0} secondaryInitialSize={20} primaryMinSize={60} secondaryMinSize={10}>
                                    <div>
                                    <Fab color="inherit" aria-label="Add" style={styles.buttonLeft} onClick={this.toggleSidebar} size="medium">
                                        {/* {this.state.sidebarVisible && 'Hide Sidebar'}
                                        {!this.state.sidebarVisible && 'Show Sidebar'} */}
                                        <ArrowBackwardIosIcon style={{left: 20, position: "relative"}}/>
                                    </Fab>
                                        <TextFields />
                                    </div>
                                    <div>
                                        <FullWidthTabs />
                                    </div>
                                </SplitterLayout>
                            </div>
                            
                                {/* <SplitterLayout vertical percentage primaryIndex={0} secondaryInitialSize={50} primaryMinSize={40} secondaryMinSize={30}>
                                    <div>
                                        <ToolBox />
                                    </div>
                                    <div> */}
                                        <ExpansionPanel />
                                    {/* </div> */}
                                {/* </SplitterLayout> */}
                            
                        </SplitterLayout>
                    </div>
                </SplitterLayout>
            </div>
        );
    }
}

const content = document.getElementById('pane');
ReactDOM.render(<SplitPanes/>, content);