import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { withStyles } from '@material-ui/styles';
import MovePaneIcon from '../icons/move-pane'
import UpArrowIcon from '../icons/up-arrow'
import SaveFileIcon from '../icons/save-file'
import CalculateIcon from '../icons/calculate'
import GenerateIcon from '../icons/generate'

const black="#424242"
const white="#ffffff"

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
  },
  bottom: {
    textTransform: "none",
    bottom: 0,
    left: 0,
    position: "absolute",
  }
}

function CustomizedExpansionPanel(props) {

  const {classes} = props
  const [isMoved, setIsMoved] = useState(false)

  function movePane() {
    let newValue = !isMoved
    setIsMoved(newValue)
    props.movingButtons(newValue);
  }

  return (
    <div>
      {/* Move pane button */}
      <StyledButton onClick={() => movePane()} >
        <MovePaneIcon style={{position: "relative", top: 0, left: 0}} />
      </StyledButton>

      {/* Buttons */}
    
      <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        Save
        <div style={{ marginRight: 20}}><SaveFileIcon fill={white}/></div>
      </StyledButton>

      <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        Load
        <div style={{ marginRight: 20}}><UpArrowIcon fill={white}/></div>
      </StyledButton>

      <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        Calculate Risk
        <div style={{marginRight: 20}}><CalculateIcon fill={white}/></div>
      </StyledButton>

      <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >
        Generate Report
        <div style={{marginRight: 20}}><GenerateIcon fill={white}/></div>
      </StyledButton>
      
    </div>
  );
}

export default withStyles(styles)(CustomizedExpansionPanel);