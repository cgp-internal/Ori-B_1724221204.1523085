import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { NotesProvider } from './context/NotesContext';
import Notes from './routes/Notes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NotesProvider>
        <Notes />
      </NotesProvider>
    </BrowserRouter>
  );
};

export { App, Notes };