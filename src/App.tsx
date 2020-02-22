import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';

const App = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <Router>
          <PrivateRoute exact path="/" component={Home}></PrivateRoute>
          <Route exact path="/login" component={Login}></Route>
        </Router>
      </Layout>
    </AuthContextProvider>
  );
};

export default App;
