import React, { useState, useEffect } from 'react';
import Part from '../models/Part';
import axios from 'axios';

type PartProps = {
  parts: Array<Part>;
  addPart: (customer: Part) => void;
};

const apiURL = process.env.REACT_APP_API_URL;
export const PartContext = React.createContext<PartProps>({
  parts: [],
  addPart: () => {}
});

export const PartContextProvider: React.FC = ({ children }) => {
  const [parts, setParts] = useState<PartProps['parts']>([]);

  const addPart = async (part: Part): Promise<void> => {
    try {
      const response = await axios.post<{ data: Part }>(
        `${apiURL}/part/`,
        part
      );
      const newPart = response.data.data;
      const newList = parts.concat([newPart]);
      console.log(newList);
      setParts(newList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getPartData() {
      try {
        const response = await axios.get<{ data: PartProps['parts'] }>(
          `${apiURL}/part/`
        );
        setParts(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPartData();
  }, []);

  return (
    <PartContext.Provider value={{ parts: parts, addPart: addPart }}>
      {children}
    </PartContext.Provider>
  );
};
