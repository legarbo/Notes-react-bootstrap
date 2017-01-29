import React from 'react';

import CreateNoteForm from './CreateNoteForm';
import EditNoteForm from './EditNoteForm';

const NoteInputMode = function(props) {

  if (props.isEditing) {
    return <EditNoteForm 
    notes={props.notes} 
    isEditing={props.isEditing}
    onClick={props.onClick}
    onUpdateNote={props.onUpdateNote}
    />
  }

  return (
    <CreateNoteForm
      createNote={props.onCreateNote}/>
  );
}

export default NoteInputMode;
