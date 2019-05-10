import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import CreatableAdvanced from './combobox';
import FormulaeElem from './formulae.jsx';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      // width: 1000,
    },
    Typography: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      // width: 200,
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
  
  class Formulae extends React.Component {
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
        return(
        <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="baseline"
        > 
        <Grid item xs={3} >
          <Typography className={classNames(classes.Typography, classes.dense)} component="h1" variant="h5">
            Formulae: 
          </Typography>
        </Grid>
        <Grid item xs={9}>
          {/* <div className={classNames(classes.textField, classes.dense)}> */}
            {/* <CreatableAdvanced  /> */}
            <FormulaeElem />
          {/* </div>  */}
        </Grid>

        </Grid>
        );
    }

}

Formulae.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Formulae);
