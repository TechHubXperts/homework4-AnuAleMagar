import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setNotes((prev) => [...prev, trimmed]);
    setInputValue('');
  }

  return (
    <div>
      <h1>Simple Notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {notes.length === 0 ? (
        <p>No notes yet</p>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
