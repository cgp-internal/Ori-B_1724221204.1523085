**Notes App**

A simple notes application built with React and React Context API, utilizing a hard-coded notes data structure.

**Getting Started**

Clone the repository: `git clone <repository-url>`
Install dependencies: `npm install`
Start the application: `npm start`
Open in browser: `http://localhost:3000`

**Application Features**

* Display a list of notes: `<Notes>`
* Add new notes: `<NoteForm>`
* Update existing notes: `<NoteForm>`
* Delete notes: `<Note>`

**Built With**

* React
* React Context API: `<NotesContext>`, `<NotesProvider>`
* JavaScript: `<notes>`

**Directory Structure**

* `public/`: HTML entry point (`index.html`)
* `src/`: JavaScript source code
	+ `context/`: React Context API implementation (`NotesContext.js`)
	+ `data/`: Hard-coded notes data (`notes.js`)
	+ `routes/`: Route components (`Notes.js`)
	+ `components/`: Reusable UI components (`Note.js`, `NoteForm.js`)
	+ `index.js`: Main JavaScript entry point
	+ `App.js`: Main application component (`App`)