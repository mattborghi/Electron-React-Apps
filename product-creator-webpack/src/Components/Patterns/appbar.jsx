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
};

function SimpleAppBar(props) {
  const { classes } = props

  
  return (
    <div className={classes.root}>
        <AppBar className={classes.appbar} position="relative" color={props.themeSelected ? "primary" : "secondary"}>
            <Toolbar>
            <Typography className={classes.typography} variant="h6" color={props.themeSelected ? "secondary" : "primary"}>
                {props.title}
            </Typography>
            </Toolbar>            
        </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);