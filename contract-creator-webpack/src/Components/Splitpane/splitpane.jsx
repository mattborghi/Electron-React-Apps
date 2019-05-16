import React from 'react'
import  NestedList from '../NestedList/nested-list.jsx'
import CustomizedExpansionPanel from '../Accordion/accordion.jsx'
import FullWidthTabs from '../Tabs/tabs.jsx'
import TextFields from '../Form/select-range.jsx'
import Settings from '../Settings/settings.jsx'
import SimpleAppBar from '../AppBar/appbar.jsx'
import ProgressStatusPanel from '../ProgressStatusPanel/progress-status-panel.jsx'
import MonacoEditor from '../MonacoEditor/MonacoEditor.js'
import DetailedExpansionPanel from '../Patterns/expansion-panel.jsx'
// import '~react-splitter-layout/lib/index.css';
// import '../../styles/splitter.css'
import SplitterLayout from 'react-splitter-layout'
import ArrowBackwardIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Fab from '@material-ui/core/Fab'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const white = '#ffffff'
// const orange = '#ff5722'
// const black = '#303030'
const black2 = '#424242'
// const black = '#000000'
// const blue = '#4b6eaf'
const green = 'rgb(150,200,150)'
// const grey = 'rgb(200,200,200)'

class SplitPanes extends React.Component {

    constructor(props) {
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.state = {
            sidebarLeftVisible: true,
            alphaLeft: 0.3,
            sidebarRightVisible: true,
            alphaRight: 0.3,
            isToggled: false,
            tabSize: 20,
            secondaryPaneSize: -1,
            movingButtonsValue: false,
            toggleProject: true,
            toggleTerminal: true,
            nextPaneCounter: 0,
        };
    }
    
