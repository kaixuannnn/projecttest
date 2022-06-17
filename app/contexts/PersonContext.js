import React, {createContext, useContext, useState} from 'react';
import personData from '../config/data.json';

const PersonContext = createContext({
  persons: [],
  addPerson: () => {},
  setBackToInitial: () => {},
});

export const PersonProvider = ({children}) => {
  const [persons, setPersons] = useState(personData);

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  const addPerson = newPerson => {
    const updatedData = persons.map(person =>
      person.id === newPerson.id ? {...newPerson} : person,
    );
    setPersons(updatedData);
  };

  const setBackToInitial = async () => {
    await wait(1000);
    setPersons(personData);
    alert('Data is initialized');
  };
  return (
    <PersonContext.Provider value={{persons, addPerson, setBackToInitial}}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonContext;
