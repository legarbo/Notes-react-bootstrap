import React from 'react';

import CreateNoteForm from './CreateNoteForm';
import EditNoteForm from './EditNoteForm';

const NoteCreEdit = function({isEditing, createNote, updateNote}) {
  var form = !isEditing ? <CreateNoteForm createNote={createNote} /> :
              <EditNoteForm  updateNote={updateNote} />

  return (
    <div>
      { form }
    </div>
  );
}

export default NoteCreEdit;
