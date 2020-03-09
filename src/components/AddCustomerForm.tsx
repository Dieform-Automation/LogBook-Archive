import React, { useContext } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import { CustomerContext } from '../contexts/CustomerContext';
import Customer from '../models/Customer';

const AddCustomerForm: React.FC = () => {
  const {addCustomer} = useContext(CustomerContext)

  const schema: Yup.ObjectSchema = Yup.object({
    name: Yup.string().required('Required'),
    pointOfContact: Yup.string().required('Required'),
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
    postalCode: Yup.string()
      .matches(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, 'Invalid postal code')
      .required('Required'),
    phone: Yup.string()
      .matches(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        'Invalid phone number'
      )
      .required('Required')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      pointOfContact: '',
      email: '',
      street: '',
      city: '',
      country: '',
      province: '',
      postalCode: '',
      phone: ''
    },
    validationSchema: schema,
    onSubmit: values => {
      if(addCustomer) {
        addCustomer(values as Customer)
      }
    }
  });

  return (
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
          name="pointOfContact"
          {...formik.getFieldProps('pointOfContact')}
          error={formik.touched.pointOfContact && formik.errors.pointOfContact}
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
          name="postalCode"
          {...formik.getFieldProps('postalCode')}
          error={formik.touched.postalCode && formik.errors.postalCode}
        />
      </Form.Group>
      <Form.Input
        label="Phone Number"
        name="phone"
        {...formik.getFieldProps('phone')}
        error={formik.touched.phone && formik.errors.phone}
      />
      <Form.Button primary type="submit">
        Submit
      </Form.Button>
    </Form>
  );
};

export default AddCustomerForm;
