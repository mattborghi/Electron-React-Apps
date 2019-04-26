import React from 'react'
// import './App.css';
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import UniversalMC from './img/universal-mc-logo.png'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
// import Fab from '@material-ui/core/Fab'
// import PlusIcon from './icons/PlusIcon.svg'
// import glamorous from "glamorous"
import TLogo from './icons/nyt-logo'
import PlusLogo from './icons/PlusLogo'
import OpenFolder from './icons/open-folder'
// import IconButton from '@material-ui/core/IconButton';
import FolderList from './components/left-pane'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: { 
     useNextVariants: true
  }
});

const white = 'white'
const orange = '#ff5722'
// const black = '#303030'
const black2 = '#424242'

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

// const WhiteSystem = glamorous(PlusIcon)({
//     "> path": {
//       fill: "white"
//     }
//   });

const logoClass = theme => ({
  height: 24,
  width: 24,
  marginRight: theme.spacing.unit,
})

function PageTwo(props) {

  const { classes } = props;

  const style = {
    color: white,
    width: 250,
    height: 50,
    fontSize: 16,
    // marginTop: 200,
  }

  return (
    <MuiThemeProvider theme = { theme }>
  
    <Grid container spacing={24}>

    <Grid item id="root" style={{backgroundColor: black2}} xs={3}>
      <FolderList />
    </Grid>

    <Grid item xs={9}>
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
        justify="flex-start"
        alignItems="center"
        direction="column"
      >
        <Button style={style} className={classes.margin}>
          <PlusLogo fill={orange} style={logoClass} />
          <Typography>New Project</Typography>
        </Button >

        <Button  style={style} className={classes.margin}>
          <OpenFolder fill={orange} style={logoClass} />
          <Typography>Load Project</Typography>
        </Button >
      </Grid>
      <Button size="large">
        <TLogo fill={orange} style={logoClass} />
        Checkout version 1!
      </Button>

      {/* End grid item */}
      </Grid>
      {/* End row container */}
      </Grid>
    </MuiThemeProvider>
  );
}

PageTwo.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(PageTwo);
