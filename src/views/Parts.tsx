import React, { useContext, useMemo } from 'react';
import Layout from '../components/Layout';
import { Header } from 'semantic-ui-react';
import DataTable from '../components/DataTable';
import PaddedContainer from '../styles/PaddedContainer';
import { PartContext } from '../contexts/PartContext';
import PartForm from '../components/AddPartForm';
import { CustomerContext } from '../contexts/CustomerContext';

export const Parts: React.FC = () => {
  const { parts } = useContext(PartContext);
  const { customerIdMap } = useContext(CustomerContext);

  const data = useMemo(() => {
    parts.forEach(part => {
      part.customer = customerIdMap.get(part.customer_id);
    });
    return parts;
  }, [parts, customerIdMap]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Customer',
        accessor: 'customer'
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
        <DataTable
          columns={columns}
          data={data}
          action={<PartForm />}
        ></DataTable>
      </PaddedContainer>
    </Layout>
  );
};
