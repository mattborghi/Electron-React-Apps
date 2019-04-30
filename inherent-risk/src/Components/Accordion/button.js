import React, { useState } from 'react';
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

function TextButtons(props) {

  const { classes } = props;

  const [textColor, setTextColor] = useState('primary')   
    

  // render() {
    function changeValue(enterORleave) {
      if (enterORleave === 'enter'){
        setTextColor('primary');
      }
      if (enterORleave === 'exit'){
        setTextColor('primary'); 
      }
    }
    function changeColor(word, number) {
      switch (number) {
        case 0:
          changeValue(word)
          break;
        case 1:
          changeValue(word)
          break;
        case 2:
          changeValue(word)
          break;
        case 3:
          changeValue(word)
          break;
        default:
          console.log('Error')
          break;
      }
      // console.log(word, textColor)
    }
  
  return (
    <div>
      <Button 
        className={classes.button} 
        fullWidth={true} 
        color={textColor} 
        onMouseEnter={() => changeColor('enter', 0)} 
        onMouseLeave={() => changeColor('exit', 0)} 
      >
        {props.name}
      </Button>
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextButtons);