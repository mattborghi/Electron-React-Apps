import styled, { css } from 'styled-components';
import { FlexCol, FlexRow } from '../globals';

export const Table = styled(FlexCol)`
  position: relative;
  overflow: none;
  height: 100%;
  width: 100%;
`;

export const TableBody = styled(FlexCol)`
  flex: 1 1 auto;
  overflow-x: auto;
  padding: 0 5px;
`;

export const FixedTableHead = styled(FlexRow)`
  flex: 0 0 auto;
  height: auto;
  background: white;
  color: ${({ theme }) => theme.text.alt};
  border-bottom: 1px solid ${({ theme }) => theme.bg.border};
  padding: 0 5px;
  font-size: 12px;
`;

export const HeadRowItem = styled.div`
  display: flex;
  text-transform: uppercase;
  height: 46px;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`;

export const Row = styled(FlexRow)`
  flex: 0 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.bg.wash};
  &:hover {
    background: ${({ selectable }) => selectable && '#4286f4'};
    color: white;
  }
`;

export const RowItem = styled.div`
  display: flex;
  flex: ${({ flex }) => flex};
  height: 46px;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  background: ${({ checked, theme }) =>
    checked ? 'rgba(66,134,244,0.1)' : null};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`;

export const HeadCellMenuPopup = styled.ul`
  max-height: 230px;
  overflow-x: auto;
`;

export const TableFooter = styled.div`
  display: flex;
  align-self: center;
  flex: 0 0 auto;
  height: 36px;
`;

export const Placeholder = styled(FlexRow)`
  flex: 0 0 auto;
  width: ${({ w }) => (w ? `${w}px` : '20px')};
  height: 20px;
  background: #f2f2f2;
  border-radius: 4px;
  ${({ loading }) =>
    loading &&
    css`
      @keyframes move {
        0% {
          background-position: -268px 0;
        }
        100% {
          background-position: 268px 0;
        }
      }
      animation-duration: 1.2s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: move;
      animation-timing-function: linear;
      background: linear-gradient(0.35turn, #f2f2f2 8%, #ddd 18%, #f2f2f2 33%);
      background-size: 400px 20px;
      position: relative;
    `};
`;

export const FlexButton = styled.button`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-weight: 600;
  white-space: nowrap;
  word-break: keep-all;
  cursor: pointer;
  padding: 5px 10px;
  background-color: ${props =>
    props.active ? props.theme.brand.border : props.theme.bg.wash};
  color: ${({ theme, active }) => (active ? theme.text.reverse : theme.text)};
`;
