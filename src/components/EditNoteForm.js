import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class EditNoteForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  componentDidMount() {
    console.log('EditNoteForm did mount.')
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleUpdate();
  }
  handleUpdate() {
    const id = this.props.selectedNote.id;
    const text = this.state.value;
    this.props.updateNote(id, text);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Note Edition</ControlLabel>
          <FormControl
            value={this.state.value}
            onChange={this.handleChange}
            componentClass="textarea" 
            placeholder="Edit note selected" 
          />
        </FormGroup>
        <Button type="submit" bsSize="small">Update</Button>
      {/*<Button type="submit" bsSize="small">Cancel</Button> */} 
      </form>
    );
  }
}

export default EditNoteForm;
