import styled from 'styled-components';
import { FlexRow } from '../globals';

export const StyledCheckboxWrapper = styled(FlexRow)`
  display: flex;
  line-height: 1.4;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const StyledHiddenInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const StyledLabel = styled.label`
  &:hover > input,
  &:hover > input:focus,
  &:hover > textarea:focus {
    border-color: ${props =>
      props.disabled ? props.theme.bg.inactive : props.theme.brand.alt};
  }
`;
