import React from 'react';
import { ListGroupItem } from 'react-bootstrap';


const NoteListItem = function(props) {

  return (
    <ListGroupItem onClick={props.onClick}>{props.note.text}</ListGroupItem> 
  )
}

export default NoteListItem;
