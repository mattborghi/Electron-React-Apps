import styled from 'styled-components';

export const Icon = styled.i.attrs({
  className: 'material-icons',
})`
  color: ${({ theme, color }) => (color ? color : theme.text.alt)};
  font-size: ${({ size }) => size};
  margin: 0;
  padding: 0;
  user-select: none;
`;

export const StyledIconButton = styled.button`
  padding: 0;
  width: ${({ size }) => (size ? size : '32px')};
  height: ${({ size }) => (size ? size : '32px')};
  box-shadow: none;
  opacity: 1;
  cursor: pointer;
  background: transparent;
`;
