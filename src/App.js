import React, { Component } from 'react';
import logo from './logo.svg';
import NoteInputMode from './components/NoteInputMode'
import NoteList from './components/NoteList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      notes: [],
      isEditing: false
    }
    this.createNote = this.createNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  createNote(text) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var newNote = {id: id, text: text};
    var notes = this.state.notes;
    notes.push(newNote);

    this.setState({
      notes: notes 
    });
  }
  handleClick(event) {
    event.preventDefault();
    console.log(event.target.innerHTML);
    this.setState({isEditing: true})
  }

  updateNote(id, text) {
    var notes = this.state.notes;
    var updatedNotes = [];
    updatedNotes = notes.map(note => {

      if(note.id === id) {
        note = {id: id, text: text}
      }
      return updatedNotes;
    });
    this.setState({
      notes: updatedNotes
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <NoteInputMode
          notes={this.state.notes} 
          isEditing={this.state.isEditing}
          onCreateNote={this.createNote}
          onUpdateNote={this.updateNote} />

        <NoteList notes={this.state.notes} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
