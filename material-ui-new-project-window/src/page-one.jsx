import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import UniversalMC from './img/universal-mc.png'
import Grid from '@material-ui/core/Grid'
import TLogo from './icons/nyt-logo'
import { Link } from "react-router-dom"

const orange = '#ff5722'

const logoClass = theme => ({
  height: 24,
  width: 24,
  marginRight: theme.spacing.unit,
})


function PageOne() {

  const style = {
    color: '#ff5722',
    width: 500,
    height: 100,
    fontSize: 30,
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

      <div style={{marginTop: 100}}>
        <img src={UniversalMC} alt="universal-mc-logo" height={400} ></img>
      </div>


      <Grid container
        justify="space-evenly"
        alignItems="center"
        direction="row"
      >
        <Button variant="outlined" size="large" style={style}>
          New Project
        </Button>
        <Button variant="outlined" size="large" style={style}>
          Load Project
        </Button>
      </Grid>

      <div style={{bottom:10, left: 30, position: "absolute",}} >
      <Link to='/'>
        <Button size="large">
          <TLogo fill={orange} style={logoClass} />
          Checkout version 2!
        </Button>
      </Link>
      </div>

    </Grid>

    </MuiThemeProvider>
  );
}



export default PageOne;
