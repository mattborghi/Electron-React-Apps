import React from 'react';
import { withDataBrowser } from 'react-data-browser';
import { HeadCellMenuPopup } from '../styles';
import { CellWithMenu } from '../../globals';
import pipe from 'ramda/src/pipe';

const HeadCellMenu = ({ dataBrowser, selected, toggleMenu, activeLabel }) => {
  console.log(dataBrowser);
  const sortField = `${selected.sortField}`;
  const showFieldsMenu =
    !selected.isLocked &&
    dataBrowser.offsetColumns().length > 0 &&
    dataBrowser
      .offsetColumns()
      .map(c => c.visible)
      .includes(false);
  return (
    <CellWithMenu left={0} top={32}>
      <div style={{ borderBottom: '1px solid #ddd' }}>
        <span>order</span>
        <ul>
          <li
            onClick={pipe(
              toggleMenu,
              () =>
                dataBrowser.sortData({
                  sortField,
                  sortDirection: 'asc',
                }),
            )}
          >
            {dataBrowser.activeSort(sortField, 'asc')
              ? '🌂 ascending'
              : 'ascending'}
          </li>
          <li
            onClick={pipe(
              toggleMenu,
              () =>
                dataBrowser.sortData({
                  sortField,
                  sortDirection: 'dsc',
                }),
            )}
          >
            {dataBrowser.activeSort(sortField, 'dsc')
              ? '🌂 descending'
              : 'descending'}
          </li>
        </ul>
      </div>
      {showFieldsMenu && (
        <HeadCellMenuPopup>
          <span>show</span>
          <ul>
            {dataBrowser.offsetColumns().map((column, i) => (
              <li
                key={i}
                style={{ color: column.visible && '#ccc' }}
                onClick={
                  !column.visible
                    ? pipe(
                        toggleMenu,
                        () =>
                          dataBrowser.switchColumns({
                            from: selected.sortField,
                            to: column.sortField,
                          }),
                      )
                    : undefined
                }
              >
                {selected.label === column.label && `🦄`}
                {column.label}
              </li>
            ))}
          </ul>
        </HeadCellMenuPopup>
      )}
    </CellWithMenu>
  );
};

export default withDataBrowser(HeadCellMenu);
