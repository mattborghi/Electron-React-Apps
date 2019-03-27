import React from 'react';
import ReactDOM from 'react-dom';
import sort from 'ramda/src/sort';
import DataBrowser from 'react-data-browser';
import accessibleColumns from './columns';
import GlobalStyle from './reset.css';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { Title, Root } from './components/globals';
import { IconButton } from './components/buttons';
import { TableGrid } from './components/grid';
import { Checkbox } from './components/formElements';
import theme from './theme';
import {
  TableList,
  Table,
  FixedTableHead,
  HeadCell,
  RowOptionsCell,
  Loading,
} from './components/table';

// API changed and sort doesnt work. FIX!

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

async function fetchRows(setRows, setLoading) {
  const [users, albums] = await Promise.all([
    api('users'),
    api('photos?albumId=1'),
  ]);
  const data = users.data.map(user => ({
    ...user,
    album: albums.data.find(album => album.id === user.id),
  }));
  setRows(data);
  setLoading(false);
}

function App() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchRows(setRows, setLoading);
  }, []);

  function onStateChange(action, { defaultSortMethod }) {
    console.log(action.type);
    if (action.type === '__sort_data__') {
      setRows(rows => sort(defaultSortMethod, rows));
    }
  }

  function renderView({ viewType, ...rest }) {
    switch (viewType) {
      case 'GRID_VIEW':
        return <TableGrid {...rest} />;
      case 'LIST_VIEW':
        return <TableList {...rest} />;
      default:
        return <TableList {...rest} />;
    }
  }

  return (
    <ThemeProvider theme={theme.default}>
      <React.Fragment>
        <GlobalStyle />
        <Root>
          <Title>{`Data Browser 🗄`}</Title>
          <DataBrowser
            initialColumnFlex={[
              ['1 1 40%', '0 0 30%', '0 0 30%'],
              ['1 1 40%', '0 0 20%', '0 0 20%', '0 0 20%'],
              ['0 0 15%', '1 1 40%', '0 0 15%', '0 0 15%', '0 0 15%'],
            ]}
            totalItems={rows.length}
            columns={accessibleColumns}
            onStateChange={onStateChange}
          >
            {({
              columnFlex,
              visibleColumns,
              selectAllCheckboxState,
              checkboxState,
              onSelection,
              checkboxToggle,
              viewType,
            }) => {
              const fixedColWidth = 40;
              if (loading) {
                return (
                  <Loading
                    {...{ visibleColumns, columnFlex, numberOfRows: 20 }}
                  />
                );
              }
              return (
                <Table>
                  <FixedTableHead>
                    <HeadCell
                      style={{
                        flex: '0 0 auto',
                        position: 'relative',
                        width: fixedColWidth,
                      }}
                      render={() => (
                        <Checkbox
                          position="relative"
                          checked={selectAllCheckboxState}
                          onChange={() =>
                            onSelection({
                              items: rows.map(item => item.id),
                            })
                          }
                        />
                      )}
                    />
                    {visibleColumns.map((cell, index) => (
                      <HeadCell
                        key={index}
                        selected={cell}
                        flex={columnFlex[index]}
                        render={props => <div {...props}>{cell.label}</div>}
                      />
                    ))}
                    <RowOptionsCell
                      head
                      width={fixedColWidth}
                      render={({ isOpen, ...props }) => (
                        <IconButton {...props} color={isOpen ? 'blue' : '#555'}>
                          {viewType === 'LIST_VIEW'
                            ? 'view_list'
                            : 'view_module'}
                        </IconButton>
                      )}
                    />
                  </FixedTableHead>
                  {renderView({
                    viewType,
                    items: rows,
                    visibleColumns: visibleColumns,
                    fixedColWidth: fixedColWidth,
                    checkboxState: checkboxState,
                    checkboxToggle: checkboxToggle,
                    columnFlex: columnFlex,
                  })}
                </Table>
              );
            }}
          </DataBrowser>
        </Root>
      </React.Fragment>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
