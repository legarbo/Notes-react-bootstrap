import React from 'react';
import { ListGroup } from 'react-bootstrap';

import NoteItem from './NoteItem';

const NoteList = function(props) {

  let renderItems = props.notes.map(note => {
    return (
      <NoteItem key={note.id}  id={note.id} note={note} onClick={props.onClick}/>
    );
  });

  return (
    <ListGroup>
      { renderItems }
    </ListGroup>
  );
}

export default NoteList;
