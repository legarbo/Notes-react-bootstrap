import React from 'react';
import { ListGroup } from 'react-bootstrap';

import NoteListItem from './NoteListItem';

const NoteList = ({notes = [], onNoteSelect=f => f}) =>

  <ListGroup>
    {(notes.length === 0) ?
      <p>No Notes Listed. (Add a Note)</p> :
      notes.map(note =>
        <NoteListItem key={note.id} note={note} 
          onNoteSelect={ (note) => onNoteSelect(note)}/>
      )
    }
  </ListGroup>
export default NoteList;
