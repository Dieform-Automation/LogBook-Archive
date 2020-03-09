import React, { useContext } from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from '@emotion/styled';
import DataTable from '../components/DataTable';
import { CustomerContext } from '../contexts/CustomerContext';
import AddCustomerForm from '../components/AddCustomerForm';

const PaddedContainer = styled(Container)`
  padding-top: 3%;
`;

export const Customers: React.FC = () => {
  const {customers} = useContext(CustomerContext)

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
      }
    ],
    []
  );

  return (
    <PaddedContainer>
      <Header as="h1">Customers</Header>
      <DataTable
        columns={columns}
        data={customers}
        action={<AddCustomerForm />}
      ></DataTable>
    </PaddedContainer>
  );
};
