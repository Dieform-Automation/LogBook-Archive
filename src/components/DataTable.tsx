import React, { useState, useMemo } from 'react';
import { Table, Input, Dropdown, DropdownProps } from 'semantic-ui-react';
import { useTable, useSortBy, useFilters } from 'react-table';
import styled from '@emotion/styled';

type Props = {
  data: any;
  columns: Array<{
    Header: string;
    accessor: string;
  }>;
  action: React.ReactNode;
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  .ui.input {
    flex-grow: 1;
    padding-inline-end: 10px;
  }
`;

const DataTable: React.FC<Props> = ({ columns, data, action }) => {
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

  //Search State
  const [filterText, setFilterText] = useState<string>('');
  const [filterField, setFilterField] = useState<string>(
    filterOptions[0].value
  );

  // Change Handlers
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
      <Flex>
        <Input
          value={filterText}
          onChange={filterTextChange}
          placeholder="Search"
          labelPosition="left"
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
        {action}
      </Flex>
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
