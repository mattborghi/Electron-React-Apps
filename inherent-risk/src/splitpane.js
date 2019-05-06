import React from 'react';

// import SplitPane from 'react-split-pane';
// import './index.css'
// import './splitpane.css'
import  NestedList from './Components/NestedList/nested-list.jsx';
import CustomizedExpansionPanel from './Components/Accordion/accordion';
import FullWidthTabs from './Components/Tabs/tabs';
import TextFields from './Components/Form/select-range';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import ArrowBackwardIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fab from '@material-ui/core/Fab';
// import ToolBox from './Components/Accordion/toolbox';
import SimpleAppBar from './Components/AppBar/appbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { palette } from '@material-ui/system';
// import grey from '@material-ui/colors/grey'

const white = '#ffffff'
// const orange = '#ff5722'
// const black = '#303030'
const black2 = '#424242'
// const black = '#000000'
const blue = '#4b6eaf'
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
            secondaryPaneSizeSet: -1,
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

    onToggle = (toggleVar) => {
        this.setState(state => ({
            isToggled: toggleVar
        }))
        // console.log(this.state.isToggled)
    }

    onChangeSize = (toggled) => {
        // console.log(toggled)
        // console.log(this.state.tabSize)
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
        this.setState({ 
            secondaryPaneSizeSet: secondaryPaneSize 
        });
        // console.log(this.state.secondaryPaneSizeSet)
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
                  light: blue,
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
                  light: blue,
                  main: blue,
                  dark: blue,
                  contrastText: blue,
                },
              },
            // props.themeColor
            typography: { 
                useNextVariants: true
            }
          });

        return (
            <MuiThemeProvider theme = { theme }>
            <div id="first-separator">
                <SplitterLayout primaryIndex={0} primaryMinSize={10} secondaryMinSize={80} percentage customClassName="custom-scrollbar" >
                    {/* Hiding sidebar */}
                    {this.state.sidebarLeftVisible && 
                    (
                        <div id="outside-nested-list" style={{height: '100vh', backgroundColor: this.state.isToggled ? white : black2  }} >
                            <NestedList 
                                isToggled={this.state.isToggled}
                                // bgColor={this.state.isToggled ? white : black2}  
                                // textColor={this.state.isToggled ? black2 : white}    
                            />
                        </div>

                    )}
                    <div>
                        <SplitterLayout primaryIndex={0} primaryMinSize={80} secondaryMinSize={20} percentage secondaryInitialSize={20} customClassName="custom-scrollbar">
                            <div>
                                <SplitterLayout 
                                    vertical percentage 
                                    primaryIndex={0} 
                                    secondaryInitialSize={this.state.tabSize} 
                                    primaryMinSize={60} 
                                    secondaryMinSize={6} 
                                    customClassName="custom-scrollbar"
                                    onSecondaryPaneSizeChange={this.onSecondaryPaneSizeChange}
                                >
                                
                                    <div style={{maxWidth: "100%", backgroundColor: theme.palette.primary.dark}}>
                                        <SimpleAppBar toggleFunc={this.onToggle}/>
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
                                            <TextFields bgColor={this.state.isToggled ? white : black2} toggleValue={this.state.isToggled} />
                                        </div>
                                    <div style={{backgroundColor: this.state.isToggled ? white : black2, height: '100%'}}>
                                        <FullWidthTabs bgColor={this.state.isToggled ? white : black2} toggleValue={this.state.isToggled} changeSize={this.onChangeSize} />
                                    </div>
                                </SplitterLayout>
                            </div>
                                
                            {/* <SplitterLayout vertical percentage primaryIndex={0} secondaryInitialSize={50} primaryMinSize={40} secondaryMinSize={30}>
                                <div>
                                    <ToolBox />
                                </div>*/}
                            {this.state.sidebarRightVisible &&
                            (
                                <div style={{marginRight: 20, height:'100vh', width: '100%', backgroundColor: this.state.isToggled ? white : black2}} > 
                                    <CustomizedExpansionPanel 
                                        bgColor={this.state.isToggled ? 'secondary' : 'primary'}  
                                        textColor={this.state.isToggled ? 'primary' : 'secondary'} 
                                    />
                                </div>
                            )}
                            {/* </SplitterLayout> */}
                            
                        </SplitterLayout>
                    </div>
                </SplitterLayout>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default SplitPanes;