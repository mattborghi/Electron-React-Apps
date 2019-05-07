import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import { withStyles } from '@material-ui/styles';
import MovePaneIcon from '../icons/move-pane'


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
    // console.log('moving')
    // let isToggled = isMoved 
    // if(isToggled){
    //   setIsMoved(true)
    // }else {
    //   setIsMoved(false)
    // }
    setIsMoved(!isMoved)
    // console.log(isMoved)
    props.movingButtons(isMoved);
  }

    return (
      <div>
        {/* Move pane button */}
        <StyledButton onClick={() => movePane()} >
          <MovePaneIcon style={{position: "relative", top: 0, left: 0}} />
        </StyledButton>

        {/* Buttons */}
        <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >Save</StyledButton>
        <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >Load</StyledButton>
        <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >Calculate Risk</StyledButton>
        <StyledButton color={props.bgColor} text={props.textColor} className={classes.root} >Generate Report</StyledButton>
        
      </div>
    );

}

export default withStyles(styles)(CustomizedExpansionPanel);