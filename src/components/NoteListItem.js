import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';


class NoteListItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(note) {
    this.props.onNoteSelect(note);
  }
  
  render() {
    const { note } = this.props;
    return (
      <div>
        <ListGroupItem onClick={() => this.handleClick(note)}>
          {note.text}
        </ListGroupItem>
      </div>
    )
  }
}

export default NoteListItem;
