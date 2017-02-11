import React from 'react';
import { ListGroup } from 'react-bootstrap';

import NoteListItem from './NoteListItem';

const NoteList = ({notes = [], onNoteSelect = f => f, removeNote = f => f}) =>

  <ListGroup>
    <h3><b>Note List</b></h3>
    {(notes.length === 0) ?
      <p>No Notes Listed. (Add a Note on left box)</p> :
      <p><b>To Edit click over a note</b></p>}
      {
      notes.map(note =>

            <NoteListItem key={note.id} note={note} {...note }
              onNoteSelect={ (note) => onNoteSelect(note)}
              removeNote={ (id) => removeNote(id)} />
        )
      }
  </ListGroup>
export default NoteList;
