import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CustomizedSwitches from '../switch/on-off-button';
// import TerminalNewIcon from '../icons/terminal-new'
import ConsoleIcon from '../icons/console'
import StructureIcon from '../icons/project-structure'
import SettingsIcon from '../icons/settings'
import Button from '@material-ui/core/Button'

const white = "#ffffff"
const green = "rgb(150,200,150)"

const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
    height: 60,
  },
  typography: {
      marginTop: 0, 
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  const [toggleOn, setToggleOn] = useState(true)
  const [toggleRightPane, setToggleRightPane] = useState(true)
  const [toggleProject, setToggleProject] = useState(true)
  const [toggleTerminal, setToggleTerminal] = useState(true)
  
  function onChange() {
    let isToggled = toggleOn 
    if(isToggled){
      setToggleOn(false)
    }else {
      setToggleOn(true)
    }
    // console.log(toggleOn)
    props.toggleFunc(toggleOn);
  }

  function rightSidebar() {
    let isToggledRightPane = toggleRightPane
    if (isToggledRightPane)
      setToggleRightPane(false)
    else
      setToggleRightPane(true)
    props.toggleRightPane(toggleRightPane)
    
  }

  function projectToggle() {
    let isToggled = toggleProject
    if (isToggled)
      setToggleProject(false)
    else
      setToggleProject(true)
    props.toggleProject(toggleProject)
  }

  function terminalToggle() {
    let isToggled = toggleTerminal
    if (isToggled)
      setToggleTerminal(false)
    else
      setToggleTerminal(true)
    props.toggleTerminal(toggleTerminal)
  }

  return (
    <div className={classes.root}>
        <AppBar className={classes.appbar} position="static" color={toggleOn ? "secondary" : "primary"}>
            <Toolbar>
            <Typography className={classes.typography} variant="h6" color={toggleOn ? "primary" : "secondary"}>
                MODEL INHERENT RISK
            </Typography>
            </Toolbar>
            <div style={{position: "absolute", left: 0, top: 0 }} >
              <Button onClick={() => projectToggle()}> 
                { toggleProject ? <StructureIcon fill={green} /> : <StructureIcon fill={white} /> }
              </Button>
              <Button onClick={() => terminalToggle()} > 
                { toggleTerminal ? <ConsoleIcon fill={green} /> : <ConsoleIcon fill={white} /> }
              </Button>
              <Button onClick={() => rightSidebar()}>
                { toggleRightPane ? <SettingsIcon fill={green} /> : <SettingsIcon fill={white} /> }
              </Button>
            </div>

            <div onChange={() => onChange()}>
                <CustomizedSwitches />
            </div>
        </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);