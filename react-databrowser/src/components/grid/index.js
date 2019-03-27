import React from 'react';
import { getObjectPropertyByString } from 'react-data-browser';
import { GridView, GridItem } from './styles';
import fieldReducer from './fieldReducer';
import { Image, Absolute } from './styles';
import { Checkbox } from '../formElements';
import { OptionsMenu } from './components/OptionsMenu';
import { IconButton } from '../buttons';

export const TableGrid = ({
  items,
  visibleColumns,
  checkboxState,
  checkboxToggle,
}) => {
  return (
    <GridView>
      {items.map((row, key) => (
        <GridItem key={key} checked={checkboxState(row.id)}>
          {checkboxState(row.id) && (
            <Absolute>
              <Checkbox
                id={row.id}
                checked={checkboxState(row.id)}
                onChange={() => checkboxToggle({ rowId: row.id })}
              />
            </Absolute>
          )}
          <OptionsMenu
            width={40}
            checked={checkboxState(row.id)}
            render={({ ...props }) => (
              <IconButton {...props} color="white">
                more_horiz
              </IconButton>
            )}
          />
          {row && row.album && <Image src={row.album.url} alt="" />}
          {visibleColumns.map(({ label, sortField, isLocked }, index) => (
            <div key={sortField}>
              {`${label}: `}
              {fieldReducer(
                getObjectPropertyByString(row, sortField),
                sortField,
              )}
            </div>
          ))}
        </GridItem>
      ))}
    </GridView>
  );
};
