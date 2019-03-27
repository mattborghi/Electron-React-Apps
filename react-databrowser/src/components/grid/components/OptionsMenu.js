import React from 'react';
import Downshift from 'downshift';
import { ItemOptionsMenu } from '../../globals';

export const OptionsMenu = ({ id, render, head }) => (
  <Downshift>
    {({ isOpen, toggleMenu }) => (
      <div style={{ flex: '0 0 auto', position: 'absolute', right: 10 }}>
        {render({
          id: `row-options-cell-${id}`,
          isOpen,
          onClick: toggleMenu,
          'data-toggle': 'dropdown',
          'aria-haspopup': 'true',
          'aria-expanded': isOpen,
        })}
        {isOpen && <ItemOptionsMenu onClick={toggleMenu} />}
      </div>
    )}
  </Downshift>
);
