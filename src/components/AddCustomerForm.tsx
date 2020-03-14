import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Form, Modal, Button, Icon } from 'semantic-ui-react';
import { CustomerContext } from '../contexts/CustomerContext';
import Customer from '../models/Customer';

const AddCustomerForm: React.FC = () => {
  const { addCustomer } = useContext(CustomerContext);
  const [isOpen, setOpen] = useState(false);

  const schema: Yup.ObjectSchema = Yup.object({
    name: Yup.string().required('Required'),
    point_of_contact: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    street: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    province: Yup.string()
      .min(2, 'Must be 2 letter code')
      .max(2, 'Must be 2 letter code')
      .required('Required'),
    postal_code: Yup.string()
      .matches(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, 'Invalid postal code')
      .required('Required'),
    phone: Yup.string()
      .matches(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        'Invalid phone number'
      )
      .required('Required')
  });

  return (
    <Modal
      dimmer="inverted"
      trigger={
        <Button icon labelPosition="left" color="green" size="small">
          <Icon name="user" /> Add Customer
        </Button>
      }
      open={isOpen}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <Modal.Header>Add Customer</Modal.Header>
      <Modal.Content>
        <Formik
          initialValues={{
            name: '',
            point_of_contact: '',
            email: '',
            street: '',
            city: '',
            country: '',
            province: '',
            postal_code: '',
            phone: ''
          }}
          validationSchema={schema}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
            if (addCustomer) {
              addCustomer(values as Customer);
              setOpen(false);
            }
          }}
        >
          {formik => (
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Input
                  label="Company"
                  name="company"
                  {...formik.getFieldProps('name')}
                  error={formik.touched.name && formik.errors.name}
                />
                <Form.Input
                  label="Contact"
                  name="point_of_contact"
                  {...formik.getFieldProps('point_of_contact')}
                  error={
                    formik.touched.point_of_contact &&
                    formik.errors.point_of_contact
                  }
                />
                <Form.Input
                  label="Email"
                  name="email"
                  {...formik.getFieldProps('email')}
                  error={formik.touched.email && formik.errors.email}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  width="12"
                  label="Street Address"
                  name="street"
                  {...formik.getFieldProps('street')}
                  error={formik.touched.street && formik.errors.street}
                />
                <Form.Input
                  width="4"
                  label="City"
                  name="city"
                  {...formik.getFieldProps('city')}
                  error={formik.touched.city && formik.errors.city}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  label="Country"
                  name="country"
                  {...formik.getFieldProps('country')}
                  error={formik.touched.country && formik.errors.country}
                />
                <Form.Input
                  label="Province"
                  name="province"
                  {...formik.getFieldProps('province')}
                  error={formik.touched.province && formik.errors.province}
                />
                <Form.Input
                  label="Postal Code"
                  name="postal_code"
                  {...formik.getFieldProps('postal_code')}
                  error={
                    formik.touched.postal_code && formik.errors.postal_code
                  }
                />
              </Form.Group>
              <Form.Input
                label="Phone Number"
                name="phone"
                {...formik.getFieldProps('phone')}
                error={formik.touched.phone && formik.errors.phone}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end'
                }}
              >
                <Form.Button
                  type="submit"
                  primary
                >
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

export default AddCustomerForm;
