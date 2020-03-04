import React from 'react';
import { Table } from 'semantic-ui-react';
import { useTable, useSortBy } from 'react-table';

type Props = {
  data: any;
  columns: any;
};

const DataTable: React.FC<Props> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy);

  return (
    <Table celled {...getTableProps()}>
      <Table.Header>
        {headerGroups.map(headerGroup => (
          <Table.Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Table.HeaderCell
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Table.Row {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <Table.Cell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Table.Cell>
                );
              })}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default DataTable;
