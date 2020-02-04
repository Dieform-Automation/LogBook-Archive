import React, { createContext } from 'react';
import app from 'firebase/app';

const FirebaseContext = createContext(app);
export { FirebaseContext };

const FirebaseProvider: React.FC<{}> = ({ children }) => {
  if (!app.apps.length) {
    app.initializeApp({
      apiKey: 'AIzaSyDY4sFX4kZEXZN_jRI0IQJ3KBTK0icZw8Y',
      authDomain: 'logbook-c747b.firebaseapp.com',
      databaseURL: 'https://logbook-c747b.firebaseio.com',
      projectId: 'logbook-c747b',
      storageBucket: 'logbook-c747b.appspot.com',
      messagingSenderId: '1024078867802',
      appId: '1:1024078867802:web:2795b120e9ca5f44f59763',
      measurementId: 'G-C3WY2RXJCX'
    });
  }
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
};

export default FirebaseProvider
