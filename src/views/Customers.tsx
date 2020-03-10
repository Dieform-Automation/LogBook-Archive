import React, { useContext } from 'react';
import { Header } from 'semantic-ui-react';
import DataTable from '../components/DataTable';
import { CustomerContext } from '../contexts/CustomerContext';
import AddCustomerForm from '../components/AddCustomerForm';

import Layout from '../components/Layout';
import PaddedContainer from '../styles/PaddedContainer';

export const Customers: React.FC = () => {
  const { customers } = useContext(CustomerContext);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company',
        accessor: 'name'
      },
      {
        Header: 'Contact',
        accessor: 'point_of_contact'
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
    <Layout>
      <PaddedContainer>
        <Header as="h1">Customers</Header>
        <DataTable
          columns={columns}
          data={customers}
          action={<AddCustomerForm />}
        ></DataTable>
      </PaddedContainer>
    </Layout>
  );
};
