import React, { Component } from 'react';
import { ButtonToolbar,Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class EditNoteForm extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      value: props.selectedNote.text || ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
  }
  componentDidMount() {
    console.log('EditNoteForm did mount.')
    console.log(`Current note content: ${this.props.selectedNote.text}`)
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
    if (text && text.length !== 0) {
      this.props.updateNote(id, text);
    }
  }
  cancelUpdate() {
    this.props.cancelUpdate();
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Partial o total note replacement</ControlLabel>
            <FormControl
              value={this.state.value}
              onChange={this.handleChange}
              componentClass="textarea" 
              placeholder="Edit note selected" 
            />
          </FormGroup>
          <ButtonToolbar>
            <Button type="submit" bsSize="small">Update</Button>
            <Button type="submit" bsSize="small" onClick={this.cancelUpdate}>Cancel</Button>
          </ButtonToolbar>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;
