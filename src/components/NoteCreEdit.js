import React from 'react';

import CreateNoteForm from './CreateNoteForm';
import EditNoteForm from './EditNoteForm';

const NoteCreEdit = function({isEditing, createNote, updateNote, selectedNote}) {
  var form = !isEditing ? <CreateNoteForm createNote={createNote} /> :
              <EditNoteForm  updateNote={updateNote} selectedNote={selectedNote}/>

  return (
    <div>
      { form }
    </div>
  );
}

export default NoteCreEdit;
