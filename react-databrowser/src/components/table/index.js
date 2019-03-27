import React from 'react';
import { getObjectPropertyByString } from 'react-data-browser';
import { TableBody, Row, RowItem } from './styles';
import { RowOptionsCell } from './components/RowOptionsCell';
import { IconButton } from '../buttons';
import fieldReducer from './fieldReducer';
import { Checkbox } from '../formElements';

export const TableList = ({
  items,
  fixedColWidth,
  checkboxState,
  checkboxToggle,
  visibleColumns,
  columnFlex,
}) => (
  <TableBody>
    {items.map((row, key) => (
      <Row key={key} selectable>
        <RowItem style={{ width: fixedColWidth }} flex="0 0 auto">
          <Checkbox
            id={row.id}
            checked={checkboxState(row.id)}
            onChange={() => checkboxToggle({ rowId: row.id })}
          />
        </RowItem>
        {visibleColumns.map(({ label, sortField, isLocked }, index) => (
          <RowItem
            key={sortField}
            flex={columnFlex[index]}
            cursor="pointer"
            checked={checkboxState(row.id)}
            onClick={() => alert(`🦄 clicked on a row (id) ${row.id}`)}
          >
            {isLocked && `🔒 `}
            {fieldReducer(getObjectPropertyByString(row, sortField), sortField)}
          </RowItem>
        ))}
        <RowOptionsCell
          width={fixedColWidth}
          checked={checkboxState(row.id)}
          render={({ isOpen, ...props }) => (
            <IconButton {...props} color={isOpen ? 'white' : '#999'}>
              more_horiz
            </IconButton>
          )}
        />
      </Row>
    ))}
  </TableBody>
);

export * from './components/HeadCell';
export * from './components/RowOptionsCell';
export * from './components/Loading';
export * from './styles';
