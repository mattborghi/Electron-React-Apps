import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import TerminalNewIcon from '../icons/terminal-new'
import ConsoleIcon from '../icons/console.jsx'
import StructureIcon from '../icons/project-structure.jsx'
import SettingsIcon from '../icons/settings.jsx'
import Button from '@material-ui/core/Button'
import logo_transparentDark from '../images/logo_transparent_dark.png'
import logo_transparentGreen from '../images/logo_transparent_green.png'
import Icon, {Stack} from '@mdi/react'
import { mdiFileTree, 
         mdiBlockHelper,
         mdiConsole,
         mdiTune 
        } from '@mdi/js'

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
  },
  logo: {
    position: 'absolute',
    right: 10,
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
        <AppBar className={classes.appbar} position="absolute" color={props.themeSelected ? "primary" : "secondary"}>
            <Toolbar>
            <Typography className={classes.typography} variant="h6" color={props.themeSelected ? "secondary" : "primary"}>
                {props.title}
            </Typography>
            </Toolbar>
            <div style={{position: "absolute", left: 0, top: 10 }} >
              <Button onClick={() => projectToggle()}> 
                {/* { toggleProject ? <StructureIcon fill={green} /> : <StructureIcon fill={white} /> } */}
                { !toggleProject &&
                <Stack size={1}>
                  <Icon 
                    path={mdiFileTree}
                    size={1}
                    color={'white'}
                  />
                  <Icon path={mdiBlockHelper} color="white"/> 
                </Stack>
                }
                { toggleProject &&
                  <Icon 
                    path={mdiFileTree}
                    size={1}
                    color={'white'}
                  />
                }
              </Button>
              {/* <Button onClick={() => terminalToggle()} > 
                { !toggleProject &&
                <Stack size={1}>
                  <Icon 
                    path={mdiConsole}
                    size={1}
                    color={'white'}
                  />
                  <Icon path={mdiBlockHelper} color="white"/> 
                </Stack>
                }
                { toggleProject &&
                  <Icon 
                    path={mdiConsole}
                    size={1}
                    color={'white'}
                  />
                }
              </Button> */}
              <Button onClick={() => rightSidebar()}>
                {/* { toggleRightPane ? <SettingsIcon fill={green} /> : <SettingsIcon fill={white} /> } */}
                { !toggleRightPane &&
                <Stack size={1}>
                  <Icon 
                    path={mdiTune}
                    size={1}
                    color={'white'}
                  />
                  <Icon path={mdiBlockHelper} color="white"/> 
                </Stack>
                }
                { toggleRightPane &&
                  <Icon 
                    path={mdiTune}
                    size={1}
                    color={'white'}
                  />
                }
              </Button>
            </div>

            {/* UniversalMC Logo */}
            <div className={classes.logo}>
                {/* { this.state.turnedOn &&  */}
                    <img src={logo_transparentGreen} alt="logo" width={120} ></img>
                {/* }
                { !this.state.turnedOn && 
                    <img src={logo_transparent} alt="logo" width={200}></img>
                } */}
            </div>

            
        </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);