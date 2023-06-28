import Note from './components/Note.js';

const App = ({ notes }) => {
  const notesContent = notes.map((note) => <Note key={note.id} note={note} />);

  return (
    <div>
      <h1>Notes</h1>
      <ul>{notesContent}</ul>
    </div>
  );
};

export default App;
