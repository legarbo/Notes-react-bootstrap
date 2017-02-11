import React from 'react';

import CreateNoteForm from './CreateNoteForm';
import EditNoteForm from './EditNoteForm';

const NoteCreEdit = ({isEditing, createNote, updateNote, selectedNote, cancelUpdate}) => {
  var form = !isEditing ? 
      <div><h3><b>Note Creation</b></h3>
        <CreateNoteForm 
          createNote={createNote} />
      </div> :
      <div><h3><b>Note Edition</b></h3>
        <EditNoteForm  
          updateNote={updateNote} 
          selectedNote={selectedNote}
          cancelUpdate={cancelUpdate} />
      </div>

  return (
    <div>
      { form }
    </div>
  );
}

export default NoteCreEdit;
