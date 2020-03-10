import React from 'react';
import Layout from '../components/Layout';
import { Header, Button } from 'semantic-ui-react';
import DataTable from '../components/DataTable';
import PaddedContainer from '../styles/PaddedContainer';

export const Parts: React.FC = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Customer',
        accessor: 'customer_id'
      },
      {
        Header: 'Part Name',
        accessor: 'name'
      },

      {
        Header: 'Part Number',
        accessor: 'number'
      }
    ],
    []
  );

  return (
    <Layout>
      <PaddedContainer>
        <Header as="h1">Parts</Header>
        <DataTable columns={columns} data={[]} action={<Button />}></DataTable>
      </PaddedContainer>
    </Layout>
  );
};
