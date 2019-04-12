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
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fab from '@material-ui/core/Fab';
// import ToolBox from './Components/Accordion/toolbox';

class SplitPanes extends React.Component {

    constructor(props) {
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.state = {
            sidebarLeftVisible: true,
            alphaLeft: 0,
            sidebarRightVisible: true,
            alphaRight: 0,
        };
    }

    toggleAlpha = () => {
        let currentLeftAlpha = this.state.alphaLeft;
        if (currentLeftAlpha === 1){
            this.setState({
                alphaLeft: 0,
                alphaRight: 0,
            })
        }else{
            this.setState({
                alphaLeft: 1,
                alphaRight: 1,
            })
        }
    }

    toggleSidebar = (pane) => {
        if (pane === 'left'){
            // console.log(this.props.children)
            this.setState(state => ({ sidebarLeftVisible: !state.sidebarLeftVisible }));
        }
        if (pane === 'right'){
            this.setState(state => ({ sidebarRightVisible: !state.sidebarRightVisible }));
        } 
        this.toggleAlpha();
    }

    // hoverMouse = () => {
    //     let currentLeftAlpha = this.state.alphaLeft;
    //     if (currentLeftAlpha === 1){
    //         this.setState({
    //             alphaLeft: 0,
    //             alphaRight: 0,
    //         })
    //     }else{
    //         this.setState({
    //             alphaLeft: 1,
    //             alphaRight: 1,
    //         })
    //     }
        
    //     // console.log(this.props)
    //     // this.props.style.opacity = 0
    // }

    render() {
        // Moved inside render in order to modify it
        const styles = {
            buttonRight: {
                position: "absolute",
                right: -30,
                top: "50%",
                opacity: this.state.alphaRight,
              },
            buttonLeft: {
                position: "absolute",
                left: -30,
                top: "50%",
                opacity: this.state.alphaLeft,
            }
        }

        return (
            <div>
                <SplitterLayout primaryIndex={0} primaryMinSize={10} secondaryMinSize={80} percentage>
                    {/* Hiding sidebar */}
                    {this.state.sidebarLeftVisible &&
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
                                        {/* Left Arrow */}    
                                        <Fab 
                                            color="inherit" 
                                            aria-label="Add" 
                                            style={styles.buttonLeft} 
                                            onClick={() => this.toggleSidebar('left')} 
                                            size="medium" 
                                            onMouseEnter={() => this.toggleAlpha()}
                                            onMouseLeave={() => this.toggleAlpha()}
                                        >
                                        {this.state.sidebarLeftVisible? <ArrowBackwardIosIcon style={{left: 20, position: "relative"}}/> : <ArrowForwardIosIcon style={{left: 16, position: "relative"}}/> }
                                        </Fab>
                                        
                                        {/* Right Arrow */}
                                        <Fab 
                                            color="inherit" 
                                            aria-label="Add" 
                                            style={styles.buttonRight} 
                                            onClick={() => this.toggleSidebar('right')} 
                                            size="medium" 
                                            onMouseEnter={() => this.toggleAlpha()}
                                            onMouseLeave={() => this.toggleAlpha()}
                                        >
                                            {this.state.sidebarRightVisible? <ArrowForwardIosIcon style={{right: 13, position: "relative"}}/> : <ArrowBackwardIosIcon style={{right: 10, position: "relative"}}/> }
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
                                </div>*/}
                            {this.state.sidebarRightVisible &&
                            (
                                <div> 
                                    <ExpansionPanel />
                                </div>
                            )}
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