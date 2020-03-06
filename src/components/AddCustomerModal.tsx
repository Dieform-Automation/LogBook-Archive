import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';

import AddCustomerForm from './AddCustomerForm';

const AddCustomerModal: React.FC = () => {
  return (
    <Modal
      dimmer="inverted"
      trigger={
        <Button
          icon
          labelPosition="left"
          color="green"
          size="small"
        >
          <Icon name="user" /> Add Customer
        </Button>
      }
    >
      <Modal.Header>Add Customer</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddCustomerForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AddCustomerModal;
