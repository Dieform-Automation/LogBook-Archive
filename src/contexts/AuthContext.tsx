import React, { useState, useEffect } from 'react';
import app from './base'

export const AuthContext = React.createContext<firebase.User | null>(null);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(user => setCurrentUser(user));
  },[]);

  return(
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  )
} 