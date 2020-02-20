import React, { useState, useEffect } from 'react';
import app, { GoogleAuthProvider } from './base';

type ContextProps = {
  currentUser: firebase.User | null;
  login: () => void;
  logout: () => void;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const AuthContextProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<ContextProps['currentUser']>();

  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
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
      value={{ currentUser: currentUser, login: login, logout: logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
