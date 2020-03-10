import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Button } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { AuthContext } from '../contexts/AuthContext';
import Layout from '../components/Layout';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 50% 10% 0% 10%;

  @media screen and (min-width: 768px) {
    padding: 20%;
  }

  @media screen and (min-width: 1024px) {
    padding: 15% 30%;
  }

  @media screen and (min-width: 1440px) {
    padding: 15% 35%;
  }
`;

const Login: React.FC = () => {
  const { login, isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
      <Container>
        <h1 style={{ fontSize: 64 }}>LogBook</h1>
        <p style={{ fontSize: 20 }}>
          All things inventory management at Dieform
        </p>
        <Button primary fluid size="huge" onClick={login}>
          Login
        </Button>
      </Container>
  );
};

export default Login;
