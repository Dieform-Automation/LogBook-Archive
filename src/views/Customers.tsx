import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from '@emotion/styled';
import DataTable from '../components/DataTable';
import Customer from '../models/Customer';
import AddCustomerModal from '../components/AddCustomerModal';

export const Customers: React.FC = () => {
  const PaddedContainer = styled(Container)`
    padding-top: 3%;
  `;

  const data: Array<Customer> = [
    {
      name: 'Chinatown Chucksters',
      city: 'Ottawa',
      postalCode: 'L%V1C9',
      province: 'ON',
      street: '117 Lees Avenue',
      id: 1,
      phone: '904-847-0942',
      country: 'Canada',
      pointOfContact: 'Stickster',
      email: 'jellybelly@johnboy.com'
    },
    {
      name: 'Grimlatar Steel',
      city: 'Ottawa',
      postalCode: 'K1S0C2',
      province: 'ON',
      street: '117 Lees Avenue',
      id: 1,
      phone: '123-873-3432',
      country: 'Canada',
      pointOfContact: 'Hickory',
      email: 'gizmo@gadget.com'
    },
    {
      name: 'Tesla',
      city: 'Ottawa',
      postalCode: 'K1S0C2',
      province: 'ON',
      street: '117 Lees Avenue',
      id: 1,
      phone: '232-645-1085',
      country: 'Canada',
      pointOfContact: 'Garbonza',
      email: 'lamper.page@crest.com'
    },
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company',
        accessor: 'name'
      },
      {
        Header: 'Contact',
        accessor: 'pointOfContact'
      },

      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Phone',
        accessor: 'phone'
      },
    ],
    []
  );

  return (
    <PaddedContainer>
      <Header as="h1">Customers</Header>
      <DataTable columns={columns} data={data} action={<AddCustomerModal/>}></DataTable>
    </PaddedContainer>
  );
};
