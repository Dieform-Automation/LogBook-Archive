import React, { useState, useMemo } from 'react';
import { Table, Input, Dropdown, DropdownProps } from 'semantic-ui-react';
import { useTable, useSortBy, useFilters } from 'react-table';

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
    prepareRow,
    setFilter
  } = useTable({ columns, data }, useFilters, useSortBy);

  const filterOptions = useMemo(() => {
    return headerGroups.flatMap(hg => {
      return hg.headers.map((header, idx) => {
        return { key: idx, text: header.Header, value: header.id };
      });
    });
  }, [headerGroups]);

  const [filterText, setFilterText] = useState<string>('');
  const [filterField, setFilterField] = useState<string>(
    filterOptions[0].value
  );

  const filterTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (typeof value === 'string') {
      setFilterText(value);
      setFilter(filterField, value);
    }
  };

  const filterFieldChange = (
    _: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    if (typeof data.value === 'string') {
      setFilterField(data.value);
    }
  };

  return (
    <>
      <Input
        value={filterText}
        onChange={filterTextChange}
        placeholder="Search"
        labelPosition="right"
        fluid
        label={
          <Dropdown
            selection
            defaultValue={filterOptions[0].value}
            options={filterOptions}
            onChange={filterFieldChange}
          />
        }
      />
      <Table celled {...getTableProps()}>
        <Table.Header>
          {headerGroups.map(headerGroup => (
            <Table.Row {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Table.HeaderCell {...column.getHeaderProps()}>
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
    </>
  );
};

export default DataTable;
