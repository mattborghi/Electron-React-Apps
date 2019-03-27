import React from 'react';
import styled from 'styled-components';
import {
  StyledLabel,
  StyledCheckboxWrapper,
  StyledHiddenInput,
} from './styles';
import { Icon } from '../buttons';

export const ControlledInput = styled.input`
  font-size: 1em;
  font-weight: 200;
  border: 1px solid #eee;
  padding: 3px;
  font-style: italic;
`;

export const Checkbox = props => {
  return (
    <StyledLabel>
      <StyledCheckboxWrapper
        disabled={props.disabled || false}
        align={props.align || 'center'}
      >
        {props.checked ? (
          <Icon color={props.color}>check_box</Icon>
        ) : (
          <Icon color={props.disabled ? '#CCC' : props.color}>
            check_box_outline_blank
          </Icon>
        )}
        <StyledHiddenInput
          type="checkbox"
          id={props.id}
          checked={props.checked}
          disabled={props.disabled || false}
          onChange={props.onChange}
        />
        {props.children}
      </StyledCheckboxWrapper>
    </StyledLabel>
  );
};
