import React from 'react';
import Downshift from 'downshift';
import { RowItem } from '../styles';
import HeadOptionsCellMenu from './HeadOptionsCellMenu';
import { ItemOptionsMenu } from '../../globals';

export const RowOptionsCell = ({ id, width, render, head, checked }) => {
  const menu = props =>
    head ? <HeadOptionsCellMenu {...props} /> : <ItemOptionsMenu {...props} />;
  return (
    <Downshift>
      {({ isOpen, toggleMenu }) => (
        <div style={{ flex: '0 0 auto', position: 'relative' }}>
          <RowItem style={{ width }} flex="0 0 auto" checked={checked}>
            {render({
              id: `row-options-cell-${id}`,
              isOpen,
              onClick: toggleMenu,
              'data-toggle': 'dropdown',
              'aria-haspopup': 'true',
              'aria-expanded': isOpen,
            })}
            {isOpen && menu({ onClick: toggleMenu })}
          </RowItem>
        </div>
      )}
    </Downshift>
  );
};
