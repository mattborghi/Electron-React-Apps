import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CustomizedSwitches from '../switch/on-off-button';

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
  
  function onChange() {
    let isToggled = toggleOn 
    if(isToggled === true){
      setToggleOn(false)
    }else {
      setToggleOn(true)
    }
    // console.log(toggleOn)
    props.toggleFunc(toggleOn);
  }

  return (
    <div className={classes.root}>
        <AppBar className={classes.appbar} position="static" color={toggleOn ? "secondary" : "primary"}>
            <Toolbar>
            <Typography className={classes.typography} variant="h6" color={toggleOn ? "primary" : "secondary"}>
                MODEL INHERENT RISK
            </Typography>
            </Toolbar>
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