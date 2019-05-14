import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import UniversalMCOrange from './img/universal-mc-logo-orange.png'
import UniversalMCBlue from './img/universal-mc-logo-blue.png'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import TLogo from './icons/nyt-logo'
import OpenFolder from './icons/open-folder'
import FolderList from './components/left-pane'
import { Link } from "react-router-dom"
import MenuListComposition from './components/menu-button'
import FormDialog from './components/newProduct/popup.jsx'

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
const blue = '#4b6eaf'

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

const logoClass = theme => ({
  height: 24,
  width: 24,
  marginRight: theme.spacing.unit,
})

const style = {
  button: {
    color: white,
    width: 250,
    height: 50,
    fontSize: 16,
  },
  div: {
    paddingRight: 25, 
    marginTop: theme.spacing.unit,
  }

  
}

class PageTwo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      overImage : false
    }
  }

  changeColor = (enterORleave) => {
    // console.log(word, number)
    if (enterORleave === 'enter'){
      this.setState ({
          overImage: true
      });
    }
    if (enterORleave === 'leave'){
      this.setState ({
        overImage: false
      }); 
    }
  }

render(){
// const { classes } = props;
  return (

    <MuiThemeProvider theme = { theme }>
  
    <Grid container>

    <Grid item id="root" style={{backgroundColor: black2, height: '100vh'}} xs={3}>
      <FolderList />
    </Grid>

    <Grid item xs={9}>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <div style={{marginTop: 100}}
      onMouseEnter={() => this.changeColor('enter')} onMouseLeave={() => this.changeColor('leave')}>
        {!this.state.overImage && 
          <img src={UniversalMCOrange} alt="universal-mc-logo" height={100}></img>
        }
        {this.state.overImage && 
          <img src={UniversalMCBlue} alt="universal-mc-logo" height={100}></img>
        }
        
        
      </div>
      <Typography style={{color: this.state.overImage ? blue : 'white', fontSize:30}}>Universal MC</Typography>
      <Typography style={{color:'grey', fontSize:18, fontStyle: 'italic', fontFamily: 'Roboto'}} >Version 2019.0.1</Typography>
    </Grid>


      <Grid container
        justify="center"
        alignItems="center"
        direction="column"
        style={{marginTop: 50}}
        id="button-container"
      >

        <FormDialog fill={orange} logoClass={logoClass} style={style}  />
        
        <Button  style={{marginLeft: -130}} >
        {/* className={classes.margin} */}
        <div style={{marginTop: theme.spacing.unit, paddingRight: 25,}}><OpenFolder fill={orange} style={logoClass} /></div>
          <Typography style={{textTransform: "none", fontSize: 20, fontFamily: 'Open Sans',}}>Open</Typography>
        </Button >

        <div style={{bottom:10, left: 500, position: "absolute",}}>
        <Link to='/'>
            <Button size="large">
              <TLogo fill={orange} style={logoClass} />
              Checkout version 1!
            </Button>
        </Link>
        </div>
      
      <div style={{bottom:10, right: 30, position: "absolute",}}>
      <Grid container>
        <MenuListComposition logo='Information'/>
        <MenuListComposition logo='Settings'/>
      </Grid>
      </div>
      
      </Grid>       
      
      {/* End grid item */}
      </Grid>
      {/* End row container */}
      </Grid>
    </MuiThemeProvider>
  );
}
}
PageTwo.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(PageTwo);
