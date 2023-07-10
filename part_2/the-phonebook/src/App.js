import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '2124444' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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

  function handleNameChange(e) {
    setNewName(e.target.value);
  }
  function handleNumberChange(e) {
    setNewNumber(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <div>
            number:
            <input value={newNumber} onChange={handleNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div></div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} : {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
