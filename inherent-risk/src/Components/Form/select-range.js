import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Ranking from './ranking'
import Formulae from './formulae';
import Materiality from './materiality';
import Use from './use';
import Uncertainty from './uncertainty';
import Complexity from './complexity';
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
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* <Grid container> */}
            <Formulae />
            <hr />
            <Ranking />
            <hr />
            <Materiality />
            <hr />
            <Use />
            <hr />
            <Uncertainty /> 
            <hr />
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