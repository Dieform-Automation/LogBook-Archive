import React from 'react';
import Navbar from './Navbar';
import { AuthContextProvider } from '../contexts/AuthContext';
import { CustomerContextProvider } from '../contexts/CustomerContext';

const Layout: React.FC = ({ children }) => {
  return (
    <AuthContextProvider>
      <CustomerContextProvider>
        <div>
          <Navbar />
          {children}
        </div>
      </CustomerContextProvider>
    </AuthContextProvider>
  );
};

export default Layout;
