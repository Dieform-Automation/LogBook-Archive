import React, { useState } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import Customer from '../models/Customer';

type DataTableProps = {
  data: Array<Customer>;
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [customers, setCustomers] = useState(data);
  
  const addCustomer = () => {
    setCustomers([data[0]].concat(customers))
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>
            <Button
              floated="right"
              icon
              labelPosition="left"
              color="green"
              size="small"
              onClick={addCustomer}
            >
              <Icon name="user" /> Add Customer
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {customers.map(customer => {
          return (
            <Table.Row key={customer.id}>
              <Table.Cell>{customer.name}</Table.Cell>
              <Table.Cell>{customer.address.street}</Table.Cell>
              <Table.Cell>{customer.phone}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default DataTable;
