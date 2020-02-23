import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from '@emotion/styled';
import DataTable from '../components/DataTable';
import Customer from '../models/Customer';

export const Customers: React.FC = () => {
  const PaddedContainer = styled(Container)`
    padding-top: 3%;
  `;

  const data: Array<Customer> = [
    {
      name: 'Johns Shop',
      address: {
        city: 'Ottawa',
        postalCode: 'K1S0C2',
        province: 'ON',
        street: '117 Lees Avenue'
      },
      id: 1,
      phone: '555-555-5555'
    }
  ];

  return (
    <PaddedContainer>
      <Header as="h1">Customers</Header>
      <DataTable data={data}></DataTable>
    </PaddedContainer>
  );
};
