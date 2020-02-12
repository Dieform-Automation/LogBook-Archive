import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { FirebaseContext } from './utils/firebase';
import 'firebase/auth';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10%;
  justify-content: center;
`;

const Login: React.FC = () => {
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState();

  const authHandler = async () => {
    try {
      const userData = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider().setCustomParameters({'hd': 'dieform.ca'}));
        console.log(userData);
        setUser(userData.user?.displayName);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <h1>{user}</h1>
      <button onClick={() => authHandler()}>Login</button>
    </Container>
  );
};

export default Login;
