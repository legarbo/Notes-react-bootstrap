import React from 'react';
import { ListGroupItem } from 'react-bootstrap';


const NoteListItem = ({note, onNoteSelect}) => {

  return (
    <ListGroupItem onClick={onNoteSelect}>
      {note.text}
    </ListGroupItem> 
  );
}

export default NoteListItem;
