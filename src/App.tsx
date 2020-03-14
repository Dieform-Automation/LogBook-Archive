import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Login from './views/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Customers } from './views/Customers';
import PrivateRoute from './components/PrivateRoute';
import { AuthContextProvider } from './contexts/AuthContext';
import { CustomerContextProvider } from './contexts/CustomerContext';
import { Parts } from './views/Parts';
import { PartContextProvider } from './contexts/PartContext';

const App = () => {
  return (
    <AuthContextProvider>
      <CustomerContextProvider>
        <PartContextProvider>
          <Router>
            <Switch>
              <PrivateRoute
                path="/customers"
                component={Customers}
              ></PrivateRoute>
              <PrivateRoute path="/parts" component={Parts}></PrivateRoute>
              <Route path="/login" component={Login}></Route>
              <Route path="*" component={Login}></Route>
            </Switch>
          </Router>
        </PartContextProvider>
      </CustomerContextProvider>
    </AuthContextProvider>
  );
};

export default App;
