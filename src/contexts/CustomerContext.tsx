import React, { useState, useEffect } from 'react';
import Customer from '../models/Customer';
import axios from 'axios';

type CustomerProps = {
  customers: Array<Customer>;
  addCustomer: (customer: Customer) => boolean;
};

const apiURL = process.env.REACT_APP_API_URL;
export const CustomerContext = React.createContext<Partial<CustomerProps>>({});

export const CustomerContextProvider: React.FC = ({ children }) => {
  const [customers, setCustomers] = useState<CustomerProps['customers']>([]);

  const addCustomer = (customer: Customer): boolean => {
    const newList = customers.concat([customer]);
    try {
      axios.post<Customer>(`${apiURL}/customer/`, customer);
      console.log(newList);
      setCustomers(newList);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  useEffect(() => {
    async function getCustomerData() {
      try {
        const response = await axios.get<{ data: Array<Customer> }>(
          `${apiURL}/customer/`
        );
        console.log(response.data);
        setCustomers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCustomerData();
  }, []);

  return (
    <CustomerContext.Provider
      value={{ customers: customers, addCustomer: addCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