    toggleAlpha = () => {
        let currentLeftAlpha = this.state.alphaLeft;
        if (currentLeftAlpha === 1){
            this.setState({
                alphaLeft: 0.3,
                alphaRight: 0.3,
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

    toggleSwitch = (isSwitched) => {
        this.props.toggleSwitch(isSwitched)
    }

    onToggle = (toggleVar) => {
        this.setState(state => ({
            isToggled: toggleVar
        }))
    }

    onToggleRightPane = (toggleVar) => {
        this.setState(state => ({
            sidebarRightVisible: toggleVar
        }))
    }

    onMovingButtons = (toggleVar) => {
        this.setState(state => ({
            movingButtonsValue: toggleVar
        }))
    }

    onNextPane = (toggleVar) => {
        this.setState(state => ({
            nextPaneCounter: toggleVar
        }))
    }

    onToggleProject = (toggleVar) => {
        this.setState(state => ({
            toggleProject: toggleVar
        }))
    }

    onToggleTerminal = (toggleVar) => {
        this.setState(state => ({
            toggleTerminal: toggleVar
        }))
    }

    onChangeSize = (toggled) => {
        if (toggled){
            this.setState({
                tabSize: 6,
                secondaryPaneSize: 6,
            })
        } else{
            this.setState({
                tabSize: 20,
                secondaryPaneSize: 20,
            })
        }
    }

    onSecondaryPaneSizeChange = (secondaryPaneSize) => {
        this.setState({ secondaryPaneSize });
        // console.log(secondaryPaneSize)
    }

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
        
        let theme = createMuiTheme({
            palette: {
                type: 'dark',
                primary: {
                  light: green,
                  main: white,
                  dark: black2,
                  contrastText: white,
                },
                secondary: {
                  light: black2,
                  main: black2,
                  dark: black2,
                  contrastText: black2,
                },
                error: {
                  light: green,
                  main: green,
                  dark: green,
                  contrastText: green,
                },
              },
            // props.themeColor
            typography: { 
                useNextVariants: true
            }
          });

        return (
            <MuiThemeProvider theme = { theme }>
            <div id="first-separator" >
                <SplitterLayout primaryIndex={0} primaryMinSize={10} secondaryMinSize={80} percentage customClassName="custom-scrollbar" >
                    {/* Hiding sidebar */}
                    {this.state.sidebarLeftVisible && 
                    (
                        <div style={{height: '100%', backgroundColor: this.state.isToggled ? white : black2  }}>
                            <SplitterLayout vertical percentage primaryIndex={0} secondaryInitialSize={75} customClassName="custom-scrollbar">
                                { this.state.toggleProject &&
                                    <div id="outside-nested-list" style={{height: '100%', backgroundColor: this.state.isToggled ? white : black2  }} >
                                        <NestedList 
                                            isToggled={this.state.isToggled} 
                                        />
                                    </div>
                                }
                                
                                <ProgressStatusPanel 
                                    bgColor={this.state.isToggled ? 'secondary' : 'primary'}  
                                    textColor={this.state.isToggled ? 'primary' : 'secondary'}
                                    nextPaneCounter={this.state.nextPaneCounter}
                                />
                                
                                {/* { this.state.movingButtonsValue &&
                                    <div style={{height: '100%', backgroundColor: this.state.isToggled ? white : black2  }}>
                                        <CustomizedExpansionPanel 
                                            bgColor={this.state.isToggled ? 'secondary' : 'primary'}  
                                            textColor={this.state.isToggled ? 'primary' : 'secondary'} 
                                            movingButtons={this.onMovingButtons}
                                        />
                                    </div>
                                } */}
                            </SplitterLayout>
                        </div>
                    )}
                    <div id="second-div" >
                        <SplitterLayout primaryIndex={0} primaryMinSize={80} secondaryMinSize={20} percentage secondaryInitialSize={20} customClassName="right-vertical-separator">
                            {/* <div> */}
                                {/* <SplitterLayout 
                                    vertical percentage 
                                    primaryIndex={0} 
                                    secondaryInitialSize={this.state.tabSize} 
                                    primaryMinSize={60} 
                                    secondaryMinSize={6} 
                                    customClassName="custom-scrollbar"
                                    onSecondaryPaneSizeChange={this.onSecondaryPaneSizeChange}
                                > */}
                                
                                    <div id="ppal-screen" style={{width: "100%", height:"100%", backgroundColor: this.state.isToggled ? white : black2, }}>
                                        <SimpleAppBar 
                                                themeSelected={this.state.isToggled}
                                                toggleRightPane={this.onToggleRightPane}
                                                toggleTerminal={this.onToggleTerminal}
                                                toggleProject={this.onToggleProject}
                                                title={"CONTRACT CREATOR"}
                                        />
                                        <br />
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
                                            {/* { this.state.nextPane && */}
                                                {/* <TextFields bgColor={this.state.isToggled ? white : black2} toggleValue={this.state.isToggled} /> */}
                                            {/* } */}
                                            {/* { !this.state.nextPane &&
                                                'Modify the file in order to incorporate React Router?' */}
                                        <SplitterLayout primaryIndex={0} percentage secondaryInitialSize={50} customClassName="main-separator"
                                                onSecondaryPaneSizeChange={this.onSecondaryPaneSizeChange}
                                        >    
                                            <div style={{paddingTop: 45, width: '100%', overflowY: 'hidden',}}><DetailedExpansionPanel /></div>
                                            <div style={{height: '100%', overflowY: 'hidden', paddingTop: 45}}><MonacoEditor /></div>
                                        </SplitterLayout>   
                                            {/* } */}
                                        </div>
                                    {/* { this.state.toggleTerminal && 
                                        <div style={{backgroundColor: this.state.isToggled ? white : black2, height: '100%'}}>
                                            <FullWidthTabs 
                                                    bgColor={this.state.isToggled ? white : black2} 
                                                    toggleValue={this.state.isToggled} 
                                                    changeSize={this.onChangeSize}
                                            />
                                        </div>
                                    } */}
                                {/* </SplitterLayout> */}
                            {/* </div> */}
                            {this.state.sidebarRightVisible &&
                            (
                                <SplitterLayout vertical >
                                    {/* { !this.state.movingButtonsValue && */}
                                        <div style={{marginRight: 20, height:'100%', width: '100%', backgroundColor: this.state.isToggled ? white : black2}} > 
                                            <CustomizedExpansionPanel 
                                                bgColor={this.state.isToggled ? 'secondary' : 'primary'}  
                                                textColor={this.state.isToggled ? 'primary' : 'secondary'} 
                                                movingButtons={this.onMovingButtons}
                                                nextPane={this.onNextPane}
                                            />
                                        </div>
                                    {/* } */}
                                    <div style={{height:'100%', width: '100%', color: white, backgroundColor: this.state.isToggled ? white : black2}}>
                                        <Settings
                                            toggleFunc={this.onToggle} 
                                            toggleSwitch={this.toggleSwitch}
                                        />
                                    </div>
                                </SplitterLayout>
                            )}
                        </SplitterLayout>
                    </div>
                </SplitterLayout>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default SplitPanes;