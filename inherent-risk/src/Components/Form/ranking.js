import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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
  
  class Ranking extends React.Component {
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
        spacing={24}
        direction="row"
        justify="center"
        alignItems="flex-start"
        > 

        <Grid item xs={12}>  

        <Typography className={classes.Typography} component="h1" variant="h5">
        Ranking:
        </Typography>

        </Grid>

        {/* <Grid item xs={12}>   */}
        <Typography className={classes.Typography} component="h3" variant="h6">
          Negligible 	&le;
        </Typography>

        <TextField
          id="standard-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classNames(classes.textField, classes.dense)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        {/* </Grid> */}

        <Typography className={classes.Typography} component="h3" variant="h6">
          Low 	&le;
        </Typography>

        <TextField
          id="standard-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classNames(classes.textField, classes.dense)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

        <Typography className={classes.Typography} component="h3" variant="h6">
          Medium 	&le;
        </Typography>

        <TextField
          id="standard-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classNames(classes.textField, classes.dense)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

        <Typography className={classes.Typography} component="h3" variant="h6">
          High 	&le;
        </Typography>

          <TextField
          id="standard-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classNames(classes.textField, classes.dense)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        </Grid>
        );
    }

}

Ranking.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Ranking);
