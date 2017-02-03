import React from 'react';
import { ListGroup } from 'react-bootstrap';

import NoteItem from './NoteItem';

const NoteList = function({notes, onNoteSelect}) {
  if (!notes) {
    return <div>Enter your first note</div>
  }

  let renderItems = notes.map(note => {
    return (
      <NoteItem key={note.id} id={note.id} note={note} onNoteSelect={onNoteSelect}/>
    );
  });

  return (
    <ListGroup>
      { renderItems }
    </ListGroup>
  );
}

export default NoteList;
