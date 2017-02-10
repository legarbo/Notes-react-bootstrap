import React, { Component } from 'react';
import { v4 } from 'node-uuid';
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

  removeNote(id) {
    const notes = this.state.notes.filter(
      note => note.id !== id
    )
    this.setState({notes})
  }
  render() {
    const { createNote, updateNote, removeNote, noteSelect } = this
    const { notes, isEditing, selectedNote } = this.state

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <NoteCreEdit
          isEditing={isEditing}
          createNote={createNote}
          updateNote={updateNote}
          selectedNote={selectedNote}
        />
        <NoteList 
          notes={notes} 
          onNoteSelect={(selectedNote) => noteSelect(selectedNote)}/>
      </div>
    );
  }
}

export default App;
