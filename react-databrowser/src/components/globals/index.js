import React from 'react';
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: white;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Title = styled(FlexRow)`
  justify-content: center;
  padding: 10px;
  font-size: 24px;
  font-weight: 700;
`;

export const CellWithMenu = styled.div`
  position: absolute;
  min-height: 120px;
  z-index: 10;
  outline: none;
  border: 1px dashed red;
  background: white;
  width: ${({ width }) => (width ? `${width}px` : '170px')};
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  top: ${({ top }) => (top ? `${top}px` : null)};
  right: ${({ right }) => (right ? `${right}px` : null)};
  left: ${({ left }) => (left ? `${left}px` : null)};

  ul {
    margin: 0;
    padding: 0 0 10px 0;
  }

  ul > li {
    text-transform: capitalize;
    list-style: none;
    display: flex;
    align-items: center;
    height: 28px;
    padding: 18px 35px;
    font-size: 14px;
    color: #222;
    font-weight: 400;
    cursor: pointer;
    white-space: nowrap;
  }

  ul > li:hover {
    background: ${({ theme }) => theme.brand};
    color: white;
  }

  span {
    display: block;
    color: ${({ theme }) => theme.text.alt.darker};
    font-weight: 500;
    text-transform: uppercase;
    font-size: 11px;
    padding: 18px 35px 10px 35px;
  }
`;

export const ItemOptionsMenu = ({ onClick }) => (
  <CellWithMenu top={34} right={1}>
    <div style={{ borderBottom: '1px solid #ddd' }}>
      <span>Menu Name</span>
      <ul onClick={onClick}>
        <li>option 1</li>
        <li>option 2</li>
        <li>option 3</li>
        <li>option 4</li>
      </ul>
    </div>
  </CellWithMenu>
);
