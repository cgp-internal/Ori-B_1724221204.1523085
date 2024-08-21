import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Note } from '../components/Note';
import { NoteForm } from '../components/NoteForm';

interface Props {
  /* add props type definition if needed */
}

const Notes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path="/notes">
        <NoteForm />
        <h1>All Notes</h1>
        {/* Render all notes here */}
      </Route>
    </Switch>
  );
};

export { Notes };
export default Notes;