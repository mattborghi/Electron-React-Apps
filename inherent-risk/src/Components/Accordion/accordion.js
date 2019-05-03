import React from 'react';

import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { withStyles } from '@material-ui/styles';


const StyledButton = styled(Button)`
  color: ${props => props.text};
  display: block;
  width: 100%;
  border: none;
  background : ${props => props.color};
  height: 50px;
`;

const styles = {
  root: {
    textTransform: "none",
  }
}

function CustomizedExpansionPanel(props) {

  const {classes} = props

    return (
      <div>
        <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >Save</StyledButton>
        <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >Load</StyledButton>
        <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >Calculate Risk</StyledButton>
        <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >Generate Report</StyledButton>
      </div>
    );
  // }
}

export default withStyles(styles)(CustomizedExpansionPanel);