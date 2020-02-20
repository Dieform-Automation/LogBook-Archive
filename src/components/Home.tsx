import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Layout from './Layout';

export const Home: React.FC = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Layout>
      <h1>Home Component {currentUser?.displayName}</h1>
    </Layout>
  );
};
