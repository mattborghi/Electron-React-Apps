import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class Use extends React.Component {
  state = {
    officialPricing: false,
    marketRisk: false,
    volkerRule: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { officialPricing, marketRisk, volkerRule } = this.state;
    // const error = [officialPricing, marketRisk, volkerRule].filter(v => v).length !== 2;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Use</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="Official pricing, risk manage, Basel, etc"
              labelPlacement="end"
              control={
                <Checkbox checked={officialPricing} onChange={this.handleChange('officialPricing')} value="officialPricing" />
              }
              
            />
            <FormControlLabel
              control={
                <Checkbox checked={marketRisk} onChange={this.handleChange('marketRisk')} value="marketRisk" />
              }
              label="Market Risk Rule Capital (e.g., VaR, SVaR)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={volkerRule}
                  onChange={this.handleChange('volkerRule')}
                  value="volkerRule"
                />
              }
              label="Volker Rule"
            />
          </FormGroup>
          {/* <FormHelperText>Be careful</FormHelperText> */}
        </FormControl>
       
      </div>
    );
  }
}

Use.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Use);