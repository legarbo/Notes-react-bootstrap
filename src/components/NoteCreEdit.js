import React from 'react';

import CreateNoteForm from './CreateNoteForm';
import EditNoteForm from './EditNoteForm';

const NoteCreEdit = ({isEditing, createNote, updateNote, selectedNote, cancelUpdate}) => {
  var form = !isEditing ? <CreateNoteForm createNote={createNote} /> :
              <EditNoteForm  
                updateNote={updateNote} 
                selectedNote={selectedNote}
                cancelUpdate={cancelUpdate} />

  return (
    <div>
      { form }
    </div>
  );
}

export default NoteCreEdit;
