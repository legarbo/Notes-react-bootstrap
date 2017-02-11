import React, { Component } from 'react';
import { Grid, Row, Col, ListGroupItem, Button } from 'react-bootstrap';


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
        <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <ListGroupItem 
                  className="list-group-item"
                  onClick={() => this.handleClick(note)}>
                  {note.text}
                </ListGroupItem>
                  {' '}
              </Col>
              <Col xs={2} md={2}>
                <Button
                  className="removeBtn"
                  bsStyle="danger"
                  onClick={() => this.handleRemoveNote(note.id)}>
                    Remove
                </Button>
              </Col>
              <Col xs={4} md={2}>
              </Col>
            </Row>
        </Grid>
      </div>
    )
  }
}

export default NoteListItem;
