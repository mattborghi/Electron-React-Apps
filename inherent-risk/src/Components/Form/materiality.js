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
      width: 100,
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
        <div className="materiality">
        

        
        <Typography className={classes.Typography} component="h1" variant="h5">
          Materiality ($M):
        </Typography>
        
        {/* Immaterial */}
        <Grid container spacing={24} justify="center" alignItems="center">
        <Grid item xs={6} sm={2}>
          <Typography className={classes.Typography} component="h3" variant="h6" align="justify" color="secondary">
            Immaterial
          </Typography>
        </Grid>
        <Grid item xs={6} sm={1}>
          <FormattedInputs />
        </Grid>
        <Grid item xs={2} sm={1}>
          <Typography className={classes.Typography} component="h3" variant="h6" align="justify" color="secondary">
            MF =
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2}>
          <TextField
            id="standard-name"
            label=""
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </Grid>
        {/* End container */}
        </Grid>
        {/* Low */}
        <Grid container spacing={24} justify="center" alignItems="center">
        <Grid item xs={6} sm={2}>
          <Typography className={classes.Typography} component="h3" variant="h6" align="justify" color="secondary"> 
            Low
          </Typography>
        </Grid>
        <Grid item xs={6} sm={1}>
          <FormattedInputs />
        </Grid>
        <Grid item xs={2} sm={1}>
          <Typography className={classes.Typography} component="h3" variant="h6" align="justify" color="secondary">
            MF =
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2}>
          <TextField
            id="standard-name"
            label=""
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </Grid>
        {/* End container */}
        </Grid>
        {/* Medium */}
        <Grid container spacing={24} justify="center" alignItems="center">
        <Grid item xs={6} sm={2}>
          <Typography className={classes.Typography} component="h3" variant="h6" align="justify" color="secondary">
            Medium
          </Typography>
        </Grid>
        <Grid item xs={6} sm={1}>
          <FormattedInputs />
        </Grid>
        <Grid item xs={2} sm={1}>
          <Typography className={classes.Typography} component="h3" variant="h6" align="justify" color="secondary">
            MF =
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2}>
          <TextField
            id="standard-name"
            label=""
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </Grid>
        {/* End container */}
        </Grid>
        {/* High */}
        <Grid container spacing={24} justify="center" alignItems="center">
        <Grid item xs={6} sm={2}>
          <Typography className={classes.Typography} component="h3" variant="h6" align="justify" color="secondary">
            High
          </Typography>
        </Grid>
        <Grid item xs={6} sm={1}>
          <FormattedInputs />
        </Grid>
        <Grid item xs={2} sm={1}>
          <Typography className={classes.Typography} component="h3" variant="h6" align="justify" color="secondary">
            MF =
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2}>
          <TextField
            id="standard-name"
            label=""
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </Grid>
        {/* End container */}
        </Grid>
        </div>
        );
    }

}

Materiality.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Materiality);
