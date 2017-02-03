import React, { Component } from 'react';
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
    }
    this.createNote = this.createNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  createNote(text) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var newNote = {id: id, text: text};
    var state = this.state.notes;
    var newNotesState = [...state, newNote]
    this.setState({
      notes: newNotesState 
    });
  }
  handleEdit() {
    this.setState({
      isEditing: true
    });
  }

  updateNote(id, text) {
    var notes = this.state.notes;
    var updatedNotes = [];
    updatedNotes = notes.map(note => {
      if(note.id === id) {
        note.text = text;
        note.id = id;
      }
      return updatedNotes;
    });
    this.setState({
      notes: updatedNotes,
      isEditing: false,
      selectedNote: null
    });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <NoteCreEdit
          isEditing={this.state.isEditing}
          createNote={this.createNote}
          updateNote={this.updateNote}
        />
        <NoteList notes={this.state.notes} onNoteSelect={this.handleEdit}/>
      </div>
    );
  }
}

export default App;
