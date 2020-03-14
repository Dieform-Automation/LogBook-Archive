import React, { useState, useEffect, useMemo } from 'react';
import Customer from '../models/Customer';
import axios from 'axios';

type CustomerProps = {
  customers: Array<Customer>;
  customerIdMap: Map<number, string>;
  addCustomer: (customer: Customer) => void;
};

const apiURL = process.env.REACT_APP_API_URL;
export const CustomerContext = React.createContext<CustomerProps>({
  customers: [],
  customerIdMap: new Map<number, string>(),
  addCustomer: () => {}
});

export const CustomerContextProvider: React.FC = ({ children }) => {
  const [customers, setCustomers] = useState<CustomerProps['customers']>([]);

  const customerIdMap = useMemo((): Map<number, string> => {
    const idMap = new Map<number, string>();
    customers.forEach(customer => {
      idMap.set(customer.id || 9999, customer.name);
    });
    return idMap;
  }, [customers]);

  const addCustomer = async (customer: Customer): Promise<void> => {
    try {
      const response = await axios.post<{ data: Customer }>(
        `${apiURL}/customer/`,
        customer
      );
      const newCustomer = response.data.data;
      const newList = customers.concat([newCustomer]);
      setCustomers(newList);
    } catch (error) {
      console.log(error);
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
      value={{
        customers: customers,
        customerIdMap: customerIdMap,
        addCustomer: addCustomer
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
