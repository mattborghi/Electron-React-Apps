import React from 'react';

import Button from '@material-ui/core/Button';
import styled from 'styled-components'


const StyledButton = styled(Button)`
  color: ${props => props.text};
  display: block;
  width: 100%;
  border: none;
  background : ${props => props.color};
`;


function CustomizedExpansionPanel(props) {
    return (
      <div >
        <StyledButton color={props.bgColor} text={props.textColor} >Save</StyledButton>
        <StyledButton color={props.bgColor} text={props.textColor} >Load</StyledButton>
        <StyledButton color={props.bgColor} text={props.textColor} >Calculate Risk</StyledButton>
        <StyledButton color={props.bgColor} text={props.textColor} >Generate Report</StyledButton>
      </div>
    );
  // }
}

export default CustomizedExpansionPanel;