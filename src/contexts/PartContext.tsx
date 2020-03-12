import React, { useState, useEffect } from 'react';
import Part from '../models/Part';
import axios from 'axios';

type PartProps = {
  parts: Array<Part>;
  addPart: (customer: Part) => boolean;
};

const apiURL = process.env.REACT_APP_API_URL;
export const PartContext = React.createContext<Partial<PartProps>>({});

export const PartContextProvider: React.FC = ({ children }) => {
  const [parts, setParts] = useState<PartProps['parts']>([]);

  useEffect(() => {
    async function getPartData() {
      try {
        const response = await axios.get<{ data: PartProps['parts'] }>(
          `${apiURL}/part/`
        );
        console.log(response);
        setParts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPartData();
  }, []);

  return (
    <PartContext.Provider value={{ parts: parts }}>
      {children}
    </PartContext.Provider>
  );
};
