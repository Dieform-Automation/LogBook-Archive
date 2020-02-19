import React, { useContext, useCallback } from 'react';
import { withRouter, Redirect, RouteComponentProps } from 'react-router';
import { Image, Button } from 'semantic-ui-react';
import styled from '@emotion/styled';

import app, { GoogleAuthProvider } from '../contexts/base';
import { AuthContext } from '../contexts/AuthContext';
import logo from '../assets/logo.png';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 50% 10% 0% 10%;

  @media screen and (min-width: 768px) {
    padding: 20%;
  }

  @media screen and (min-width: 1440px) {
    padding: 13% 35%;
  }
`;

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const currentUser = useContext(AuthContext);
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      try {
        await app.auth().signInWithPopup(
          GoogleAuthProvider.setCustomParameters({
            hd: 'dieform.ca'
          })
        );
        history.push('/');
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  if (currentUser != null) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Image src={logo} size="large"></Image>
      <Button primary fluid size="big" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default withRouter(Login);
