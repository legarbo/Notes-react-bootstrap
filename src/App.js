import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import NoteCreEdit from './components/NoteCreEdit';
import NoteList from './components/NoteList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      notes: [],
      isEditing: false,
      selectedNote: null
    }
    this.createNote = this.createNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.noteSelect = this.noteSelect.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }
  createNote(text) {
    const notes = [
      ...this.state.notes,
      {
        id: v4(),
        text
      }
    ]
    this.setState({
      notes: notes 
    });
  }
  noteSelect(selectedNote) {
    this.setState({
      selectedNote: selectedNote,
      isEditing: true
    });
  }

  updateNote(id, text) {
    const notes = this.state.notes.map(note => 
      (note.id !== id) ?
        note :
        {
          ...note,
          text
        }
    );
    this.setState({
      notes: notes,
      isEditing: false,
      selectedNote: null
    });
  }
  cancelUpdate() {
    this.setState({isEditing: false});
  }

  removeNote(id) {
    const notes = this.state.notes.filter(
      note => note.id !== id
    )
    this.setState({notes})
  }
  render() {
    const { createNote, updateNote, removeNote, noteSelect, cancelUpdate } = this
    const { notes, isEditing, selectedNote } = this.state

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
    <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <NoteCreEdit
              isEditing={isEditing}
              createNote={createNote}
              updateNote={updateNote}
              cancelUpdate={cancelUpdate}
              selectedNote={selectedNote}
            />
          </Col>
          <Col xs={12} md={8}>
            <NoteList 
              notes={notes} 
              onNoteSelect={(selectedNote) => noteSelect(selectedNote)}
              isEditing={isEditing}
              removeNote={(id) => removeNote(id)}
            />
          </Col>
        </Row>
    </Grid>
      </div>
    );
  }
}

export default App;
