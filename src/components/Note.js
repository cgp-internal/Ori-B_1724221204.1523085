import React from 'react';
import { NotesContext } from '../context/NotesContext';

const Note = ({ id, title, content }) => {
  const { allNotes, deleteNote } = React.useContext(NotesContext);

  const handleDelete = () => {
    deleteNote(id);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export { Note };
export default Note;