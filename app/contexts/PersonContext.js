import React, {createContext, useContext, useState} from 'react';
import personData from '../config/data.json';

const PersonContext = createContext({
  persons: [],
  addPerson: () => {},
});

export const PersonProvider = ({children}) => {
  const [persons, setPersons] = useState(personData);

  const addPerson = newPerson => {
    const updatedData = persons.map(person =>
      person.id === newPerson.id ? {...newPerson} : person,
    );
    setPersons(updatedData);
  };
  return (
    <PersonContext.Provider value={{persons, addPerson}}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonContext;
