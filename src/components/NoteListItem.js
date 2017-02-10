import React, { Component } from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';


class NoteListItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }
  handleClick(note) {
    this.props.onNoteSelect(note);
  }
  handleRemoveNote(id) {
    this.props.removeNote(id);
  }
  
  render() {
    const { note } = this.props;
    return (
      <div>
        <ListGroupItem onClick={() => this.handleClick(note)}>
          {note.text}
        </ListGroupItem><Button 
          onClick={() => this.handleRemoveNote(note.id)}>Remove</Button>
      </div>
    )
  }
}

export default NoteListItem;
