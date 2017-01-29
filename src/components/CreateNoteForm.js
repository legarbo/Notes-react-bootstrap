import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class CreateNoteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let text = event.target.value;
    this.setState({ value: text });
  }

  handleSubmit(event) {
    event.preventDefault();
    let text = this.state.value;
    this.props.createNote(text);
    this.setState({ value: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Note Creation</ControlLabel>
          <FormControl 
            componentClass="textarea" 
            placeholder="Create Note" 
            value={this.state.value}
            onChange={this.handleChange}/>
        </FormGroup>
        <Button type="submit" bsSize="small">Create Note</Button>
      </form>
    );
  }
}

export default CreateNoteForm;
