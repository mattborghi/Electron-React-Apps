import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Ranking from './ranking.jsx'
import Formulae from './formulae-main.jsx';
import Materiality from './materiality.jsx';
import Use from './use.jsx';
import Uncertainty from './uncertainty.jsx';
import Complexity from './complexity.jsx';
// import { Paper } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  Typography: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
});

class TextFields extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
    };
  }
  
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  
  render() {
    const { classes } = this.props;

    const hrStyle = {
      horizontalRule: {
        height:"2px", 
        border:"none", 
        // color:"rgb(150,200,150)", 
        backgroundColor:"rgb(150,200,150)", 
        textAlign:"left", 
        margin: "50 auto 0 0",
      },
    }
    
    return (
      <div className={classes.root} style={{backgroundColor: this.props.bgColor}}>
        {/* <Grid container> */}
            <Formulae />
            <hr style={hrStyle.horizontalRule} />
            <Ranking />
            <hr style={hrStyle.horizontalRule} />
            <Materiality />
            <hr style={hrStyle.horizontalRule} />
            <Use />
            <hr style={hrStyle.horizontalRule} />
            <Uncertainty /> 
            <hr style={hrStyle.horizontalRule} />
            <Complexity /> 
        {/* </Grid> */}
      </div> 
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);