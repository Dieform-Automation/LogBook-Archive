import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Login from './views/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Customers } from './views/Customers';
import PrivateRoute from './components/PrivateRoute';
import { AuthContextProvider } from './contexts/AuthContext';
import { CustomerContextProvider } from './contexts/CustomerContext';

const App = () => {
  return (
    <AuthContextProvider>
      <CustomerContextProvider>
        <Router>
          <PrivateRoute exact path="/" component={Customers}></PrivateRoute>
          <Route exact path="/login" component={Login}></Route>
        </Router>
      </CustomerContextProvider>
    </AuthContextProvider>
  );
};

export default App;
