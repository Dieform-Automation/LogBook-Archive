import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { Header, Button } from 'semantic-ui-react';
import DataTable from '../components/DataTable';
import PaddedContainer from '../styles/PaddedContainer';
import { PartContext } from '../contexts/PartContext';

export const Parts: React.FC = () => {
  const {parts} = useContext(PartContext);

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
        <DataTable columns={columns} data={parts} action={<Button />}></DataTable>
      </PaddedContainer>
    </Layout>
  );
};
