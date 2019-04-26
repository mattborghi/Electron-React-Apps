import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import UniversalMC from './img/universal-mc-logo.png'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import PlusIcon from './icons/PlusIcon.svg'
import glamorous from "glamorous";

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

const WhiteSystem = glamorous(PlusIcon)({
    "> path": {
      fill: "white"
    }
  });

function PageTwo(props) {

  const { classes } = props;

  const style = {
    color: '#ff5722',
    width: 250,
    height: 50,
    fontSize: 20,
    marginTop: 200,
    // textColor: '#ff5722',
    // backgroundColor: '#ff5722',
  }

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
    typography: { 
       useNextVariants: true
    }
  });

  return (
    <MuiThemeProvider theme = { theme }>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >

    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <div style={{marginTop: 100}}>
        <img src={UniversalMC} alt="universal-mc-logo" height={100} ></img>
      </div>
      <Typography style={{color:'white', fontSize:30}}>Universal MC</Typography>
    </Grid>


      <Grid container
        justify="space-evenly"
        alignItems="center"
        direction="row"
      >
        <Fab variant="extended" style={style} aria-label="Add" className={classes.margin}>
          {/* <plus className={classes.extendedIcon} /> */}
          {/* <img src={PlusIcon} alt="plus-icon" style={{marginRight: 4}}></img> */}
          <WhiteSystem />
          Extended
        </Fab>
        <Button variant="outlined" size="large" style={style}>
          New Project
        </Button>
        <Button variant="outlined" size="large" style={style}>
          Load Project
        </Button>
      </Grid>
      <Button variant="outlined" size="large">
          Checkout version 2!
      </Button>
    </Grid>

    </MuiThemeProvider>
  );
}

PageTwo.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(PageTwo);
