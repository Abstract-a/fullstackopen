import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const filteredPersons = persons.filter((item) => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  function handleSubmit(e) {
    e.preventDefault();
    setPersons((prev) => {
      for (let person of prev) {
        if (newName === person.name) {
          console.log('already');
          alert(`${newName} already exists in the phonebook`);
          return prev;
        }
      }
      return [...prev, { name: newName, number: newNumber }];
    });
    setNewName('');
    setNewNumber('');
  }

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  function handleNameChange(e) {
    setNewName(e.target.value);
  }
  function handleNumberChange(e) {
    setNewNumber(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleChange={handleFilter} />
      <h1>Add a new</h1>

      <PersonForm
        submit={handleSubmit}
        nameValue={newName}
        nameChange={handleNameChange}
        numberValue={newNumber}
        numberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons filtered={filteredPersons} />
    </div>
  );
};

export default App;
