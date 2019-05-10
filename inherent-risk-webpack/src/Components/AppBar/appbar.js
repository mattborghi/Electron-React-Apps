import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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
  const { classes } = props

  const [toggleRightPane, setToggleRightPane] = useState(true)
  const [toggleProject, setToggleProject] = useState(true)
  const [toggleTerminal, setToggleTerminal] = useState(true)
  
  function rightSidebar() {
    let newValue = !toggleRightPane
    setToggleRightPane(newValue)
    props.toggleRightPane(newValue)
  }

  function projectToggle() {
    let newValue = !toggleProject
    setToggleProject(newValue)
    // Send the data using the new value avoiding asynchronous issues.
    // Instead of sending toggleProject directly.
    props.toggleProject(newValue)
  }

  function terminalToggle() {
    let newValue = !toggleTerminal
    setToggleTerminal(newValue)
    props.toggleTerminal(newValue)
  }
  
  return (
    <div className={classes.root}>
        <AppBar className={classes.appbar} position="static" color={props.themeSelected ? "primary" : "secondary"}>
            <Toolbar>
            <Typography className={classes.typography} variant="h6" color={props.themeSelected ? "secondary" : "primary"}>
                MODEL INHERENT RISK
            </Typography>
            </Toolbar>
            <div style={{position: "absolute", left: 0, top: 10 }} >
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

            
        </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);