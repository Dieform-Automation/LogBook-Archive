import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Login from './views/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Customers } from './views/Customers';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';

const App = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <Router>
          <PrivateRoute exact path="/customers" component={Customers}></PrivateRoute>
          <Route exact path="/login" component={Login}></Route>
        </Router>
      </Layout>
    </AuthContextProvider>
  );
};

export default App;
