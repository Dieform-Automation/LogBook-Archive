import React, { useContext, useMemo } from 'react';
import Layout from '../components/Layout';
import { Header, Button } from 'semantic-ui-react';
import DataTable from '../components/DataTable';
import PaddedContainer from '../styles/PaddedContainer';
import { PartContext } from '../contexts/PartContext';
import PartForm from '../components/AddPartForm';
import { CustomerContext } from '../contexts/CustomerContext';

export const Parts: React.FC = () => {
  const { parts } = useContext(PartContext);
  const { getCustomerIds } = useContext(CustomerContext);

  const data = useMemo(() => {
    const customerIdMap = getCustomerIds();

    parts.forEach(part => {
      part.customer = customerIdMap.get(part.customer_id);
      console.log(part);
    });
    console.log(parts);
    return parts;
  }, [parts, getCustomerIds]);

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
