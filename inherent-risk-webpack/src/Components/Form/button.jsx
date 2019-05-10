import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    // width: "90%"
  },
  input: {
    display: 'none',
  },
});

class TextButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  setValue(event){
    this.props.makeClick(this.props.name);
  };

  render () {
    const { classes } = this.props;
    return (
      <div>
        <Button 
          className={classes.button} 
          color={this.props.color} 
          fullWidth={true} 
          variant="contained"
          onClick={(e) => {this.setValue(e)}}
          // value={this.props.name}
        >
          {this.props.name}
        </Button>
      </div>
    );
  }
  
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);