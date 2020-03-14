import React, { useContext, useMemo, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Modal, Button, Icon, Form } from 'semantic-ui-react';
import { CustomerContext } from '../contexts/CustomerContext';
import { PartContext } from '../contexts/PartContext';
import Part from '../models/Part';

const schema: Yup.ObjectSchema = Yup.object({
  customer_id: Yup.number().required('Required'),
  number: Yup.string().required('Required'),
  name: Yup.string().required('Required')
});

const PartForm = () => {
  const { customerIdMap } = useContext(CustomerContext);
  const { addPart } = useContext(PartContext);
  const [isOpen, setOpen] = useState(false);

  const options = useMemo(() => {
    let options: { key: number; text: string; value: number }[] = [];
    customerIdMap.forEach((value, key) => {
      options.push({
        key: key,
        text: value,
        value: key
      });
    });
    return options;
  }, [customerIdMap]);

  return (
    <Modal
      dimmer="inverted"
      trigger={
        <Button icon labelPosition="left" color="green" size="small">
          <Icon name="plus" /> Add Part
        </Button>
      }
      open={isOpen}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>Add Part</Modal.Header>
      <Modal.Content>
        <Formik
          initialValues={{
            customer_id: 0,
            number: '',
            name: ''
          }}
          validationSchema={schema}
          onSubmit={values => {
            addPart(values as Part);
            setOpen(false);
          }}
        >
          {formik => (
            <Form onSubmit={formik.handleSubmit}>
              <Form.Dropdown
                selection
                search
                placeholder="Choose a customer"
                options={options}
                label="Customer"
                name="customer_id"
                onBlur={(_, { name }) => formik.setFieldTouched(name, true)}
                onChange={(_, { name, value }) =>
                  formik.setFieldValue(name, value)
                }
                error={formik.touched.customer_id && formik.errors.customer_id}
              ></Form.Dropdown>
              <Form.Input
                label="Part Number"
                name="number"
                {...formik.getFieldProps('number')}
                error={formik.touched.number && formik.errors.number}
              />
              <Form.Input
                label="Part Name"
                name="name"
                {...formik.getFieldProps('name')}
                error={formik.touched.name && formik.errors.name}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end'
                }}
              >
                <Form.Button type="submit" primary>
                  Submit
                </Form.Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Content>
    </Modal>
  );
};

export default PartForm;
