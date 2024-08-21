import { createContext, useContext, useState } from 'react';
import { notes } from '../data/notes';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([...notes]);

  const addNote = (newNote) => {
    setAllNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const updateNote = (id, updatedNote) => {
    setAllNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? updatedNote : note))
    );
  };

  const deleteNote = (id) => {
    setAllNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ allNotes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotesContext = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotesContext must be used within NotesProvider');
  }
  return context;
};

export { NotesContext, NotesProvider, useNotesContext };