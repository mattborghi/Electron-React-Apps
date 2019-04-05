import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormattedInputs from './text-mask';
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
  
  class Materiality extends React.Component {
    state = {
      name: ' ',
      age: '',
      multiline: ' ',
      currency: ' ',
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
        // direction="row"
        justify="center"
        alignItems="flex-start"
        > 

        <Grid
        item 
        xs={12}
        >  
          <Typography className={classes.Typography} component="h1" variant="h5">
          Materiality ($M):
        </Typography>
        
        </Grid>

        {/* Immaterial */}
        <Typography className={classes.Typography} component="h3" variant="h6">
          Immaterial
        </Typography>

        <FormattedInputs />

        <Typography className={classes.Typography} component="h3" variant="h6">
          MF =
        </Typography>

        <TextField
          id="standard-name"
          label="MF"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        {/* Low */}
        <Typography className={classes.Typography} component="h3" variant="h6">
          Low
        </Typography>

        <FormattedInputs />

        <Typography className={classes.Typography} component="h3" variant="h6">
          MF =
        </Typography>

        <TextField
          id="standard-name"
          label="MF"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        {/* Medium */}
        <Typography className={classes.Typography} component="h3" variant="h6">
          Medium
        </Typography>

        <FormattedInputs />

        <Typography className={classes.Typography} component="h3" variant="h6">
          MF =
        </Typography>

        <TextField
          id="standard-name"
          label="MF"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        {/* High */}
        <Typography className={classes.Typography} component="h3" variant="h6">
          High
        </Typography>

        <FormattedInputs />

        <Typography className={classes.Typography} component="h3" variant="h6">
          MF =
        </Typography>

        <TextField
          id="standard-name"
          label="MF"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        </Grid>
        );
    }

}

Materiality.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Materiality);
