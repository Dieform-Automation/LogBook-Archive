import React, { useState, useEffect } from 'react';
import app, { GoogleAuthProvider } from './base';

type AuthProps = {
  currentUser: firebase.User | null;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = React.createContext<Partial<AuthProps>>({});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthProps['currentUser']>(
    null
  );
  const [isLoggedIn, setLoggedIn] = useState<AuthProps['isLoggedIn']>(false);

  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      user ? setLoggedIn(true) : setLoggedIn(false);
      setCurrentUser(user);
    });
  }, []);

  async function login(): Promise<void> {
    try {
      await app.auth().signInWithPopup(
        GoogleAuthProvider.setCustomParameters({
          hd: 'dieform.ca'
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function logout(): Promise<void> {
    try {
      await app.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
